import {NextRequest, NextResponse} from "next/server";
import {getCustomers} from "@/db/query/customer-query";

export async function GET(request: NextRequest) {
  const customers = await getCustomers();
  return NextResponse.json(customers);
}