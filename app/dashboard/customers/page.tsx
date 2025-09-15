"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
type Customer = {
  id: string
  name: string
  email: string
  company: string
  phone: string
}

const mockCustomers: Customer[] = [
  { id: 'CUST-001', name: 'Alice Johnson', email: 'alice@example.com', company: 'Acme Corp', phone: '+1 555-0101' },
  { id: 'CUST-002', name: 'Bob Smith', email: 'bob@example.com', company: 'Globex Inc', phone: '+1 555-0102' },
  { id: 'CUST-003', name: 'Carol Lee', email: 'carol@example.com', company: 'Initech', phone: '+1 555-0103' },
  { id: 'CUST-004', name: 'David Kim', email: 'david@example.com', company: 'Umbrella', phone: '+1 555-0104' },
  { id: 'CUST-005', name: 'Emma Davis', email: 'emma@example.com', company: 'Soylent', phone: '+1 555-0105' },
]

export default function Customer() {
  const router = useRouter()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>ID</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Email</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Company</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Phone</th>
              </tr>
            </thead>
            <tbody>
              {mockCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  onClick={() => router.push(`/dashboard/customers/${customer.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6', whiteSpace: 'nowrap' }}>{customer.id}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{customer.name}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{customer.email}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{customer.company}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{customer.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}