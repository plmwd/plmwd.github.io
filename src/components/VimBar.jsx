import { useCallback, useState } from "react";
import { VscCode } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function VimBar({ navs }) {
  const [open, setOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setOpen(!open);
  });

  return (
    <nav className="bg-dark-gunmetal h-full w-full text-sm font-mono">
      <div className="flex sm:hidden items-center h-full">
        <button
          className="space-y-2 bg-independence rounded p-1"
          onClick={handleMenuClick}
        >
          <VscCode className="text-lavendar" />
        </button>
      </div>
      <div
        className={`${
          open ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center mx-0 bg-gray-400 h-full w-full nav-items`}
      >
        {navs.map((n) => (
          <NavLink
            to={n.to}
            className={`flex active:text-dark-gunmetal active:bg-pale-cerulean h-full items-center px-3 `}
            key={n.to}
          >
            <p>{n.name}</p>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
