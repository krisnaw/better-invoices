import type {CSSProperties} from "react"
import {Skeleton} from "@/components/ui/skeleton"

const headerStyle: CSSProperties = {
  textAlign: "left",
  padding: "8px",
  borderBottom: "1px solid #e5e7eb"
}

const cellStyle: CSSProperties = {
  padding: "10px 8px",
  borderBottom: "1px solid #f3f4f6"
}

const columnClasses = [
  "h-4 w-24",
  "h-4 w-40",
  "h-4 w-32",
  "h-4 w-32",
  "h-4 w-20",
  "h-6 w-24"
]

export function InvoiceListSkeleton({rows = 5}: {rows?: number}) {
  return (
    <div style={{overflowX: "auto"}}>
      <table style={{width: "100%", borderCollapse: "collapse"}}>
        <thead>
        <tr>
          <th style={headerStyle}>Number</th>
          <th style={headerStyle}>Customer</th>
          <th style={headerStyle}>Issue Date</th>
          <th style={headerStyle}>Due Date</th>
          <th style={headerStyle}>Amount</th>
          <th style={headerStyle}>Status</th>
        </tr>
        </thead>
        <tbody>
        {Array.from({length: rows}).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {columnClasses.map((classes, colIndex) => (
              <td key={colIndex} style={cellStyle}>
                <Skeleton className={classes} />
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
