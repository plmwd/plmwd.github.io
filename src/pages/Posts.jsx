import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Section from "../components/Section";

export default function Posts() {
  const [line, setLine] = useState(0);

  return (
    <div className="flex flex-row h-full">
      <Sidebar
        title="~/blog/"
        items={["one", "two", { items: ["four", "five"], name: "three" }]}
      />
      <div className="flex-auto">
        <div className="text-white-400">
          <Hero title="Paul Wood" description="hi" />
          <Section
            title="Test"
            selected={line === 0}
            onClick={() => setLine(0)}
          >
            <p>I am a body</p>
          </Section>
          <Section
            title="Test"
            selected={line === 1}
            number={1}
            onClick={() => setLine(1)}
          >
            <p>I am a body</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
