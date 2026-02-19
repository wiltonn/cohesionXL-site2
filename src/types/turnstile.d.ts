interface TurnstileOptions {
  sitekey: string
  callback?: (token: string) => void
  "expired-callback"?: () => void
  "error-callback"?: () => void
  theme?: "light" | "dark" | "auto"
  size?: "normal" | "compact" | "invisible" | "flexible"
  appearance?: "always" | "execute" | "interaction-only"
}

interface TurnstileInstance {
  render: (container: string | HTMLElement, options: TurnstileOptions) => string
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
  getResponse: (widgetId?: string) => string | undefined
}

interface Window {
  turnstile?: TurnstileInstance
}
