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
        codebaseUrl: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: true,
        demoUrl: '',
        isFeatured: true,
        imagePath: 'src/assets/images/placeholder.svg'
    },
    {
        id: 2,
        name: 'Anuprerna',
        description: 'A ecommerce b2b platform',
        tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
        isCodeAvailable: false,
        codebaseUrl: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: false,
        demoUrl: 'https://anuprerna.com',
        isFeatured: true,
        imagePath: 'src/assets/images/placeholder.svg'
    },
    {
        id: 3,
        name: 'Bloomsight.js',
        description: 'A web analytics tool',
        tags: ['Javascript', 'React', 'Typescript'],
        isCodeAvailable: true,
        codebaseUrl: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: true,
        demoUrl: '',
        isFeatured: true,
        imagePath: 'src/assets/images/placeholder.svg'
    }
]