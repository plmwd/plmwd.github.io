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
  useVim();

  return (
    <div className="h-screen w-screen bg-gray-200 flex flex-col">
      <div className="h-6">
        <VimBar navs={navs} />
      </div>
      <div className="flex flex-row h-full">
        <div className="w-52">
          <Sidebar items={items} />
        </div>
        <div className="flex-auto">
          <Routes>
            <Route path="/" element={<About setItems={setItems} />} />
            <Route path="posts" element={<Posts setItems={setItems}/>} />
            <Route path="projects" element={<Projects setItems={setItems}/>} />
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
