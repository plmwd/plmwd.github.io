import { useVim } from "../vim";

export default function CommandLine() {
  const { command } = useVim();

  return (
    <div className="w-full bg-dark-gunmetal text-lavendar text-mono h-5 px-3">
      <p>{command}</p>
    </div>
  );
}
