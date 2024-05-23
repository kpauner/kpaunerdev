import { useEffect, useState } from "react"

type SvgIconProps = { src: string; className?: string }

export const SvgImporter = ({ src, className }: SvgIconProps) => {
  const [svgMarkup, setSvgMarkup] = useState("")

  useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((svgData) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(svgData, "image/svg+xml")
        const svg = doc.querySelector("svg")
        if (svg) {
          svg.setAttribute("width", "100%")
          svg.setAttribute("height", "100%")
          setSvgMarkup(svg.outerHTML)
        }
      })
      .catch((error) => {
        console.error("Error fetching SVG:", error)
      })
  }, [src])

  return <div className={className} dangerouslySetInnerHTML={{ __html: svgMarkup }} />
}
