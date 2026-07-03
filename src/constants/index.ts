import { ArrowUpRight, ArrowRight, ArrowDownRight } from "lucide-react";
import { Badge, Book, Project, NavItem } from "@/types";

export const NAV_ITEMS: readonly NavItem[] = [
  { name: "About", href: "#about", Arrow: ArrowUpRight },
  { name: "Projects", href: "#projects", Arrow: ArrowRight },
  { name: "Experience", href: "#experience", Arrow: ArrowRight },
  { name: "Lab", href: "#lab", Arrow: ArrowRight },
  { name: "Hex", href: "#hex", Arrow: ArrowDownRight },
];

export const BADGES: readonly Badge[] = [
  {
    id: "java",
    bgColor: "#cfc5b4",
    textColor: "#000000",
    strapColor: "#cfc5b4",
    role: "Java Developer",
    company: "Software Engineering",
    date: "4+ Years Experience",
    access: "JAVA EXPERT",
    yOffset: 0,
    details: {
      description:
        "Passionate Java developer with 4+ years of experience building scalable applications. I enjoy solving complex problems, writing clean code, and continuously learning modern software engineering practices.",
      achievements: [
        "4+ years of experience in Java development.",
        "Strong understanding of Object-Oriented Programming (OOP).",
        "Passionate about writing clean, maintainable, and scalable code."
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Git"]
    }
  },
  {
    id: "projects",
    bgColor: "#202124",
    textColor: "#ffffff",
    strapColor: "#111111",
    role: "Full Stack Developer",
    company: "Personal Projects",
    date: "10+ Projects",
    access: "PROJECT BUILDER",
    yOffset: 60,
    details: {
      description:
        "Built and deployed more than 10 real-world projects ranging from full-stack web applications to production grade application, focusing on performance, responsiveness, and user experience.",
      achievements: [
        "Built and deployed 10+ production-ready projects.",
        "Experience with frontend, backend, databases, and deployment.",
        "Focused on clean architecture and modern development practices."
      ],
      tech: ["Next.js", "React", "Node.js", "MongoDB"]
    }
  },
  {
    id: "ai",
    bgColor: "#e6e7e8",
    textColor: "#000000",
    strapColor: "#e6e7e8",
    role: "AI Developer",
    company: "Building AI Applications",
    date: "Always Learning",
    access: "AI • BUILD • AUTOMATE",
    yOffset: 0,
    details: {
      description:
        "Passionate about building modern AI applications powered by LLMs. I enjoy creating intelligent systems, experimenting with cutting-edge AI technologies, and turning ideas into production-ready products.",
      achievements: [
        "Building AI-powered web applications and SaaS products.",
        "Working with RAG (Retrieval-Augmented Generation) architectures.",
        "Developing Agentic AI workflows and autonomous AI agents.",
        "Skilled in Prompt Engineering for reliable AI interactions.",
        "Using Vibe Coding to rapidly prototype and ship AI products."
      ],
      tech: [
        "RAG",
        "Agentic AI",
        "Prompt Engineering",
        "LangChain",
        "OpenAI",
        "Gemini",
        "Vector Databases",
        "Next.js"
      ]
    }
  }
];

export const BOOKS: readonly Book[] = [
  {
    title: "ATOMIC HABITS",
    author: "JAMES CLEAR",
    bgColor: "bg-[#FFD700]", // Gold
    textColor: "text-black",
    width: "w-16 sm:w-20 md:w-24 lg:w-28",
    height: "h-[85%]",
    font: "font-black tracking-tighter",
    layout: "justify-between",
    tilted: false,
    readDirection: 'bottom-up'
  },
  {
    title: "ZERO TO ONE",
    author: "PETER THIEL",
    bgColor: "bg-[#4169E1]", // Royal Blue
    textColor: "text-white",
    width: "w-12 sm:w-16 md:w-20 lg:w-24",
    height: "h-[75%]",
    font: "font-medium tracking-[0.2em]",
    layout: "justify-start gap-8",
    tilted: false,
    readDirection: 'top-down'
  },
  {
    title: "HOOKED",
    author: "NIR EYAL",
    bgColor: "bg-[#FF1493]", // Deep Pink
    textColor: "text-white",
    width: "w-14 sm:w-16 md:w-20",
    height: "h-[70%]",
    font: "font-black uppercase",
    layout: "justify-center gap-12",
    tilted: true,
    readDirection: 'bottom-up'
  },
  {
    title: "DEEP WORK",
    author: "CAL NEWPORT",
    bgColor: "bg-[#228B22]", // Forest Green
    textColor: "text-white",
    width: "w-20 sm:w-24 md:w-32 lg:w-36",
    height: "h-[95%]",
    font: "font-black tracking-tight",
    layout: "justify-between",
    tilted: false,
    readDirection: 'top-down'
  },
  {
    title: "MAKE YOUR BED",
    author: "MCRAVEN",
    bgColor: "bg-[#FF8C00]", // Dark Orange
    textColor: "text-black",
    width: "w-10 sm:w-12 md:w-16",
    height: "h-[60%]",
    font: "font-bold",
    layout: "justify-between",
    tilted: false,
    readDirection: 'bottom-up'
  },
  {
    title: "IKIGAI",
    author: "GARCIA & MIRALLES",
    bgColor: "bg-[#4B0082]", // Indigo
    textColor: "text-white",
    width: "w-16 sm:w-20 md:w-24",
    height: "h-[80%]",
    font: "font-serif italic",
    layout: "justify-center gap-16",
    tilted: false,
    readDirection: 'top-down'
  },
  {
    title: "MINDSET",
    author: "CAROL S. DWECK",
    bgColor: "bg-[#00CED1]", // Dark Turquoise
    textColor: "text-black",
    width: "w-12 sm:w-14 md:w-16",
    height: "h-[85%]",
    font: "font-bold tracking-widest",
    layout: "justify-between",
    tilted: false,
    readDirection: 'bottom-up'
  },
  {
    title: "PSYCHO-CYBERNETICS",
    author: "MAXWELL MALTZ",
    bgColor: "bg-[#DC143C]", // Crimson
    textColor: "text-white",
    width: "w-20 sm:w-24 md:w-28 lg:w-32",
    height: "h-[100%]",
    font: "font-black tracking-tighter",
    layout: "justify-start gap-12",
    tilted: false,
    readDirection: 'top-down'
  },
  {
    title: "THE MOUNTAIN IS YOU",
    author: "BRIANNA WIEST",
    bgColor: "bg-[#F0E68C]", // Khaki / Cream
    textColor: "text-black",
    width: "w-14 sm:w-16 md:w-20",
    height: "h-[85%]",
    font: "font-serif italic",
    layout: "justify-center gap-8",
    tilted: true,
    readDirection: 'bottom-up'
  },
  {
    title: "ABACUS",
    author: "",
    bgColor: "bg-[#8A2BE2]", // Blue Violet
    textColor: "text-white",
    width: "w-10 sm:w-12 md:w-14",
    height: "h-[65%]",
    font: "font-mono font-bold tracking-widest",
    layout: "justify-end",
    tilted: false,
    readDirection: 'top-down'
  },
  {
    title: "SAPIENS",
    author: "YUVAL NOAH HARARI",
    bgColor: "bg-[#111111]", // Black
    textColor: "text-white",
    width: "w-24 sm:w-28 md:w-32",
    height: "h-[100%]",
    font: "font-black uppercase tracking-tight",
    layout: "justify-between",
    tilted: false,
    readDirection: 'bottom-up'
  },
  {
    title: "48 LAWS OF POWER",
    author: "ROBERT GREENE",
    bgColor: "bg-[#8B0000]", // Dark Red
    textColor: "text-white",
    width: "w-16 sm:w-20 md:w-24",
    height: "h-[95%]",
    font: "font-bold",
    layout: "justify-center gap-12",
    tilted: false,
    readDirection: 'top-down'
  },
  {
    title: "MEDITATIONS",
    author: "MARCUS AURELIUS",
    bgColor: "bg-[#2F4F4F]", // Dark Slate Gray
    textColor: "text-white",
    width: "w-14 sm:w-16 md:w-20",
    height: "h-[75%]",
    font: "font-serif",
    layout: "justify-start gap-10",
    tilted: false,
    readDirection: 'bottom-up'
  },
  {
    title: "METAMORPHOSIS",
    author: "FRANZ KAFKA",
    bgColor: "bg-[#DDA0DD]", // Plum
    textColor: "text-black",
    width: "w-12 sm:w-14 md:w-16",
    height: "h-[80%]",
    font: "font-light tracking-[0.3em]",
    layout: "justify-center gap-8",
    tilted: true,
    readDirection: 'top-down'
  },
  {
    title: "DO IT TODAY",
    author: "DARIUS FOROUX",
    bgColor: "bg-[#32CD32]", // Lime Green
    textColor: "text-black",
    width: "w-16 sm:w-20 md:w-24",
    height: "h-[85%]",
    font: "font-black italic",
    layout: "justify-between",
    tilted: false,
    readDirection: 'bottom-up'
  },
  {
    title: "DESIGNING DATA",
    author: "MARTIN KLEPPMANN",
    bgColor: "bg-[#F5F5F5]", // Off White
    textColor: "text-black",
    width: "w-20 sm:w-24 md:w-28",
    height: "h-[95%]",
    font: "font-mono font-medium text-sm md:text-base",
    layout: "justify-start gap-16",
    tilted: false,
    readDirection: 'top-down'
  }
];

export const PROJECTS: readonly Project[] = [
  { type: "folder", color: "#FFF000", label: "Locofy", link: "https://www.locofy.xyz/" },
  { type: "folder", color: "#FFF000", label: "chatApp", link: "https://github.com/" },
  { type: "folder", color: "#FFF000", label: "Port.v1", link: "https://www.shikharx.xyz/" },
  { type: "folder", color: "#FFF000", label: "Custom Programming", link: "https://fefescript.vercel.app/" },
  { type: "folder", color: "#FFF000", label: "Codemesh", link: "https://www.codemesh.space/" },
  { type: "folder", color: "#FFF000", label: "VizorAI", link: "https://vizorai.vercel.app/" },
  { type: "folder", color: "#FFF000", label: "Mediva.", link: "https://mediva-one.vercel.app/" },
  { type: "folder", color: "#F0F0F0", label: "gf", link: "https://elariax.vercel.app/" },
  { type: "folder", color: "#FFF000", label: "chatx", link: "https://chatx-lquz.onrender.com/" },
  { type: "folder", color: "#FFF000", label: "...", link: "https://github.com/" },
  { type: "txt", label: "resume.txt", link: "/resume.pdf", isDownload: true },
  { type: "txt", label: "readme.txt", link: "https://github.com/" }
];
