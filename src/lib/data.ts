export type Skill = {
  name: string;
  color: "indigo" | "cyan" | "green" | "neutral";
};

export type Project = {
  id: "aetherscroll" | "aetherlink" | "sinfonia" | "a01";
  image: string;
  tags: string[];
  href?: string;
  comingSoon: boolean;
};

export type ContactLink = {
  label: string;
  handle: string;
  href: string;
  icon: "Github" | "Linkedin" | "MessageCircle" | "Mail";
};

export const skills: Skill[] = [
  {name: "TypeScript", color: "indigo"},
  {name: "React", color: "cyan"},
  {name: "Next.js", color: "neutral"},
  {name: "Node.js", color: "green"},
  {name: "Tailwind CSS", color: "cyan"},
  {name: "Prisma", color: "neutral"},
  {name: "PostgreSQL", color: "indigo"},
  {name: "REST APIs", color: "green"},
  {name: "UI Design", color: "indigo"},
  {name: "Framer Motion", color: "cyan"},
  {name: "Automation", color: "green"},
  {name: "AI Workflows", color: "indigo"}
];

export const projects: Project[] = [
  {
    id: "aetherscroll",
    image: "/images/projects/aetherscroll.svg",
    tags: ["Next.js", "Reading UX", "Minimal UI"],
    comingSoon: true
  },
  {
    id: "aetherlink",
    image: "/images/projects/aetherlink.svg",
    tags: ["Analytics", "Links", "Dashboard"],
    comingSoon: true
  },
  {
    id: "sinfonia",
    image: "/images/projects/sinfonia-da-alma.svg",
    tags: ["CMS", "Landing Pages", "Content"],
    comingSoon: true
  },
  {
    id: "a01",
    image: "/images/projects/a01.svg",
    tags: ["WhatsApp", "Automation", "AI"],
    comingSoon: true
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    handle: "@JThurr",
    href: "https://github.com/JThurr",
    icon: "Github"
  },
  {
    label: "LinkedIn",
    handle: "in/jose-arthur-pr",
    href: "https://www.linkedin.com/in/jose-arthur-pr/",
    icon: "Linkedin"
  },
  {
    label: "WhatsApp",
    handle: "+55 (12) 97402-5317",
    href: "https://wa.me/5512974025317",
    icon: "MessageCircle"
  },
  {
    label: "Email",
    handle: "josearthurribeiro.dev@gmail.com",
    href: "mailto:josearthurribeiro.dev@gmail.com",
    icon: "Mail"
  }
];
