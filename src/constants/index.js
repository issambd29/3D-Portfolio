import { m } from "framer-motion";
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  postgresql,
  django,
  ai,
} from "../assets";
import python from "../assets/tech/python.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "AI",
    icon: ai,
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
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
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

];

const experiences = [

  {
  title: "html css js",
    company_name: "Snai3i",
    icon: html,
    iconBg: "#383E56",
    date: "sep 2024 - sep 2025",
    points: [
      "Building and styling responsive web pages using HTML, CSS, and JavaScript.",
      "Translating UI/UX designs into clean, functional, and accessible interfaces.",
      "Ensuring cross-browser compatibility and consistent behavior across devices.",
      "Optimizing website performance and improving code structure and readability."
    ],
  },
  {
    title: "React Developer",
    company_name: "Snai3i",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "sep 2025 - Present",
    points: [
    "Developing and maintaining web applications using React.js and other related technologies.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "app Developer",
    company_name: "Home",
    icon: mobile,
    iconBg: "#383E56",
    date: "sep 2025 - dec 2025",
    points: [
    "Developing and maintaining cross-platform mobile applications using React Native.",
    "Collaborating with designers and backend developers to build high-quality mobile experiences.",
    "Implementing responsive and adaptive user interfaces for both Android and iOS devices.",
    "Debugging, testing, and optimizing application performance to ensure stability and scalability.",
  ],
  },
  {
    title: "backend Developer",
    company_name: "Snai3i",
    icon: mongodb,
    iconBg: "#383E56",
    date: "sep 2025 - present",
  points: [
    "Designing, developing, and maintaining server-side applications and APIs.",
    "Collaborating with frontend developers and designers to integrate user-facing elements with server logic.",
    "Implementing database schemas, queries, and optimizing performance for scalability and reliability.",
    "Monitoring, debugging, and improving backend systems to ensure high availability and security.",
  ],
  },
{
  title: "Designer",
  company_name: "Etquane",
  icon: figma,
  iconBg: "#E6DEDD",
  date: "Sep 2025 - Present",
  points: [
    "Creating visually appealing and user-friendly designs for web and mobile applications.",
    "Collaborating with developers and product managers to translate ideas into effective design solutions.",
    "Implementing responsive and adaptive layouts to ensure optimal user experience across devices.",
    "Participating in design reviews and providing constructive feedback to improve overall product quality.",
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
  // HTML/CSS/JS Projects
  {
    name: "DineTech Store",
    description: "DineTech: Discover the latest devices and electronics at the best prices. Modern e-commerce platform with catalog browsing, shopping cart, and guest checkout.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "blue-text-gradient" },
      { name: "ecommerce", color: "blue-text-gradient" },
      { name: "firebase", color: "blue-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/dinetech",
    live_demo_link: "https://dinetech-f7b0e.web.app",
    type: "html-css-js"
  },
  {
    name: "Thawra 1954",
    description: "Algerian Liberation Revolution article management system (نظام إدارة مقالات ثورة التحرير الجزائرية) with Firebase authentication and historical documentation.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "blue-text-gradient" },
      { name: "firebase", color: "blue-text-gradient" },
      { name: "history", color: "blue-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/thawra-1954",
    live_demo_link: "https://thawra-1954.web.app",
    type: "html-css-js"
  },
  {
    name: "Rights & Duties",
    description: "Official 2AS Mathematics Classroom Charter promoting respect, responsibility, and teamwork through students' rights, duties, and an interactive quiz.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "blue-text-gradient" },
      { name: "quiz", color: "blue-text-gradient" },
      { name: "education", color: "blue-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/rights-duties",
    live_demo_link: "https://rights-duties.web.app",
    type: "html-css-js"
  },
  {
    name: "Personal Portfolio",
    description: "Portfolio of Issam Badaoui — Creative Front-End Developer, UI/UX Designer, and 3D Designer from Algeria, featuring modern responsive design and 3D interactions.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "blue-text-gradient" },
      { name: "spline-3d", color: "blue-text-gradient" },
      { name: "portfolio", color: "blue-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/portfolio-html",
    live_demo_link: "https://issam-portfolio-25.web.app",
    type: "html-css-js"
  },

  // React Projects
  {
    name: "Wysi Recycling",
    description: "Smart environmental recycling platform featuring AI-based waste recognition, IoT collection monitoring, automated sorting, analytics, and FastBots AI.",
    tags: [
      { name: "react", color: "cyan-text-gradient" },
      { name: "ai", color: "cyan-text-gradient" },
      { name: "firebase", color: "cyan-text-gradient" },
      { name: "tailwind", color: "cyan-text-gradient" },
      { name: "iot", color: "cyan-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/wysi-recycling",
    live_demo_link: "https://wysi-recycling.web.app",
    type: "react"
  },
  {
    name: "Abbasid Era Figures",
    description: "Cultural and educational platform (أعلام العصر العباسي: رحلة في أعماق التراث) documenting historical scholars, scientists, poets, and interactive timelines.",
    tags: [
      { name: "react", color: "cyan-text-gradient" },
      { name: "tailwind", color: "cyan-text-gradient" },
      { name: "history", color: "cyan-text-gradient" },
      { name: "education", color: "cyan-text-gradient" },
      { name: "timeline", color: "cyan-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/arabic-platform",
    live_demo_link: "https://arabe-projet.web.app",
    type: "react"
  },
  {
    name: "Quiz BD App",
    description: "Interactive quiz platform featuring user authentication, category exploration, custom quiz creation and editing, timed test sessions, and instant score results.",
    tags: [
      { name: "vue", color: "cyan-text-gradient" },
      { name: "api", color: "cyan-text-gradient" },
      { name: "quiz", color: "cyan-text-gradient" },
      { name: "gamification", color: "cyan-text-gradient" },
      { name: "real-time", color: "cyan-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/quiz-bd",
    live_demo_link: "https://quiz-bd.vercel.app",
    type: "react"
  },

  // React Native Projects
  {
    name: "Abbasid Scholars",
    description: "Cross-platform mobile application built with React Native and Expo, bringing Abbasid scholars' biographies, achievements, and timelines to mobile devices.",
    tags: [
      { name: "react-native", color: "purple-text-gradient" },
      { name: "expo", color: "purple-text-gradient" },
      { name: "mobile", color: "purple-text-gradient" },
      { name: "education", color: "purple-text-gradient" },
      { name: "history", color: "purple-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/abbasid-scholars",
    live_demo_link: "https://expo.dev/accounts/issambd/projects/abbasid-scholars",
    type: "react-native"
  },
];

export { services, technologies, experiences, testimonials, projects };
