"use client"

import {useContext, useMemo, useState} from "react";
import useSWR from "swr";
import {CommandLoading} from "cmdk";
import {toast} from "sonner";

import {Button} from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandItem, CommandList} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CustomerType} from "@/lib/types";
import {authClient} from "@/lib/auth-client";
import {InvoiceContext} from "@/components/invoice/invoice-provider";
import {useRouter} from "next/navigation";
import {useQueryState} from "nuqs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function InvoiceCustomer() {
  const [type, setType] = useQueryState('type')
  const [invoiceId, setInvoiceId] = useQueryState('invoiceId')
  
  const [open, setOpen] = useState(false);
  const [customerId, setCustomerId] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const {data: customers, isLoading} = useSWR<CustomerType[]>(`/api/customers`, fetcher);
  const {data: session} = authClient.useSession();
  const {invoiceNumber} = useContext(InvoiceContext);
  const router = useRouter()

  const customer = useMemo(
    () => customers?.find((item) => item.id === customerId) ?? null,
    [customers, customerId],
  );

  const handleSelectCustomer = (id: number | null) => {
    setOpen(false);
    setCustomerId(id);


    if (!session?.user?.id) {
      toast.error("You need to be signed in to save the invoices draft.");
      return;
    }

    setIsSaving(true);
    void (async () => {
      try {
        const response = await fetch("/api/invoices/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerId: id,
            invoiceNumber,
            userId: session.user.id,
          }),
        });

        if (!response.ok) {
          const error = await response.json().catch(() => ({}));
          throw new Error(error?.error ?? "Unable to save invoices draft.");
        }

        const {invoice} = await response.json();
        if (invoice?.id) {
          setInvoiceId(invoice.id);
          setType('edit')
          toast.success("Invoice draft saved.");
        }
      } catch (error) {
        console.error(error);
        toast.error(error instanceof Error ? error.message : "Something went wrong");
      } finally {
        setIsSaving(false);
      }
    })();
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="w-full justify-between" disabled={isSaving}>
          <span>{customer ? customer.name : "Select customer"}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <Command>
          <CommandList>
            {isLoading && <CommandLoading>Loading customers…</CommandLoading>}
            <CommandEmpty>No customers found.</CommandEmpty>
            <CommandGroup heading="Customers">
              <CommandItem disabled={isSaving} onSelect={() => handleSelectCustomer(null)}>
                Clear selection
              </CommandItem>
              {(customers ?? []).map((item) => (
                <CommandItem
                  key={item.id}
                  disabled={isSaving}
                  onSelect={() => handleSelectCustomer(item.id)}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
