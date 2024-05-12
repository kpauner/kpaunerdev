import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(value);
    },
  });

  return (
    <div className="p-2">
      <h3>Contact</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="name"
            children={(field) => (
              <>
                <Label htmlFor="name">Name</Label>
                <Input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="text"
                  id="name"
                />
                {field.state.meta.errors ? (
                  <em role="alert">{field.state.meta.errors.join(", ")}</em>
                ) : null}
              </>
            )}
          />
        </div>

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" />
        <Label htmlFor="message">Message</Label>
        <Textarea id="message"></Textarea>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Submit"}
            </Button>
          )}
        />
      </form>
      <p>
        Or <a href="https://twitter.com/kpauner">follow me on Twitter</a>
      </p>
    </div>
  );
}
