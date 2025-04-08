import { IProject } from "../interfaces/project";

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
        imagePath: 'images/placeholder.svg',
        isActive: true
    },
    {
        id: 2,
        name: 'Anuprerna',
        description: 'A ecommerce b2b platform',
        tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
        isCodeAvailable: false,
        codebaseUrl: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: true,
        demoUrl: 'https://anuprerna.com',
        isFeatured: true,
        imagePath: 'images/placeholder.svg',
        isActive: true
    },
    {
        id: 3,
        name: 'Bloomsight',
        description: 'A web analytics tool',
        tags: ['Javascript', 'React', 'Typescript'],
        isCodeAvailable: true,
        codebaseUrl: 'https://github.com/bloomscorp/bloomsight.js',
        isDemoAvailable: true,
        demoUrl: 'https://bloomsight.io/',
        isFeatured: true,
        imagePath: 'images/placeholder.svg',
        isActive: true
    }
]