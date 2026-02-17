#!/usr/bin/env bash
# Updates README.md and CLAUDE.md project structure sections
# Run manually or triggered by Claude Code hook after file changes

set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

# --- Update README.md project structure ---

# Generate tree of src/ (excluding node_modules, dist)
TREE=$(find src -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.css' \) | sort | while read -r f; do
  # Calculate depth for indentation
  depth=$(echo "$f" | tr '/' '\n' | wc -l)
  indent=""
  for ((i=1; i<depth; i++)); do indent="$indent    "; done
  basename=$(basename "$f")
  echo "${indent}${basename}"
done)

# Build a proper tree with directories
STRUCTURE=$(find src -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.css' \) | sort | awk -F/ '
{
  for (i=1; i<=NF; i++) {
    key = ""
    for (j=1; j<=i; j++) key = key "/" $j
    if (!(key in seen)) {
      seen[key] = 1
      indent = ""
      for (j=2; j<i; j++) indent = indent "    "
      prefix = (i < NF) ? "├── " : "├── "
      if (i == 1) print $i "/"
      else print indent "├── " $i ((i < NF) ? "/" : "")
    }
  }
}')

# Build docs tree
DOCS_TREE=$(find docs -type f -name '*.md' 2>/dev/null | sort | while read -r f; do
  echo "├── $(basename "$f")"
done)

# Count components
UI_COUNT=$(find src/components/ui -name '*.tsx' 2>/dev/null | wc -l)
LAYOUT_COUNT=$(find src/components/layout -name '*.tsx' 2>/dev/null | wc -l)
TOTAL_TSX=$(find src -name '*.tsx' -o -name '*.ts' | wc -l)

# Update README structure section using awk
# We replace between ```\nsrc/ and the closing ```
cat > /tmp/readme-structure.txt << 'INNEREOF'
```
INNEREOF

# Build clean structure
{
  echo '```'
  echo 'src/'

  # index.css and top-level files
  for f in $(find src -maxdepth 1 -type f | sort); do
    name=$(basename "$f")
    case "$name" in
      index.css) echo "├── index.css                  # Tailwind config + CSS variables" ;;
      App.tsx) echo "├── App.tsx                    # Root component" ;;
      main.tsx) echo "├── main.tsx                   # Entry point" ;;
      *) echo "├── $name" ;;
    esac
  done

  # lib/
  if [ -d src/lib ]; then
    echo "├── lib/"
    for f in $(find src/lib -type f | sort); do
      name=$(basename "$f")
      echo "│   └── $name"
    done
  fi

  # components/ui
  if [ -d src/components/ui ]; then
    echo "├── components/"
    echo "│   ├── ui/                    # shadcn/ui primitives"
    files=($(find src/components/ui -type f -name '*.tsx' | sort))
    for ((i=0; i<${#files[@]}; i++)); do
      name=$(basename "${files[$i]}")
      if [ $i -eq $((${#files[@]}-1)) ] && [ ! -d src/components/layout ]; then
        echo "│   │   └── $name"
      else
        echo "│   │   ├── $name"
      fi
    done
  fi

  # components/layout
  if [ -d src/components/layout ]; then
    echo "│   └── layout/"
    files=($(find src/components/layout -type f -name '*.tsx' | sort))
    for ((i=0; i<${#files[@]}; i++)); do
      name=$(basename "${files[$i]}")
      if [ $i -eq $((${#files[@]}-1)) ]; then
        echo "│       └── $name"
      else
        echo "│       ├── $name"
      fi
    done
  fi

  # Other component directories
  for dir in $(find src/components -mindepth 1 -maxdepth 1 -type d | sort); do
    dirname=$(basename "$dir")
    [ "$dirname" = "ui" ] || [ "$dirname" = "layout" ] && continue
    echo "│   ├── $dirname/"
    files=($(find "$dir" -type f -name '*.tsx' | sort))
    for ((i=0; i<${#files[@]}; i++)); do
      name=$(basename "${files[$i]}")
      if [ $i -eq $((${#files[@]}-1)) ]; then
        echo "│   │   └── $name"
      else
        echo "│   │   ├── $name"
      fi
    done
  done

  # hooks/
  if [ -d src/hooks ]; then
    echo "├── hooks/"
    for f in $(find src/hooks -type f | sort); do
      echo "│   └── $(basename "$f")"
    done
  fi

  # docs
  if [ -d docs ]; then
    echo "docs/"
    files=($(find docs -type f -name '*.md' | sort))
    for ((i=0; i<${#files[@]}; i++)); do
      name=$(basename "${files[$i]}")
      if [ $i -eq $((${#files[@]}-1)) ]; then
        echo "└── $name"
      else
        echo "├── $name"
      fi
    done
  fi

  echo '```'
} > /tmp/new-structure.txt

# Replace the structure block in README.md
python3 -c "
import re, sys

with open('README.md', 'r') as f:
    content = f.read()

with open('/tmp/new-structure.txt', 'r') as f:
    new_structure = f.read().rstrip()

# Match the project structure code block
pattern = r'(## Project Structure\n\n)\`\`\`\n.*?\`\`\`'
replacement = r'\1' + new_structure.replace('\\\\', '\\\\\\\\')
new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

if new_content != content:
    with open('README.md', 'w') as f:
        f.write(new_content)
    print('README.md structure updated')
else:
    print('README.md structure unchanged')
"

# --- Update CLAUDE.md key files if new important files added ---

echo "Docs update complete."
