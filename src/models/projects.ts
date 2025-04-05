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
        name: 'Anuprerna',
        description: 'A ecommerce b2b platform',
        tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
        isCodeAvailable: false,
        codebaseLink: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: false,
        demoLink: 'https://anuprerna.com'
    },
    {
        id: 3,
        name: 'Bloomsight.js',
        description: 'A web analytics tool',
        tags: ['Javascript', 'React', 'Typescript'],
        isCodeAvailable: true,
        codebaseLink: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: true,
        demoLink: ''
    }
]