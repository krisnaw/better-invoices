import * as authSchema from "./auth-schema"
import * as invoiceSchema from "./invoice-schema"
import * as invoiceItemSchema from "./invoice-item-schema"
import * as customerSchema from "./customer-schema"
import * as mailEventSchema from "./mail-event.schema";

export const schema = {
  ...authSchema,
  ...invoiceSchema,
  ...invoiceItemSchema,
  ...customerSchema,
  ...mailEventSchema,
}
