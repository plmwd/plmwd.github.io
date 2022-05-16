import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CommandLine from "./components/CommandLine";
import VimBar from "./components/VimBar";
import { useVim } from "./vim";
import { useShortcut } from "./shortcuts";
import Sidebar from "./components/Sidebar";
import StatusLine from "./components/StatusLine";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";

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
    to: "projects",
  },
  {
    name: "Blog",
    to: "posts",
  },
  // {
  //   name: "Contact",
  //   to: "contact",
  // },
];

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [test, setTest] = useState("ree");
  console.log(useVim());
  const navigate = useNavigate()

  useShortcut("gt", () => navigate("posts"));
  useShortcut("gT", () => setTest("REEE"));

  console.log(test);
  return (
    <div className="h-screen w-screen bg-gray-200 flex flex-col">
      <div className="h-12 flex flex-row bg-gray-400 items-stretch">
        <div className="trapezoid w-5 bg-magenta-400 after:bg-magenta-400 rounded-sm after:rounded-sm mr-0 my-1 -left-1"></div>
        <div 
          className="flex items-center after:rounded-sm rounded-sm -skew-x-12 px-3 mr-2 my-2 bg-gray-300 ring-2 ring-magenta-500 ring-offset-2 ring-offset-gray-400 after:bg-gray-300 ml-2 hover:cursor-pointer hover:bg-magenta-400 hover:after:bg-magenta-400"
          onClick={() => navigate("/")}
        >
          <a className="font-mono tracking-[0.3em] text-white-400 skew-x-12 font-black text-lg hover:text-gray-300">
            PW
          </a>
        </div>
        <div className="w-0.5 bg-magenta-400 rounded-sm my-1 -skew-x-12 mx-0"></div>
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
