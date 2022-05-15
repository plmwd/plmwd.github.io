import { useEffect } from "react"

export default function Home({ setItems }) {

  useEffect(() => {
    setItems([
      { name: "one", href: "about" },
      "two",
      { items: ["four", "five"], name: "three" },
    ])
  }, [])

  return (
    <p>Home</p>
  )
}
