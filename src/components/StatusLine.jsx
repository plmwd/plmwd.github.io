import { useVim } from "../vim";
import { FaCodeBranch } from "react-icons/fa";

const modeColors = {
  normal: {
    bg: "bg-cyan-300",
    text: "text-gray-300",
  },
  command: {
    bg: "bg-magenta-300",
    text: "text-gray-300",
  },
}

export default function StatusLine() {
  const { mode } = useVim()
  const modeBg = modeColors[mode].bg
  const modeFg = modeColors[mode].text

  const Mode = (
    <div className={`${modeBg} ${modeFg} w-24 font-bold font-mono flex items-center pl-2`}>
      <p>{mode.toUpperCase()}</p>
    </div>
  )

  const Git = (
    <div className="w-24 font-mono flex items-center align-middle pl-2">
      <FaCodeBranch className="fill-yellow-400"/>
      <p className="pl-2 text-white-400">master</p>
    </div>
  )

  return (
    <div className="h-full w-full bg-gray-500 flex flex-row font-mono text-sm">
    {Mode}
    {Git}
    </div>
  );
}
