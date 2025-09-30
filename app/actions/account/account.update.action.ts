"use server"

import {auth} from "@/lib/auth";
import {revalidatePath} from "next/cache";
import {headers} from "next/headers";

type AccountData = { id: string, email: string, name: string, }


export async function updateAccount(formData: AccountData) {

   try {
      await auth.api.updateUser({
         body: {
            name: formData.name,
         },
         headers: await headers(),
      })

   } catch (error) {
      return  {
         success: false,
         message: "Sorry, something went wrong. Please try again later."
      }
   }

   revalidatePath("/", "layout");

   return {
      success: true,
      message: "Account updated successfully"
   }
}
