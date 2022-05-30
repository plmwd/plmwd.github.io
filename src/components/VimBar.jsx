import { useCallback, useState } from "react";
import { VscCode } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function VimBar({ navs }) {
  const [open, setOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setOpen(!open);
  });

  return (
    <nav className="hidden sm:flex bg-gray-500 h-full w-full text-sm font-mono">
      <div
        className={`
         sm:flex flex-col sm:flex-row items-stretch mx-0 bg-gray-500 h-full w-full nav-items`}
      >
        {navs.filter(n => !n.ignore).map((n) => (
          <NavLink
            to={n.to}
            className={`flex active:text-dark-gunmetal active:bg-pale-cerulean bg-gray-500 items-center px-3 mx-2 my-1.5 -skew-x-12 rounded-sm`}
            key={n.to}
          >
            <p className="skew-x-12">{n.name}</p>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
