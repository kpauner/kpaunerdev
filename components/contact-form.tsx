"use client";

import { Input } from "@/components/ui/input";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import React from "react";

type ContactFormProps = {};

export default function ContactForm({}: ContactFormProps) {
  // async function onSubmit(data: ContactFormType) {
  //   await sendEmailAction(data)
  // }
  return (
    <div className="md:col-span-4 space-y-6">
      <form className="space-y-6">
        <FormItem>
          <FormLabel formItemId="name">Name</FormLabel>
          <Input name="name" id="name" placeholder="Name" />
        </FormItem>
        <FormItem>
          <FormLabel formItemId="email">Email</FormLabel>
          <Input name="email" id="email" placeholder="Email" />
        </FormItem>
        <FormItem>
          <FormLabel formItemId="message">Message</FormLabel>
          <Textarea name="message" id="message" placeholder="Message" />
        </FormItem>
        <FormItem className="flex justify-end">
          <Button size="lg" type="submit" className="w-full md:w-36">
            Send
          </Button>
        </FormItem>
      </form>
    </div>
  );
}
