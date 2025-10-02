"use client"
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import React, {useContext} from "react";
import {InvoiceContext} from "@/app/new/invoice-provider";
import {Button} from "@/components/ui/button";
import {createInvoiceAction} from "@/app/actions/invoice/invoice-create.action";
import {SessionUserType} from "@/lib/types";

export default function InvoiceCard({user, children} : {user: SessionUserType, children: React.ReactNode}) {
  const {state: invoiceState, dispatch} = useContext(InvoiceContext);
  const onClickHandler = async () => {

    const payload = {
      ...invoiceState,
      userId: user.id,
    };

    const res = await createInvoiceAction(payload);

  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>{invoiceState.invoiceNumber}</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>
          <Button onClick={onClickHandler}>Save</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
