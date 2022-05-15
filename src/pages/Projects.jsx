import { useEffect } from "react"

export default function Projects({ setTitle, setItems }) {
  useEffect(() => {
    setTitle("~/Projects/")
    setItems([])
  }, [])
  return (
    <p>Projects</p>
  )
}
