import { useEffect } from "react"

export default function About({ setTitle, setItems }) {
  useEffect(() => {
    setTitle("~/About/")
    setItems([
      { name: "one", href: "about" },
      "two",
      { items: ["four", "five"], name: "three" },
    ])
  }, [])

  return <p>About</p>
}
