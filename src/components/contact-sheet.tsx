"use client"
import { useContactSheet } from "@/hooks/use-contact-sheet"
import React from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader } from "@/components/ui/sheet"
import Heading from "./heading"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { useForm } from "react-hook-form"
import { Input } from "./ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import LoadingButton from "./ui/loading-button"
import { Textarea } from "./ui/textarea"
import { sendEmailAction } from "@/lib/actions/email-actions"
import { ContactFormSchema, ContactFormType } from "@/types/contact-form"

export default function ContactSheet() {
  const contactSheet = useContactSheet()
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  })

  const isSubmitting = form.formState.isSubmitting

  async function onSubmit(data: ContactFormType) {
    await sendEmailAction(data)
  }

  return (
    <Sheet open={contactSheet.isOpen} onOpenChange={contactSheet.onClose}>
      <SheetContent
        side="left"
        className="no-scrollbar w-[90vw] overflow-y-auto border-none bg-primary p-10 dark:bg-primary dark:text-accent-foreground md:max-w-2xl md:p-16"
      >
        <SheetHeader className="pb-6">
          <h2 className="pb-6 text-[clamp(3rem,12vmin,12rem)] leading-none text-background dark:text-background">
            Let&apos;s work together
          </h2>
          <SheetDescription className="pb-6 text-lg tracking-wide text-background dark:text-background">
            Need to get in touch? Or maybe you just want to say hello? Send me a message and
            I&apos;ll get back to you as soon as possible.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 font-sans">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between gap-6">
                    <FormLabel className="uppercase tracking-widest text-foreground">
                      Name
                    </FormLabel>
                    <FormMessage className="uppercase text-foreground" />
                  </div>
                  <FormControl>
                    <Input
                      className="bg-background text-foreground dark:text-primary-foreground"
                      placeholder="name here"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between gap-6">
                    <FormLabel className="uppercase tracking-widest text-foreground">
                      Email
                    </FormLabel>
                    <FormMessage className="uppercase text-foreground" />
                  </div>
                  <FormControl>
                    <Input
                      className="bg-background text-foreground dark:text-primary-foreground"
                      type="email"
                      placeholder="email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between gap-6">
                    <FormLabel className="uppercase tracking-widest text-foreground">
                      Message
                    </FormLabel>
                    <FormMessage className="uppercase text-foreground" />
                  </div>
                  <FormControl>
                    <Textarea
                      className="bg-background text-foreground dark:text-primary-foreground"
                      placeholder="Your message here"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <LoadingButton
              variant="default"
              size="lg"
              loading={isSubmitting}
              type="submit"
              className="bg-background text-foreground  dark:text-primary-foreground"
            >
              Submit
            </LoadingButton>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
