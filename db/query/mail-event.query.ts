"use server"

import {db} from "@/db/db-connection";

export async function getMailEventByResendId(resendId: string) {
  return db.query.mailEventSchema.findMany({
    where: (mailEventSchema, { eq }) => (eq(mailEventSchema.resendMailId, resendId)),
  })
}