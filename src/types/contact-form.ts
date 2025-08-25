import { z } from "zod"

export const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Email is required" })
    .min(1, { message: "Email is required" }),
  message: z.string().min(1, { message: "Message is required" }),
})

export type ContactFormType = z.infer<typeof ContactFormSchema>
