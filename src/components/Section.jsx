import Line from "./Line";
import { Link, useLocation } from "react-router-dom";

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
    <Link to={`#${href}`}>
      <Line
        selected={(href && hash === `#${href}`) || (!href && selected)}
        number={number}
        onClick={onClick}
      >
        <div className="flex flex-col ">
          <p className="font-mono capitalize ">{title}</p>
          <div className="mt-2 ml-2">{children}</div>
        </div>
      </Line>
    </Link>
  );
}
