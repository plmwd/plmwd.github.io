import {
  IoAlbums,
  IoLogoGithub,
  IoInformation,
  IoPhonePortrait,
  IoRocket,
  IoCaretForward,
  IoMail,
} from "react-icons/io5";
import Sections from "../components/Sections";
import Hero from "../components/Hero";

const experience = [
  {
    title: "Pre-Silicon Verification Engineer",
    employer: "Intel Corporation",
    from: "August 2020",
    to: "June 2021",
    work: [
      "Simulated and debugged Intel's Xeon server CPU memory controller and mesh bus",
      "Wrote Python scripts to aid simulation debugging, automate checks, and automate workflows",
      "Developed a Python library to aid development of writing emulation validation tests",
    ],
  },
  {
    title: "Electrical Engineer",
    employer: "Abamis IT Solutions",
    from: "December 2018",
    to: "July 2019",
    work: [
      "Prototyped and developed a PCB and device firmware with Microchip's PIC microcontrollers and embedded C for Abamis' client",
      "Communicated with Abamis' clients about engineering requirements and coordinated hardware and software design, troubleshooting, and testing",
    ],
  },
  // {
  //   title: "Undergraduate Researcher",
  //   employer: "University of Central Florida",
  //   from: "July 2019",
  //   to: "August 2020",
  //   work: [
  //     "Worked "
  //     "Published a paper in IEEE SoutheastCON about a Python script that is included in a wider simulation and testing framework with the goal of studying how process variation and device dimensions affected the neural network accuracy",
  //   ]
  // }
];

const contact = [
  {
    type: "github",
    href: "https://github.com/plmwd",
  },
  {
    type: "email",
    href: "mailto:pmwood@proton.me",
  },
];

const ExperiencePanel = ({ title, employer, from, to, work }) => (
  <div className="flex flex-col mb-7 last:mb-0">
    <div className="text-lg font-bold mb-0 flex flex-col sm:flex-row whitespace-nowrap">
      <p>{title}&nbsp;</p>
      <p className="text-cyan-500">@ {employer}</p>
    </div>
    <p className="text-md flex text-white-500 mb-3">
      {from} - {to}
    </p>
    {work.map((w, i) => (
      <div className="flex flex-row items-center" key={i}>
        <IoCaretForward className="fill-cyan-500 mr-2 flex-shrink-0" />
        <p className="text-white-400">{w}</p>
      </div>
    ))}
  </div>
);

const ContactIcon = ({ type, href }) => {
  const size = 32;
  const classes = "mx-2";

  return {
    github: <IoLogoGithub className={classes} size={size} href={href} />,
    email: <IoMail className={classes} size={size} href={href} />,
  }[type];
};

const sections = [
  {
    name: "About",
    href: "about",
    icon: <IoInformation />,
    body: (
      <p>
        Hi!{" "}
        <a href="https://youtu.be/_Fx6eCGsXMw" className="text-blue-400">
          I'm Paul.
        </a>{" "}
        I am a passionate embedded developer that also dabbles with full-stack
        development. I enjoy building intricate systems end-to-end with a focus
        on embedded systems and backend server development and integration.
        <br />
        <br />I graduated with a Bachelor of Computer Engineering from the
        University of Central Florida in May 2022. I am currently searching for
        a job in either embedded/firmware or backend development.
      </p>
    ),
  },
  {
    name: "Experience",
    href: "experience",
    icon: <IoAlbums />,
    color: "yellow-400",
    body: (
      <div className="">
        {experience.map((exp) => (
          <ExperiencePanel
            title={exp.title}
            employer={exp.employer}
            from={exp.from}
            to={exp.to}
            work={exp.work}
          />
        ))}
      </div>
    ),
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
    body: (
      <div className="flex flex-col basis-full ">
        <p className="mb-3">You can email me or checkout my GitHub:</p>
        <div className="flex justify-center flex-shrink-0">
          {contact.map((con) => (
            <ContactIcon type={con.type} href={con.href} />
          ))}
        </div>
      </div>
    ),
  },
];

export default function About() {
  console.log("about");
  return (
    <div className="page">
      <div className="page-content">
        <Hero
          title="Paul Wood"
          description="Embedded and backend IoT developer"
          image="/images/me.jpeg"
        />
        <Sections sections={sections} />
      </div>
    </div>
  );
}
