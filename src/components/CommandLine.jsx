import { useVim } from "../vim";

export default function CommandLine() {
  const { command } = useVim();

  return (
    <div className="w-full bg-dark-gunmetal text-lavendar text-mono h-full px-3">
      <p>{command}</p>
    </div>
  );
}
