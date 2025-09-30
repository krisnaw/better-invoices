import {getInvoicesById} from "@/db/query/invoice-query";

export default async function EditInvoicePage({params}: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const invoice = await getInvoicesById(id)
  return (
    <div>
      has invoice
    </div>
  )
}