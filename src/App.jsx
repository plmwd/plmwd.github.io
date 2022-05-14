import { Route, Routes } from "react-router-dom";
import "./App.css";
import CommandLine from "./components/CommandLine";
import VimBar from "./components/VimBar";
import { useVim } from "./vim";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import { addShortcut } from "./shortcuts";

const navs = [
  {
    name: "PW",
    to: "/",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Experience",
    to: "experience",
  },
  {
    name: "Projects",
    to: "projects",
  },
  // {
  //   name: "Blog",
  //   to: "posts",
  // },
  {
    name: "Contact",
    to: "contact",
  },
];

addShortcut("gt", () => console.log("calling gt"))

function App() {
  useVim()

  return (
    <div className="h-full w-full">
      <VimBar navs={navs} />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="bottom-0 fixed w-screen">
        <CommandLine />
      </div>
    </div>
  );
}

export default App;
