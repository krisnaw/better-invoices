"use client"
import {Button} from "@/components/ui/button";
import {sendAction} from "@/app/actions/send.action";

export function SendMail() {
  return (
    <Button onClick={() => sendAction()}>Test</Button>
  )
}