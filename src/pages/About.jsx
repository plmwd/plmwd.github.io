import { useEffect } from "react"

export default function About({ setTitle, setItems }) {
  useEffect(() => {
    setTitle("~/About.md")
    setItems([
      "one",
      "two",
      { items: ["four", "five"], name: "three" },
    ])
  }, [])

  return (
    <div className="flex flex-row">
      <div>

      </div>
    </div>
  )
}
