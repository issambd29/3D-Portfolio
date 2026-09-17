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
  cybersecurity,
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
    category: "Frontend",
    level: "Interactive",
    description: "Interactive web graphics, canvas rendering & visual animations",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Frontend",
    level: "Advanced",
    description: "ES6+, async/await, DOM algorithms & modern tooling",
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
    category: "Design",
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
    title: "CTF Player & Aspiring Penetration Tester",
    company_name: "TryHackMe & OverTheWire (Natas)",
    icon: cybersecurity,
    iconBg: "#0B1528",
    date: "Sep 2026 - Present",
    points: [
      "Commenced dedicated cybersecurity training and CTF journey targeting web application penetration testing and offensive security.",
      "Solving security war-games on OverTheWire (Natas), exploiting server-side vulnerabilities including command injection, path traversal, SQLi, and authentication flaws.",
      "Tackling hands-on offensive security rooms on TryHackMe, mastering network enumeration, Linux privilege escalation, and reconnaissance.",
      "Combining software engineering foundations with ethical hacking to identify attack vectors, audit application source code, and remediate vulnerabilities.",
    ],
  },
  {
    title: "Full-Stack Engineer & React Specialist",
    company_name: "Snai3i",
    icon: reactjs,
    iconBg: "#0F172A",
    date: "Sep 2025 - Present",
    points: [
      "Engineered responsive React and Tailwind frontend for Snai3i enterprise client portal.",
      "Built state management, customer loyalty workflows, and real-time data views.",
    ],
  },
  {
    title: "Backend Engineer (Django & PostgreSQL)",
    company_name: "Snai3i",
    icon: postgresql,
    iconBg: "#0F172A",
    date: "Sep 2025 - Present",
    points: [
      "Architected RESTful APIs, relational models, and migrations in Django for Snai3i Point Tracker.",
      "Implemented secure JWT authentication and query optimizations in PostgreSQL on Render.",
    ],
  },
  {
    title: "Lead UI/UX & Web Developer",
    company_name: "Madrassat El-Itqane",
    icon: figma,
    iconBg: "#0F172A",
    date: "Sep 2025 - Present",
    points: [
      "Designed and deployed the full digital portal for Madrassat El-Itqane Quranic School.",
      "Integrated Firebase Authentication and Firestore database for student tracking and curriculum.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Client & Independent Projects",
    icon: mobile,
    iconBg: "#0F172A",
    date: "Sep 2025 - Dec 2025",
    points: [
      "Built fluid cross-platform iOS and Android applications using React Native and Expo.",
      "Delivered offline caching, smooth mobile navigation, and responsive touch UI.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Snai3i",
    icon: html,
    iconBg: "#0F172A",
    date: "Sep 2024 - Sep 2025",
    points: [
      "Developed high-performance web pages and modular CSS components with modern JavaScript.",
      "Ensured pixel-perfect responsiveness across mobile, tablet, and desktop screens.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Issam delivered the Snai3i Point Tracker platform with outstanding precision. Clean React UI, solid Django backend, and on-time delivery.",
    name: "Snai3i Project Lead",
    designation: "Executive Director",
    company: "Snai3i Enterprise",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    testimonial:
      "The Madrassat El-Itqane platform is fast, clean, and runs seamlessly on mobile devices for our teachers and students.",
    name: "Administration Lead",
    designation: "Head of Operations",
    company: "Madrassat El-Itqane",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    testimonial:
      "Issam writes clean, maintainable code, respects timelines, and communicates directly. Highly dependable engineer.",
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
  {
    name: "El-Itqane School Manager",
    description: "Cloud inventory & logistics management platform (نظام إدارة المخزون والمخيم) engineered for Madrassat El-Itqane. Features Firebase authentication, real-time stock itemization, quantity auditing, and responsive Arabic RTL dashboard.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
      { name: "inventory", color: "green-text-gradient" },
      { name: "management", color: "purple-text-gradient" },
      { name: "arabic-rtl", color: "cyan-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/issambd29",
    live_demo_link: "https://elitqane-manager.web.app",
    type: "react",
    badge: "Official School ERP",
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
    description: "Portfolio of Issam Badaoui — Full-Stack Web Developer, UI/UX Designer, and Software Engineer from Algeria, featuring responsive design and modern web interfaces.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "blue-text-gradient" },
      { name: "portfolio", color: "blue-text-gradient" },
      { name: "web-dev", color: "blue-text-gradient" },
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
