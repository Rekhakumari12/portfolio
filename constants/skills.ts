type SkillGroup = {
  category: string;
  skills: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend Architecture",
    skills: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Component Design",
      "CSS Modules & Theming",
      "Storybook",
    ],
  },
  {
    category: "Engineering Excellence",
    skills: [
      "Web Performance (Core Web Vitals)",
      "Web Accessibility (WCAG 2.1 AA)",
      "Unit Testing (Jest/Vitest)",
      "Husky/Git Workflows",
    ],
  },
  {
    category: "Tools & Integrations",
    skills: [
      "GitHub",
      "REST APIs",
      "Analytics Instrumentation",
      "Zephr CMS",
      "Micro-Frontend",
    ],
  },
  {
    category: "Languages & Frameworks",
    skills: ["JavaScript (ES6+)", "Node.js", "HTML5", "CSS3"],
  },
  {
    category: "AI Tools",
    skills: ["GitHub Copilot", "Cursor", "AI-assisted Development"],
  },
  {
    category: "Methodologies",
    skills: ["Agile/Scrum", "TDD", "A/B Testing"],
  },
];
