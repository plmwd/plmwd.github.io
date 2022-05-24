import { useMemo } from "react";
import { VscFolder, VscFile } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const levelMap = {
  0: "ml-0",
  1: "ml-3",
};

export default function Sidebar({ title, items, icons }) {
  const navigate = useNavigate();
  let compiled = useMemo(() => {
    let compiled = [{
      level: 0,
      name: title || "~/",
      href: null,
      icon: undefined,
      color: "orange-400",
    }];
    items.forEach((item) => {
      if (item.items) {
        compiled.push({
          level: 0,
          name: item.name || "null",
          href: null,
          icon: (Array.isArray(icons) && icons[0]) || item.icon || <VscFolder />,
          color: "blue-300",
        });

        item.items.forEach((subItem) => {
          compiled.push({
            level: 1,
            name: subItem.name || subItem,
            href: subItem.href || `#${item.name}-${subItem.name || subItem}`,
            icon: (Array.isArray(icons) && icons[1]) || subItem.icon || <VscFile />,
            color: subItem.color || "white-400",
          });
        });
      } else {
        compiled.push({
          level: 0,
          name: item.name || item,
          href: item.href || `#${item.name || item}`,
          icon: (Array.isArray(icons) && icons[0]) || item.icon || <VscFile />,
          color: item.color || "white-400",
        });
      }
    });

    return compiled;
  }, [items]);

  return (
    <div className="hidden sm:flex container pt-1 h-full w-52 flex-col bg-gray-500 font-mono text-sm pl-3 border-r-4 border-gray-200">
      {compiled.map((item, i) => (
        <div
          className={`flex flex-row items-center text-${item.color} fill-${
            item.color
          } ${levelMap[item.level]} ${item.href ? "cursor-pointer" : ""}`}
          onClick={item.href ? () => navigate(item.href) : undefined}
          key={i}
        >
          {item.icon}
          <p className="ml-1">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
