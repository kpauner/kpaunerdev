"use server"

import { ContactFormSchema } from "@/types/contact-form"
import { resend } from "../email"
import { EmailTemplate } from "@/components/emails/email-template"

type EmailActionProps = {
  email: string
  name: string
  message: string
}

export async function sendEmailAction(data: EmailActionProps) {
  const { email, name, message } = ContactFormSchema.parse(data)
  try {
    const sendEmail = await resend.emails.send({
      from: "kp@kpauner.com",
      to: "kp@kpauner.com",
      subject: "From Email Form",
      react: EmailTemplate({ name: name, message, email }),
      text: "Email powered by Resend.",
    })

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.log(error)
    return { failed: true, message: "Something went wrong" }
  }
}
