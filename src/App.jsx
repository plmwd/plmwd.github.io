import { useCallback, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import CommandLine from "./components/CommandLine";
import Sidebar from "./components/Sidebar";
import StatusLine from "./components/StatusLine";
import VimBar from "./components/VimBar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import { useShortcut } from "./shortcuts";
import { useCommand } from "./commands";
import { useVim } from "./vim";

const navs = [
  // {
  //   name: "PW",
  //   to: "/",
  // },
  {
    name: "About",
    to: "/",
  },
  // {
  //   name: "Experience",
  //   to: "experience",
  // },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Blog",
    to: "/posts",
  },
  // {
  //   name: "Contact",
  //   to: "contact",
  // },
];

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  console.log(useVim());
  const navigate = useNavigate();
  const location = useLocation();

  const nextTab = useCallback(() => {
    const index = navs.findIndex((nav) => nav.to === location.pathname);
    if (index === navs.length - 1) navigate(navs[0].to);
    else navigate(navs[index + 1].to);
  }, [location.pathname, navigate]);

  const prevTab = useCallback(() => {
    const index = navs.findIndex((nav) => nav.to === location.pathname);
    if (index === 0) navigate(navs[navs.length - 1].to);
    else navigate(navs[index - 1].to);
  }, [location.pathname, navigate]);

  useShortcut("gt", nextTab);
  useShortcut("n", nextTab);
  useCommand("tabnext", nextTab);

  useShortcut("p", prevTab);
  useShortcut("gT", prevTab);
  useCommand("tabprev", prevTab);

  return (
    <div className="h-screen w-screen bg-gray-400 flex flex-col">
      <div className="h-12 flex flex-row bg-gray-500 items-stretch">
        <div className="trapezoid w-5 bg-magenta-400 after:bg-magenta-400 rounded-sm after:rounded-sm mr-0 my-1 -left-1"></div>
        <div
          className="flex items-center after:rounded-sm rounded-sm -skew-x-12 px-3 mr-2 my-2 bg-gray-500 ring-2 ring-magenta-500 ring-offset-2 ring-offset-gray-500 after:bg-gray-500 ml-2 hover:cursor-pointer hover:bg-magenta-400 hover:after:bg-magenta-400"
          onClick={() => navigate("/")}
        >
          <a className="font-mono pl-1 tracking-[0.3em] text-white-400 skew-x-12 font-black text-lg hover:text-gray-500">
            PW
          </a>
        </div>
        <div className="w-1 bg-magenta-400 rounded-sm my-1 -skew-x-12 mx-0"></div>
        <div className="w-0.5 bg-magenta-400 rounded-sm my-1 -skew-x-12 ml-1"></div>
        <div className="w-0.5 bg-magenta-400 rounded-sm my-1 -skew-x-12 mx-1"></div>
        <VimBar navs={navs} />
      </div>
      <div className="flex flex-row h-full">
        <div className="w-52">
          <Sidebar title={title} items={items} />
        </div>
        <div className="flex-auto">
          <Routes>
            <Route
              path="/*"
              element={<About setTitle={setTitle} setItems={setItems} />}
            />
            <Route
              path="/posts/*"
              element={<Posts setTitle={setTitle} setItems={setItems} />}
            />
            <Route
              path="/projects/*"
              element={<Projects setTitle={setTitle} setItems={setItems} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <div className="h-5">
        <StatusLine />
      </div>
      <div className="h-5">
        <CommandLine />
      </div>
    </div>
  );
}

export default App;
