import { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import { useShortcut } from "../shortcuts";
import {
  IoInformation,
  IoAlbums,
  IoConstruct,
  IoRocket,
  IoPhonePortrait,
} from "react-icons/io5";

const sections = [
  {
    title: "About",
    icon: <IoInformation />,
    body: <></>,
  },
  {
    title: "Experience",
    icon: <IoAlbums />,
    color: "yellow-400",
    body: <></>,
  },
  {
    title: "Skills",
    icon: <IoConstruct />,
    color: "cyan-400",
    body: <></>,
  },
  {
    title: "Highlighted Projects",
    icon: <IoRocket />,
    color: "red-400",
    body: <></>,
  },
  {
    title: "Contact",
    icon: <IoPhonePortrait />,
    color: "magenta-400",
    body: <></>,
  },
];

export default function About() {
  const [line, setLine] = useState(0);

  useShortcut("j", () => setLine(Math.min(line + 1, sections.length - 1)));
  useShortcut("k", () => setLine(Math.max(line - 1, 0)));

  return (
    <div className="flex flex-row h-full">
      <Sidebar
        title="~/About.md"
        items={sections.map(sec => ({ name: sec.title, icon: sec.icon, color: sec.color }))}
      />
      <div className="flex-auto text-white-400">
        <Hero title="Paul Wood" description="Full-stack IoT developer" />
        {sections.map((sec, i) => (
          <Section
            title={sec.title}
            selected={line === i}
            onClick={() => setLine(i)}
            number={i}
            key={i}
          >
            {sec.body}
          </Section>
        ))}
      </div>
    </div>
  );
}
