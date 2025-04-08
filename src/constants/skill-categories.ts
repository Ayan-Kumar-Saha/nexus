import { ISkillCategory } from "@/interfaces/skill-category";
import { Cloud, Code, Database, GitBranch, Layout, PenTool, Server } from "lucide-react";

export const SKILL_CATEGORIES: ISkillCategory[] = [
    {
        category: 'Languages',
        icon: Code,
        skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Dart', 'HTML5', 'CSS3', 'Python']
    },
    {
        category: 'Frontend',
        icon: Layout,
        skills: ['Angular', 'React', 'Redux', 'Tailwind', 'Apache Cordova', 'Flutter']
    },
    {
        category: 'Backend',
        icon: Server,
        skills: ['Node.js', 'Express', 'Spring Boot', 'WebSockets']
    },
    {
        category: 'Database',
        icon: Database,
        skills: ['MongoDB', 'PostgreSQL']
    },
    {
        category: 'DevOps',
        icon: GitBranch,
        skills: ['Git', 'GitHub Actions', 'Docker', 'Azure Pipelines']
    },
    {
        category: 'Cloud',
        icon: Cloud,
        skills: ['Azure', 'AWS']
    }
];