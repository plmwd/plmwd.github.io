import { useEffect } from "react";
import Section from "../components/Section";
import { usePageNav } from "../hooks/nav";

export default function Sections({ sections }) {
  const [line, setLine] = usePageNav(sections.length);

  useEffect(() => {
    location.hash = sections[line].href;
  }, [line]);


  return (
    <>
      {sections.map((sec, i) => (
        <Section
          title={sec.name}
          href={sec.href}
          // selected={line === i}
          onClick={() => setLine(i)}
          number={i}
          key={i}
        >
          {sec.body}
        </Section>
      ))}
    </>
  );
}
