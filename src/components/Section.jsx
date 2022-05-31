import Line from "./Line";
import { Link, useLocation } from "react-router-dom";
import { IoLink } from "react-icons/io5";

export default function Section({
  children,
  title,
  href,
  number,
  selected,
  onClick,
}) {
  const { hash } = useLocation();
  return (
    <Line
      selected={(href && hash === `#${href}`) || (!href && selected)}
      number={number}
      onClick={onClick}
    >
      <div className="flex flex-col w-full">
        <Link
          to={`#${href}`}
          className="flex group items-center font-mono capitalize text-3xl font-black text-cyan-400"
        >
          <p>{title}</p>
          <IoLink className="ml-3 text-white-500 hidden group-hover:flex"/>
        </Link>
        <div className="mt-2 ml-0">{children}</div>
      </div>
    </Line>
  );
}
