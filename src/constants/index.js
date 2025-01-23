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
  meta,
  image,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  render
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "DV", title: "DV" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "Data Scientist", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Ai solutions", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Full stack web Developer",
    company_name: "SamAi",
    icon: image,
    iconBg: "#383E56",
    date: "September 2024 - november 2024",
    points: [
      "Developing and maintaining web applications using React | python and other related technologies.",
      "Collaborating with cross-functional teams including Doctors, AI specialists to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Led the integration of AI models into a web-based application using Flask, enabling seamless interaction with web data as a full-stack developer.",
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
    name: "SamAi",
    description:
      "Ai web application to predict diabetes for male and female separately, liver disease detection, hurt detection, and breast-cancer for females.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
      { name: "Sqlite", color: "green-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
    ],
    image: carrent,
    icon: render,
    source_code_link: "https://sam-ai-7lwa.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
