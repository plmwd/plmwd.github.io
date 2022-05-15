import { Route, Routes } from "react-router-dom";
import "./App.css";
import CommandLine from "./components/CommandLine";
import VimBar from "./components/VimBar";
import { useVim } from "./vim";
import { addShortcut } from "./shortcuts";
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

addShortcut("gt", () => console.log("calling gt"));

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  useVim();

  return (
    <div className="h-screen w-screen bg-gray-200 flex flex-col">
      <div className="h-12 flex flex-row bg-gray-400 items-stretch">
        {/* <div className="flex items-center h-full px-3 mx-3 rounded-sm -skew-x-12 bg-gray-300"> */}
        <div className="flex items-center after:rounded-sm rounded-sm px-3 mr-2 my-2 bg-gray-300 ring-2 ring-magenta-500 ring-offset-2 ring-offset-gray-400 after:bg-gray-300 ml-2">
          <a className="font-mono tracking-[0.3em] text-white-400 font-black text-lg">
            PW
          </a>
        </div>
        <VimBar navs={navs} />
      </div>
      <div className="flex flex-row h-full">
        <div className="w-52">
          <Sidebar title={title} items={items} />
        </div>
        <div className="flex-auto">
          <Routes>
            <Route
              path="/"
              element={<About setTitle={setTitle} setItems={setItems} />}
            />
            <Route
              path="posts"
              element={<Posts setTitle={setTitle} setItems={setItems} />}
            />
            <Route
              path="projects"
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
