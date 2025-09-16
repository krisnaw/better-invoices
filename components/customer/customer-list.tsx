"use client"
import {CustomerItem} from "@/components/customer/customer-item";

export function CustomerList({customers} : {customers: any[]}) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Name</th>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Contact Person</th>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Email</th>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Company</th>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #e5e7eb' }}>Actions</th>
        </tr>
        </thead>
        <tbody>
        {customers.map((customer) => (
          <CustomerItem key={customer.id} customer={customer} />
        ))}
        </tbody>
      </table>
    </div>
  )
}