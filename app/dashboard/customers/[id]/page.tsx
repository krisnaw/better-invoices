import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
type Customer = {
  id: string
  name: string
  email: string
  company: string
  phone: string
}

type Invoice = {
  id: string
  customerId: string
  number: string
  issueDate: string
  dueDate: string
  amount: number
  status: 'Paid' | 'Unpaid' | 'Overdue'
}

const mockCustomers: Customer[] = [
  { id: 'CUST-001', name: 'Alice Johnson', email: 'alice@example.com', company: 'Acme Corp', phone: '+1 555-0101' },
  { id: 'CUST-002', name: 'Bob Smith', email: 'bob@example.com', company: 'Globex Inc', phone: '+1 555-0102' },
  { id: 'CUST-003', name: 'Carol Lee', email: 'carol@example.com', company: 'Initech', phone: '+1 555-0103' },
  { id: 'CUST-004', name: 'David Kim', email: 'david@example.com', company: 'Umbrella', phone: '+1 555-0104' },
  { id: 'CUST-005', name: 'Emma Davis', email: 'emma@example.com', company: 'Soylent', phone: '+1 555-0105' },
]

const mockInvoices: Invoice[] = [
  { id: 'INV-1001', customerId: 'CUST-001', number: 'INV-1001', issueDate: '2025-08-01', dueDate: '2025-08-15', amount: 1200, status: 'Paid' },
  { id: 'INV-1002', customerId: 'CUST-001', number: 'INV-1002', issueDate: '2025-08-20', dueDate: '2025-09-04', amount: 300, status: 'Unpaid' },
  { id: 'INV-1003', customerId: 'CUST-002', number: 'INV-1003', issueDate: '2025-07-10', dueDate: '2025-07-25', amount: 450, status: 'Paid' },
  { id: 'INV-1004', customerId: 'CUST-003', number: 'INV-1004', issueDate: '2025-09-01', dueDate: '2025-09-16', amount: 980, status: 'Overdue' },
  { id: 'INV-1005', customerId: 'CUST-002', number: 'INV-1005', issueDate: '2025-09-05', dueDate: '2025-09-20', amount: 150, status: 'Unpaid' },
]

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  const customer = mockCustomers.find((c) => c.id === id)
  const invoices = mockInvoices.filter((inv) => inv.customerId === id)

  if (!customer) {
    return (
      <div>
        <h1>Customer Not Found</h1>
        <p>No customer found for id: {id}</p>
      </div>
    )
  }

  const currency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Customer Detail</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Customer ID</div>
              <div style={{ fontWeight: 500 }}>{customer.id}</div>
            </div>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Company</div>
              <div style={{ fontWeight: 500 }}>{customer.company}</div>
            </div>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Name</div>
              <div style={{ fontWeight: 500 }}>{customer.name}</div>
            </div>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Email</div>
              <div style={{ fontWeight: 500 }}>{customer.email}</div>
            </div>
            <div>
              <div style={{ color: '#6b7280', fontSize: 12 }}>Phone</div>
              <div style={{ fontWeight: 500 }}>{customer.phone}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div style={{ height: 16 }} />

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
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Issue Date</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Due Date</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Amount</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ padding: '12px 8px', color: '#6b7280' }}>No invoices yet.</td>
                  </tr>
                ) : (
                  invoices.map((inv) => (
                    <tr key={inv.id}>
                      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6', whiteSpace: 'nowrap' }}>{inv.number}</td>
                      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{inv.issueDate}</td>
                      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{inv.dueDate}</td>
                      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{currency(inv.amount)}</td>
                      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{inv.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


