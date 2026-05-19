import type { Project, Experience, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Product", href: "#product" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  // Developer
  {
    id: "casino-games",
    title: "Interactive Casino Games",
    description:
      "Games built from scratch at TECVIVO — including Olympian Odds (real-time map betting with WebSockets) and Meteors & Rockets (grid-based game). Architecture supports 14+ games with shared functionality.",
    role: "developer",
    tags: ["Next.js", "PixiJS", "WebSockets", "TypeScript"],
    year: 2025,
    featured: true,
  },
  {
    id: "friend-in-a-pocket",
    title: "Friend in a Pocket",
    description:
      "A psychological companion chatbot built with Claude via OpenRouter. Personalizes itself through an onboarding quiz (favorite color, animal, instrument), then generates a personality snapshot and opens a real-time WebSocket conversation — a safe space to reflect on emotions, relationships, and inner stories.",
    role: "developer",
    tags: ["Next.js", "Claude API", "OpenRouter", "WebSockets", "Psychology"],
    url: "https://friend-in-a-pocket.vercel.app/",
    year: 2026,
    featured: false,
  },
  {
    id: "deseuri-electronice",
    title: "Deșeuri Electronice",
    description:
      "Web app for electronic waste management with Firebase calculator and admin panel.",
    role: "developer",
    tags: ["Next.js", "Firebase", "Google Maps API"],
    url: "https://deee-uri.ro/",
    year: 2022,
  },
  {
    id: "second-chance",
    title: "Second Chance Foundation",
    description:
      "NGO web app built during a hackathon — won 2nd prize. Features donations via Stripe, job listings, meetings, and Google Maps integration.",
    role: "developer",
    tags: ["React", "TypeScript", "Redux", "C#", "ASP.NET"],
    github: "https://github.com/annarad111/hackathon2",
    year: 2022,
  },
  {
    id: "jira-app",
    title: "Custom Jira Time Tracker",
    description:
      "Internal Jira app for time tracking, built to improve team productivity.",
    role: "developer",
    tags: ["React", "Node.js", "GraphQL"],
    year: 2023,
  },
  {
    id: "microfrontend-arch",
    title: "Microfrontend Architecture",
    description:
      "Worked within a Microfrontend Architecture at MindGeek/Aylo on large-scale applications, contributing to modular, scalable frontend solutions and gaining deep understanding of distributed frontend systems.",
    role: "developer",
    tags: ["Microfrontend", "React", "Scalability", "Modular Architecture"],
    year: 2024,
    featured: false,
  },
  {
    id: "reverie",
    title: "Reverie — Hand-Painted Hair Bows",
    description:
      "Full product plan for an artisan accessories brand. Covers market research (RO + Etsy EU), pricing strategy, operations, 3-phase growth roadmap, and risk analysis. Natural linen bows painted freehand — wearable art.",
    role: "pm",
    tags: [
      "Product Strategy",
      "Market Research",
      "Pricing",
      "Operations",
      "Roadmap",
    ],
    year: 2026,
    featured: true,
  },
  // Entrepreneur
  {
    id: "art-paint-design",
    title: "Art Paint Design SRL",
    description:
      "Founded and ran a physical & online fashion business for 5 years. Managed 7 employees, built client relationships, and increased efficiency by 10%.",
    role: "entrepreneur",
    tags: ["Fashion", "E-commerce", "Team Management"],
    year: 2021,
    featured: true,
  },
  // Artist
  {
    id: "visual-arts",
    title: "Visual Arts Practice",
    description:
      "Bachelor's degree in Visual Arts from the National University of Arts. Creative practice informing every interface I design.",
    role: "artist",
    tags: ["Visual Arts", "UI/UX", "Adobe Suite", "Figma"],
    year: 2018,
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    company: "TECVIVO SRL / Las Vegas",
    position: "Frontend Developer",
    period: "Apr 2025 — Present",
    description: [
      "Built interactive casino games from scratch using Next.js and TypeScript",
      "Designed core game architecture supporting 14+ games with shared functionality",
      "Implemented real-time communication via WebSockets",
      "Contributed to UI/UX decisions for engaging, high-performance game interfaces",
    ],
    stack: ["Next.js", "TypeScript", "PixiJS", "WebSockets", "Adobe Animate"],
  },
  {
    company: "MindGeek / Aylo",
    position: "Frontend Developer",
    period: "Mar 2023 — Apr 2025",
    description: [
      "Developed and delivered React projects independently, ahead of schedule",
      "Worked within a Microfrontend Architecture on large-scale applications",
      "Contributed to feature planning sessions with the FE Lead — providing estimates and ideas",
      "Applied UX principles and visual design skills across user-facing features",
    ],
    stack: ["React", "Redux", "Next.js", "Jest", "Microfrontend"],
  },
  {
    company: "Canary Technology Innovations",
    position: "Frontend Developer",
    period: "Jun 2022 — Mar 2023",
    description: [
      "Built full-stack features using React, Node.js and GraphQL",
      "Assessed customer requirements and translated them into technical solutions",
      "Created a custom Jira app for time tracking to improve team productivity",
      "Communicated project progress clearly to non-technical clients",
    ],
    stack: ["React", "Next.js", "Node.js", "GraphQL", "Redux"],
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    period: "Apr 2022 — Dec 2022",
    description: [
      "Built and maintained full-stack web apps for clients using React and Next.js",
      "Engaged directly with clients to define goals and implementation strategies",
      "Managed projects end-to-end — from requirements to delivery",
    ],
    stack: ["React", "Next.js", "Node.js", "Firebase", "SASS"],
  },
  {
    company: "ALGO CONSULTING SERVICIES SRL",
    position: "Junior Full stack Developer",
    period: "Aug 2021 — Dec 2022",
    description: [
      "Developed and maintained web applications using modern JavaScript frameworks such as REACT.js for the front end and Node.js for the back end.",
      "Collaborated with product managers, designers, and other developers to understand project requirements and translate them into technical specifications.",
      "Designed and implemented RESTful APIs for seamless integration between front-end and back-endsystems.",
    ],
    stack: ["React", "Next.js", "Node.js", "GraphQL", "Redux"],
  },
  {
    company: "Art Paint Design SRL",
    position: "Founder & CEO",
    period: "Nov 2016 — Mar 2021",
    description: [
      "Founded and managed a fashion business with 7 employees",
      "Increased operational efficiency by 10% through performance reviews",
      "Built long-term relationships with key clients",
    ],
    stack: ["Leadership", "E-commerce", "Operations"],
  },
];

export const roleLabels: Record<string, string> = {
  developer: "Developer",
  pm: "Product Mind",
  entrepreneur: "Entrepreneur",
  artist: "Artist",
};

export const roleColors: Record<string, string> = {
  developer: "#2D5A3D",
  pm: "#5A3D2D",
  entrepreneur: "#3D2D5A",
  artist: "#5A2D3D",
};
