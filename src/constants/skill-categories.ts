import { ISkillCategory } from "@/interfaces/skill-category";
import { Code, Database, GitBranch, Layout, PenTool, Server } from "lucide-react";

export const SKILL_CATEGORIES: ISkillCategory[] = [
    {
        category: 'Languages',
        icon: Code,
        skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python']
    },
    {
        category: 'Frontend',
        icon: Layout,
        skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Styled Components']
    },
    {
        category: 'Backend',
        icon: Server,
        skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'WebSockets']
    },
    {
        category: 'Database',
        icon: Database,
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    },
    {
        category: 'DevOps',
        icon: GitBranch,
        skills: ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'AWS']
    },
    {
        category: 'Tools',
        icon: PenTool,
        skills: ['VS Code', 'Figma', 'Postman', 'Chrome DevTools', 'npm/yarn']
    }
];