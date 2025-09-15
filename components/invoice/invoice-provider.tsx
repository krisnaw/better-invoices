"use client"
import React, {createContext, useState} from "react";

export const InvoiceContext = createContext({
  invoiceNumber: "INV-",
  issueDate: new Date(),
  dueDate: new Date(),
  setInvoiceNumber: (number: string) => {},
  setIssueDate: (date: Date) => {},
  setDueDate: (date: Date) => {},
})

export function InvoiceProvider({children}: {  children: React.ReactNode }) {
  const [invoiceNumber, setInvoiceNumber] = useState<string>("")
  const [issueDate, setIssueDate] = useState<Date>(new Date())
  const [dueDate, setDueDate] = useState<Date>(new Date())
  return (
    <InvoiceContext.Provider value={{invoiceNumber, issueDate, dueDate, setInvoiceNumber, setIssueDate, setDueDate}}>
      {children}
    </InvoiceContext.Provider>
  )
}