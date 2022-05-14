import { useCallback, useState } from "react";
import { VscCode } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function VimBar({ navs }) {
  const [open, setOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setOpen(!open);
  })


  return (
    <nav className="border-gray-200 dark:bg-dark-gunmetal w-full sticky top-0">
      <div className="bg-dark-gunmetal font-mono text-sm h-8 pl-2">
        <div className="flex sm:hidden items-center h-full">
          <button className="space-y-2 bg-independence rounded p-1" onClick={handleMenuClick} >
            <VscCode className="text-lavendar" />
          </button>
        </div>
        <div className={`${open ? "flex" : "hidden"} sm:flex flex-col sm:flex-row items-center mx-0 h-full w-full nav-items`}>
          {navs.map((n) => (
            <NavLink
              to={n.to}
              className="flex active:text-dark-gunmetal active:bg-pale-cerulean mr-2 h-full items-center px-3 w-full sm:max-w-40 flex-auto"
              key={n.to}
            >
              <p>{n.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
