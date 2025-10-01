"use server"

import {ActionResponse} from "@/lib/types";

export async function createInvoiceAction(): Promise<ActionResponse> {
  return {
    success: true,
    message: "Invoice created successfully",
  }
}