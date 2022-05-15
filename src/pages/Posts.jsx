import { useEffect } from "react"

export default function Posts({ setTitle, setItems }) {
  useEffect(() => {
    setTitle("~/Blog/")
    setItems([])
  }, [])

  return <p>Posts</p>
}
