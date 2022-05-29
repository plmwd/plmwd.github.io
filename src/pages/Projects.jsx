import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import { usePageNav } from "../hooks/nav";

export default function Projects() {
  const [line, setLine] = usePageNav(2);

  return (
    <div className="page">
      <Sidebar
        title="~/projects/"
        items={["one", "two", { items: ["four", "five"], name: "three" }]}
      />
      <div className="page-content">
        <div className="text-white-400">
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
