"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ClientResponseError } from "pocketbase"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { login } from "@/features/auth/api/auth"
import {
  signInSchema,
  type SignInFormValues,
} from "@/features/auth/types/signin.schema"
import { useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import LoadingButton from "@/components/ui/loading-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter()

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const isSubmitting = form.formState.isSubmitting

  async function onSubmit(values: SignInFormValues) {
    try {
      await login(values.email, values.password)
      router.push("/dashboard")
    } catch (error) {
      const message =
        error instanceof ClientResponseError
          ? "Invalid email or password"
          : "Something went wrong. Please try again."

      toast.error(message)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Sign in to your client dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email"
                  {...form.register("email")}
                />
                {form.formState.errors.email?.message ? (
                  <FieldDescription className="text-destructive">
                    {form.formState.errors.email.message}
                  </FieldDescription>
                ) : null}
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...form.register("password")}
                />
                {form.formState.errors.password?.message ? (
                  <FieldDescription className="text-destructive">
                    {form.formState.errors.password.message}
                  </FieldDescription>
                ) : null}
              </Field>
              <Field>
                <LoadingButton
                  type="submit"
                  className="w-full"
                  loading={isSubmitting}
                >
                  Sign in
                </LoadingButton>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        Need access? Contact your kpauner representative.
      </FieldDescription>
    </div>
  )
}
