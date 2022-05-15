import { useEffect } from "react"

export default function Projects({ setItems }) {
  useEffect(() => {
    setItems([])
  }, [])
  return (
    <p>Projects</p>
  )
}
