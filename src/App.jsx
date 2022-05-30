import { useCallback } from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useCommand } from "./hooks/commands";
import CommandLine from "./components/CommandLine";
import StatusLine from "./components/StatusLine";
import VimBar from "./components/VimBar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { useShortcut } from "./hooks/shortcuts";
import { IoLogoGithub } from "react-icons/io";

const navs = [
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

const HeaderStart = () => (
  <div className="trapezoid w-5 bg-magenta-400 after:bg-magenta-400 rounded-sm after:rounded-sm mr-0 my-1 -left-1"></div>
);

const PW = () => (
  <NavLink
    className="flex items-center rounded-sm -skew-x-12 px-3 mr-2 my-2 ring-2 ring-magenta-500 ring-offset-2 ring-offset-gray-500 ml-2 hover:cursor-pointer hover:bg-magenta-400 hover:after:bg-magenta-400 bg-magenta-400"
    to="/"
  >
    <p className="font-mono pl-1 tracking-[0.3em] skew-x-12 font-black text-lg hover:text-gray-500">
      PW
    </p>
  </NavLink>
);

const Grill = () => (
  <>
    <div className="w-1 bg-magenta-400 rounded-sm my-1 -skew-x-12 mx-0"></div>
    <div className="w-0.5 bg-magenta-400 rounded-sm my-1 -skew-x-12 ml-1"></div>
    <div className="w-0.5 bg-magenta-400 rounded-sm my-1 -skew-x-12 mx-1"></div>
  </>
);

function App() {
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
      <div className="flex flex-row justify-between bg-gray-500">
        <div className="h-12 flex flex-row bg-gray-500 items-stretch">
          <HeaderStart />
          <PW />
          <Grill />
          <VimBar navs={navs} />
        </div>
        <a
          className="flex items-center mx-4 text-white-400"
          href="https://github.com/plmwd"
        >
          <IoLogoGithub size={24} />
        </a>
      </div>
      <div className="max-h-screen overflow-auto  h-full">
        <Routes>
          <Route path="/*" element={<About />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="h-6">
        <StatusLine />
      </div>
      <div className="h-6">
        <CommandLine />
      </div>
    </div>
  );
}

export default App;
