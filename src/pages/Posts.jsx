import { useEffect } from "react"

export default function Posts({ setItems }) {
  useEffect(() => {
    setItems([])
  }, [])

  return <p>Posts</p>
}
