"use client"
import {Button} from "@/components/ui/button";
import {useQueryState} from "nuqs";

export default function ButtonCreateInvoice() {

  const [type, setType] = useQueryState('type', { shallow: true})

  return (
    <div>
      <Button onClick={() => setType("create")}>Create Invoice</Button>
    </div>
  )
}