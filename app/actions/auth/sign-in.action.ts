"use server"
import {auth} from "@/lib/auth";
import {z} from "zod";
import {ActionResponse} from "@/lib/types";

const SignInSchema = z.object({
   email: z.email(),
   password: z.string().min(2),
})

type SignInData = z.infer<typeof SignInSchema>;

export async function signInAction(signData: SignInData): Promise<ActionResponse> {
   const validate = SignInSchema.safeParse(signData);
   if (!validate.success) {
      return {
         success: false,
         message: "Invalid data",
      }
   }

   try {
      const data = await auth.api.signInEmail({
         body: {
            email: validate.data.email,
            password: validate.data.password,
         },
      })
      console.log(data)
   } catch (error) {
      if (error instanceof Error) {
         console.log(error.message)
      }
      return  {
         success: false,
         message: "Sorry, something went wrong. Please try again later."
      }
   }
   return {
      success: true,
      message: "Sign in successful"
   }
}