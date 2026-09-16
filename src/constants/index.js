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
    name: "React JS",
    icon: reactjs,
    category: "Frontend",
    level: "Advanced",
    description: "Component architecture, hooks, state management & SPAs",
  },
  {
    name: "Python",
    icon: python,
    category: "Backend",
    level: "Advanced",
    description: "Object-oriented scripting, backend logic & automations",
  },
  {
    name: "Django",
    icon: django,
    category: "Backend",
    level: "Production",
    description: "Enterprise REST APIs, ORM, auth & scalable architectures",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    category: "Database",
    level: "Production",
    description: "Relational database design, query optimization & ACID transactions",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend",
    level: "Advanced",
    description: "Modern utility-first styling, glassmorphism & responsive layouts",
  },
  {
    name: "Three JS",
    icon: threejs,
    category: "3D & Creative",
    level: "Interactive",
    description: "3D scenes, shaders, cameras, lighting & WebGL rendering",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Frontend",
    level: "Advanced",
    description: "ES6+, async/await, DOM algorithms & modern tooling",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend",
    level: "Proficient",
    description: "Type-safe interfaces, generics & scalable codebases",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend",
    level: "Proficient",
    description: "Event-driven backends, Express APIs & microservices",
  },
  {
    name: "Figma",
    icon: figma,
    category: "3D & Creative",
    level: "Advanced",
    description: "UI/UX prototypes, wireframes, design systems & handoffs",
  },
  {
    name: "Git",
    icon: git,
    category: "Tools",
    level: "Advanced",
    description: "Version control, branching workflows & GitHub CI/CD",
  },
  {
    name: "Docker",
    icon: docker,
    category: "Tools",
    level: "Proficient",
    description: "Containerization, environments & production deployment",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Database",
    level: "Proficient",
    description: "NoSQL document storage, indexing & schema designs",
  },
  {
    name: "HTML 5",
    icon: html,
    category: "Frontend",
    level: "Advanced",
    description: "Semantic structures, accessibility & SEO standards",
  },
  {
    name: "CSS 3",
    icon: css,
    category: "Frontend",
    level: "Advanced",
    description: "Flexbox, CSS Grid, keyframe animations & responsive design",
  },
];

const experiences = [
  {
    title: "Full-Stack Engineer & React Specialist",
    company_name: "Snai3i",
    icon: reactjs,
    iconBg: "#0F172A",
    date: "Sep 2025 - Present",
    points: [
      "Engineering core production features for Snai3i enterprise platforms using React, Vite, and Tailwind CSS.",
      "Architecting reusable component libraries, global state management, and real-time data visualizers.",
      "Implementing end-to-end responsive UI systems with strict cross-browser and mobile device compatibility.",
      "Conducting code reviews, performance audits, and continuous integration workflows to ensure 99.9% uptime."
    ],
  },
  {
    title: "Backend Engineer (Django & PostgreSQL)",
    company_name: "Snai3i",
    icon: postgresql,
    iconBg: "#0F172A",
    date: "Sep 2025 - Present",
    points: [
      "Architecting secure RESTful API endpoints and database schemas for the Snai3i Point Tracker ecosystem.",
      "Writing optimized PostgreSQL queries, relational models, and transaction management in Django ORM.",
      "Implementing role-based authentication (RBAC), JWT sessions, and rate-limiting security layers.",
      "Deploying scalable cloud backend services on Render with production logging and performance monitoring."
    ],
  },
  {
    title: "Lead UI/UX & Web Developer",
    company_name: "Madrassat El-Itqane",
    icon: figma,
    iconBg: "#0F172A",
    date: "Sep 2025 - Present",
    points: [
      "Designing and engineering the complete digital school platform for Madrassat El-Itqane Quranic School.",
      "Translating user journey maps in Figma into high-performance React and Tailwind interfaces.",
      "Integrating Firebase Authentication and Cloud Firestore for live student curriculum and progress tracking.",
      "Ensuring accessibility, multilingual typography support, and fluid mobile experience across smartphones and tablets."
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Client & Independent Projects",
    icon: mobile,
    iconBg: "#0F172A",
    date: "Sep 2025 - Dec 2025",
    points: [
      "Developed high-performance cross-platform mobile apps for Android and iOS using React Native and Expo.",
      "Constructed custom navigation stacks, offline data caching, and native device feature integrations.",
      "Engineered adaptive mobile interfaces tested on diverse screen aspect ratios and hardware profiles.",
      "Optimized memory footprint and rendered frame rates for 60fps fluid touch interactions."
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Snai3i",
    icon: html,
    iconBg: "#0F172A",
    date: "Sep 2024 - Sep 2025",
    points: [
      "Constructed modern responsive user interfaces using HTML5, CSS3, modern JavaScript, and design systems.",
      "Converted high-fidelity mockups into pixel-perfect, accessible, and fast-loading web pages.",
      "Conducted extensive cross-browser compatibility testing and web performance optimizations.",
      "Established foundational frontend architecture and modular CSS standards across early company projects."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Issam delivered the Snai3i Point Tracker platform with outstanding precision. From the React UI to the Django and PostgreSQL backend, his technical acumen and attention to detail elevated our company's workflow.",
    name: "Snai3i Project Lead",
    designation: "Executive Director",
    company: "Snai3i Enterprise",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    testimonial:
      "Working with Issam on Madrassat El-Itqane school platform was a game changer. The interface is intuitive, beautiful, and runs flawlessly on mobile devices for all our teachers and students.",
    name: "Administration Lead",
    designation: "Head of Operations",
    company: "Madrassat El-Itqane",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    testimonial:
      "Issam combines real software engineering depth with 3D creativity and refined aesthetic instinct. His code is clean, robust, and delivered with true professional composure.",
    name: "Senior Tech Consultant",
    designation: "Software Architect",
    company: "DevSolutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

const projects = [
  // Flagship & Enterprise Projects (Requested by User)
  {
    name: "Snai3i Point Tracker",
    description: "Enterprise loyalty and points tracking ecosystem engineered for the real company 'Snai3i'. Features customer point balances, administrative dashboards, transactional histories, and high-security session authorization.",
    tags: [
      { name: "react", color: "cyan-text-gradient" },
      { name: "tailwind", color: "cyan-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
      { name: "enterprise", color: "purple-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29/snai3i-points-web.git",
    live_demo_link: "https://school-project-p5do.onrender.com",
    type: "react",
    badge: "Enterprise Company App",
  },
  {
    name: "Quranic Platform School",
    description: "Digital academic management portal for Madrassat El-Itqane Quranic School. Features student progress tracking, curriculum schedules, teacher gradebooks, and instant cloud sync powered by Firebase.",
    tags: [
      { name: "react", color: "cyan-text-gradient" },
      { name: "vite", color: "purple-text-gradient" },
      { name: "tailwind", color: "cyan-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
      { name: "education", color: "green-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29",
    live_demo_link: "https://madrassat-elitqane.web.app",
    type: "react",
    badge: "Official School Platform",
  },

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
