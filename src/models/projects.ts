import { IProject } from "../interfaces/project";

export const pageTitle: string = "projects";
export const pageDescription: string = "A collection of my recent development projects. Each project includes source code and may include a live demo."
export const PROJECT_LIST: IProject[] = [
    {
        id: 1,
        name: 'Nexus',
        description: 'My personal portfolio',
        tags: ['React', 'Tailwind'],
        isCodeAvailable: true,
        codebaseLink: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: true,
        demoLink: ''
    },
    {
        id: 2,
        name: 'Nexus',
        description: 'My personal portfolio',
        tags: ['React', 'Tailwind'],
        isCodeAvailable: false,
        codebaseLink: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: false,
        demoLink: ''
    },
    {
        id: 3,
        name: 'Nexus',
        description: 'My personal portfolio',
        tags: ['React', 'Tailwind'],
        isCodeAvailable: true,
        codebaseLink: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: true,
        demoLink: ''
    }
]