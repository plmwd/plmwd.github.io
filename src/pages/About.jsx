import {
  IoAlbums,
  IoConstruct,
  IoInformation,
  IoPhonePortrait,
  IoRocket,
} from "react-icons/io5";
import Sections from "../components/Sections";
import Hero from "../components/Hero";;

const sections = [
  {
    name: "About",
    href: "about",
    icon: <IoInformation />,
    body: <p>
      I am a full-stack IoT engineer. I graduated from the University of Central Florida with a 
      Bachelor of Computer Engineering (BSCpE) in May of 2022. I enjoy working on device firmware
      and backend software stacks.
    </p>,
  },
  {
    name: "Experience",
    href: "experience",
    icon: <IoAlbums />,
    color: "yellow-400",
    body: <></>,
  },
  {
    name: "Skills",
    href: "skills",
    icon: <IoConstruct />,
    color: "cyan-400",
    body: <></>,
  },
  {
    name: "Highlighted Projects",
    href: "highlighed-projects",
    icon: <IoRocket />,
    color: "red-400",
    body: <></>,
  },
  {
    name: "Contact",
    href: "contact",
    icon: <IoPhonePortrait />,
    color: "magenta-400",
    body: <></>,
  },
];

export default function About() {

  console.log('about')
  return (
    <div className="page">
      <div className="page-content">
      <Hero title="Paul Wood" description="Full-stack Embedded IoT developer" image="/images/me.jpeg"/>
        <Sections sections={sections} />
    </div>
      </div>
  );
}
