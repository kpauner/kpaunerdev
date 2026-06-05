import { z } from "zod"

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
})

export type SignInFormValues = z.infer<typeof signInSchema>
