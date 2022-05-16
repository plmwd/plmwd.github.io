import { useVim } from "../vim";

export default function CommandLine() {
  const { command, keys } = useVim();

  return (
    <div className="flex w-full bg-dark-gunmetal text-lavendar font-mono h-full px-3 align-middle justify-between text-sm">
      <p className="align-middle">{command}</p>
      <p className="align-middle">{keys}</p>
    </div>
  );
}
