import {z} from "zod";
import {customerSelectSchema} from "@/db/schema/customer-schema";
import {auth} from "@/lib/auth";

export type ZodFormattedErrors = {
  [field: string]: string[] | ZodFormattedErrors; // recursive for nested objects
};

export type ActionResponse = {
  success: boolean
  message: string,
  errors?: Record<string, string[]> | ZodFormattedErrors
  error?: string,
  data?: string | Array<object> | object | number,
}

export type SessionUserType = typeof auth.$Infer.Session.user
export type CustomerType = z.infer<typeof customerSelectSchema>
