import * as authSchema from "./auth-schema"
import * as invoiceSchema from "./invoice-schema"
import * as customerSchema from "./customer-schema"

export const schema = {
  ...authSchema,
  ...invoiceSchema,
  ...customerSchema,
}
