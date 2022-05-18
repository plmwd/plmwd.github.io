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
    <div className="flex flex-row h-full w-full px-40 py-5">
      <div className="flex h-50 w-300 border-r-4 border-magenta-400">
      </div>
    </div>
  )
}
