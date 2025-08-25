import React from "react"

type HeaderHighImpactProps = {
  title: string
  description: string
}

export default function HeaderHighImpact({ title, description }: HeaderHighImpactProps) {
  return (
    // prose-none removes Tailwind Typography styles
    // not-prose removes Fumadocs prose styles
    <div className="not-prose prose-none">
      <h1 className="text-4xl font-bold text-red-400">{title}</h1>
      <p className="text-xl">{description}</p>
    </div>
  )
}
