import { useVim } from "../hooks/vim";

export default function CommandLine() {
  const { command, keys } = useVim();

  return (
    <div className="flex w-full bg-gray-500 text-lavendar font-mono h-full px-3 align-middle justify-between text-sm">
      <p className="align-middle">{command}</p>
      <p className="align-middle">{keys}</p>
    </div>
  );
}
