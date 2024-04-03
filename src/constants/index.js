import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mounties,
  next_one,
  carrent,
  jobit,
  tripguide,
  threejs,
  cyber_security,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Cyber Security Specialist",
    icon: cyber_security,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Customer Service Attendant",
    company_name: "Mounties",
    icon: mounties,
    iconBg: "#383E56",
    date: "Dec 2015 - Current",
    points: [
      "Providing friendly and efficient customer service to all patrons, including members and guests.",
      "Assisting with promotional activities and special events held at the RSL club.",
      "Working closely with other staff members and management, to ensure efficient operations and a positive work environment.",
      "Adhering to all relevant laws, regulations, and club policies, including those related to responsible service of alcohol, food safety, and workplace health and safety.",
    ],
  },
  {
    title: "Future Developer!",
    company_name: "",
    icon: next_one,
    iconBg: "#E6DEDD",
    date: "Future Me!",
    points: [
      "As a potential web developer, I would be designing, coding, and maintaining websites and web applications to meet client or organizational needs while ensuring functionality, usability, and responsiveness across various devices and platforms.",
      "As a potential React Native Developer, I would utilize the React Native framework to build cross-platform mobile applications, ensuring seamless user experiences and optimal performance on both iOS and Android devices.",
      "As a software engineer, I would hopefully design, develop, and maintain software systems, applications, and programs to meet specific user needs and business objectives.",
      "Finally as a cyber security specialist I will safeguard computer systems, networks, and data from unauthorized access, monitor for breaches, and cyber threats.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My website!",
    description:
      "Website that combines the power of React for dynamic user interfaces with Three.js for stunning 3D visualizations, offering visitors an engaging and visually captivating experience of my capabilities!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/afeng112/Website-Portfolio",
  },
  {
    name: "NBA Stat App (WIP | The Stat-line)",
    description:
      "Stat-line is your go-to app for all things NBA statistics. Built with React.js, this sleek and intuitive application provides comprehensive statistical analysis of your favorite NBA players, teams, and games. Whether you're a die-hard basketball fan or a casual enthusiast, Stat-line has something for everyone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather Dashboard",
    description:
      "A comprehensive weather outlook platform that displays current weather conditions, forecasts, and weather alerts for a given location.",
    tags: [
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "Weatherstack",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
