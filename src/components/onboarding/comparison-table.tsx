interface ComparisonRow {
  from: string
  to: string
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-graphite-600">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-graphite-600 bg-graphite-800">
            <th className="px-6 py-4 text-[13px] font-semibold text-graphite-100">
              From (Current State)
            </th>
            <th className="px-6 py-4 text-[13px] font-semibold text-brand-blue-400">
              To (With CohesionXL)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.from}
              className={`border-b border-graphite-600 last:border-b-0 ${
                i % 2 === 0 ? "bg-graphite-850" : "bg-graphite-800"
              }`}
            >
              <td className="px-6 py-4 text-[14px] leading-[1.5] text-graphite-300">
                {row.from}
              </td>
              <td className="px-6 py-4 text-[14px] leading-[1.5] text-graphite-200">
                {row.to}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
