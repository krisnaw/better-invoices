import type {CSSProperties} from "react"
import {Skeleton} from "@/components/ui/skeleton"

const headerStyle: CSSProperties = {
  textAlign: "left",
  padding: "8px",
  borderBottom: "1px solid #e5e7eb"
}

const cellStyle: CSSProperties = {
  padding: "8px",
  borderBottom: "1px solid #e5e7eb"
}

const columnWidths = ["w-40", "w-32", "w-48", "w-36", "w-24"]

export function CustomerListSkeleton({rows = 5}: {rows?: number}) {
  return (
    <div style={{overflowX: "auto"}}>
      <table style={{width: "100%", borderCollapse: "collapse"}}>
        <thead>
        <tr>
          <th style={headerStyle}>Name</th>
          <th style={headerStyle}>Contact Person</th>
          <th style={headerStyle}>Email</th>
          <th style={headerStyle}>Company</th>
          <th style={headerStyle}>Actions</th>
        </tr>
        </thead>
        <tbody>
        {Array.from({length: rows}).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {columnWidths.map((width, colIndex) => (
              <td key={colIndex} style={cellStyle}>
                <Skeleton className={`h-4 ${width}`} />
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
