import { useEffect } from "react"

export default function About({ setItems }) {
  useEffect(() => {
    setItems([
      { name: "one", href: "about" },
      "two",
      { items: ["four", "five"], name: "three" },
    ])
  }, [])

  return <p>About</p>
}
