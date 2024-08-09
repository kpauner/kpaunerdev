"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return <div ref={ref} className={cn("space-y-2", className)} {...props} />;
});
FormItem.displayName = "FormItem";

interface FormLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  formItemId?: string;
}
const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, formItemId, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn("text-destructive", className)}
        htmlFor={formItemId}
        {...props}
      />
    );
  }
);
FormLabel.displayName = "FormLabel";

interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  formDescriptionId?: string;
}

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, formDescriptionId, ...props }, ref) => {
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  formMessageId?: string;
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, formMessageId, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn("text-[0.8rem] font-medium text-destructive", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

FormMessage.displayName = "FormMessage";

export { FormItem, FormLabel, FormDescription, FormMessage };
