import { useCommand } from "../modes"

export default function CommandLine() {
  const cmd = useCommand()

  return (
    <div className="w-full bg-dark-gunmetal h-5 px-3">
      {cmd && <p>{cmd}</p>} 
    </div>
  )
}
