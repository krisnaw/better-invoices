"use client"
import {Button} from "@/components/ui/button"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Command, CommandEmpty, CommandGroup, CommandItem, CommandList} from "@/components/ui/command";
import useSWR from "swr";
import {useState} from "react";
import {CommandLoading} from "cmdk";
import {authClient} from "@/lib/auth-client";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function InvoiceCustomer() {
  const {data: session} = authClient.useSession()

  const [customerId, setCustomerId] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const { data: customers, error, isLoading } = useSWR(`/api/customers`, fetcher)
  const customer = customers?.find((customer: any) => customer.id === customerId)
  const onClickHandler = async (id: number) => {

    // when selected, store invoice as draft
    const res = await fetch("/api/invoices/save", {
      method: "POST",
      body: JSON.stringify({
        customerId: id,
        invoiceNumber: "INV-001",
        userId: session?.user?.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    setCustomerId(id)
    setOpen(false)
  }

  if (customer) {
    return (
      <div>
        {customer.name}
      </div>
    )
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost">Select customer</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command>
          <CommandList>
            {isLoading &&  <CommandLoading>loading</CommandLoading>}
            <CommandEmpty>No results found.</CommandEmpty>

            {customers && (
              <CommandGroup heading="Select customer">
                {customers.map((customer: any) => (
                  <CommandItem key={customer.id}>
                    <button onClick={() => onClickHandler(customer.id)}>
                      {customer.name}
                    </button>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
