"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type InvoiceItem = {
  id: string
  description: string
  quantity: number
  unitPrice: number
}

type Invoice = {
  id: string
  number: string
  customer: string
  issueDate: string
  dueDate: string
  status: 'Paid' | 'Unpaid' | 'Overdue'
  items: InvoiceItem[]
}

const mockInvoices: Invoice[] = [
  {
    id: 'INV-1001',
    number: 'INV-1001',
    customer: 'Acme Corp',
    issueDate: '2025-08-01',
    dueDate: '2025-08-15',
    status: 'Paid',
    items: [
      { id: '1', description: 'Website redesign', quantity: 1, unitPrice: 1000 },
      { id: '2', description: 'Hosting (Aug)', quantity: 1, unitPrice: 200 },
    ],
  },
  {
    id: 'INV-1002',
    number: 'INV-1002',
    customer: 'Acme Corp',
    issueDate: '2025-08-20',
    dueDate: '2025-09-04',
    status: 'Unpaid',
    items: [
      { id: '1', description: 'Landing page updates', quantity: 5, unitPrice: 60 },
    ],
  },
  {
    id: 'INV-1003',
    number: 'INV-1003',
    customer: 'Globex Inc',
    issueDate: '2025-07-10',
    dueDate: '2025-07-25',
    status: 'Paid',
    items: [
      { id: '1', description: 'API development', quantity: 10, unitPrice: 45 },
    ],
  },
  {
    id: 'INV-1004',
    number: 'INV-1004',
    customer: 'Initech',
    issueDate: '2025-09-01',
    dueDate: '2025-09-16',
    status: 'Overdue',
    items: [
      { id: '1', description: 'Support retainer', quantity: 1, unitPrice: 980 },
    ],
  },
  {
    id: 'INV-1005',
    number: 'INV-1005',
    customer: 'Globex Inc',
    issueDate: '2025-09-05',
    dueDate: '2025-09-20',
    status: 'Unpaid',
    items: [
      { id: '1', description: 'Bug fixes', quantity: 3, unitPrice: 50 },
    ],
  },
]

const currency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

export default function Page({ params }: { params: { id: string } }) {
  const invoice = mockInvoices.find((i) => i.id === params.id)

  if (!invoice) {
    return (
      <div>
        <h1>Invoice Not Found</h1>
        <p>No invoice found for id: {params.id}</p>
      </div>
    )
  }

  const subtotal = invoice.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Invoice {invoice.number}</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Customer</div>
              <div style={{ fontWeight: 500 }}>{invoice.customer}</div>
            </div>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Status</div>
              <div style={{ fontWeight: 500 }}>{invoice.status}</div>
            </div>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Issue Date</div>
              <div style={{ fontWeight: 500 }}>{invoice.issueDate}</div>
            </div>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Due Date</div>
              <div style={{ fontWeight: 500 }}>{invoice.dueDate}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div style={{ height: 16 }} />

      <Card>
        <CardHeader>
          <CardTitle>Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Description</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Qty</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Unit Price</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Line Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{item.description}</td>
                    <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>{item.quantity}</td>
                    <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>{currency(item.unitPrice)}</td>
                    <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>{currency(item.quantity * item.unitPrice)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} />
                  <td style={{ padding: '10px 8px', textAlign: 'right', color: '#6b7280' }}>Subtotal</td>
                  <td style={{ padding: '10px 8px', textAlign: 'right' }}>{currency(subtotal)}</td>
                </tr>
                <tr>
                  <td colSpan={2} />
                  <td style={{ padding: '10px 8px', textAlign: 'right', color: '#6b7280' }}>Tax (10%)</td>
                  <td style={{ padding: '10px 8px', textAlign: 'right' }}>{currency(tax)}</td>
                </tr>
                <tr>
                  <td colSpan={2} />
                  <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 600 }}>Total</td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 600 }}>{currency(total)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}