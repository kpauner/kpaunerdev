import * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <div>
    <h1>Message from: {name}</h1>
    <p>{message}</p>
    <hr />
    <strong>Email:</strong>
    <p>{email}</p>
  </div>
)
