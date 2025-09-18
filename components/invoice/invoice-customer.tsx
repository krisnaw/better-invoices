"use client"

import {useMemo, useState} from "react";
import useSWR from "swr";
import {CommandLoading} from "cmdk";

import {Button} from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandItem, CommandList} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CustomerType} from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function InvoiceCustomer() {
  const [open, setOpen] = useState(false);
  const [customerId, setCustomerId] = useState<number | null>(null);
  const {data: customers, isLoading} = useSWR<CustomerType[]>(`/api/customers`, fetcher);

  const customer = useMemo(
    () => customers?.find((item) => item.id === customerId) ?? null,
    [customers, customerId],
  );

  const handleSelectCustomer = (id: number | null) => {
    setCustomerId(id);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>{customer ? customer.name : "Select customer"}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <Command>
          <CommandList>
            {isLoading && <CommandLoading>Loading customers…</CommandLoading>}
            <CommandEmpty>No customers found.</CommandEmpty>
            <CommandGroup heading="Customers">
              <CommandItem onSelect={() => handleSelectCustomer(null)}>
                Clear selection
              </CommandItem>
              {(customers ?? []).map((item) => (
                <CommandItem key={item.id} onSelect={() => handleSelectCustomer(item.id)}>
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
