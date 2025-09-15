"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

type Invoice = {
  id: string
  number: string
  customer: string
  issueDate: string
  dueDate: string
  amount: number
  status: 'Paid' | 'Unpaid' | 'Overdue'
}

const mockInvoices: Invoice[] = [
  { id: 'INV-1001', number: 'INV-1001', customer: 'Acme Corp', issueDate: '2025-08-01', dueDate: '2025-08-15', amount: 1200, status: 'Paid' },
  { id: 'INV-1002', number: 'INV-1002', customer: 'Acme Corp', issueDate: '2025-08-20', dueDate: '2025-09-04', amount: 300, status: 'Unpaid' },
  { id: 'INV-1003', number: 'INV-1003', customer: 'Globex Inc', issueDate: '2025-07-10', dueDate: '2025-07-25', amount: 450, status: 'Paid' },
  { id: 'INV-1004', number: 'INV-1004', customer: 'Initech', issueDate: '2025-09-01', dueDate: '2025-09-16', amount: 980, status: 'Overdue' },
  { id: 'INV-1005', number: 'INV-1005', customer: 'Globex Inc', issueDate: '2025-09-05', dueDate: '2025-09-20', amount: 150, status: 'Unpaid' },
]

const currency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

export default function Page() {
  const router = useRouter()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Number</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Customer</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Issue Date</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Due Date</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Amount</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((inv) => (
                <tr
                  key={inv.id}
                  onClick={() => router.push(`/dashboard/invoice/${inv.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6', whiteSpace: 'nowrap' }}>{inv.number}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{inv.customer}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{inv.issueDate}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{inv.dueDate}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{currency(inv.amount)}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>
                    <Badge
                      variant={
                        inv.status === 'Overdue'
                          ? 'destructive'
                          : inv.status === 'Paid'
                            ? 'secondary'
                            : 'outline'
                      }
                    >
                      {inv.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}