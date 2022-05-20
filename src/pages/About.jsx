import Hero from "../components/Hero";
import Section from "../components/Section";
import { useEffect, useState } from "react";
import { useShortcut } from "../shortcuts";

export default function About({ setTitle, setItems }) {
  const [line, setLine] = useState(0);

  useShortcut("j", () => setLine(line + 1));
  useShortcut("k", () => setLine(line - 1));

  useEffect(() => {
    setTitle("~/About.md");
    setItems(["one", "two", { items: ["four", "five"], name: "three" }]);
  }, []);

  return (
    <div className="text-white-400">
      <Hero title="Paul Wood" description="hi" />
      <Section title="Test" selected={line === 0}>
        <p>I am a body</p>  
      </Section>    
      <Section title="Test" selected={line === 1} number={1}>
        <p>I am a body</p>  
      </Section>    
    </div>
  );
}
