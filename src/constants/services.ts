import { IService } from "@/interfaces/service";
import { Code, FileCode, Laptop } from "lucide-react";

export const SERVICES: IService[] = [
    {
        id: 1,
        icon: Code,
        title: 'Frontend Development',
        description: 'Crafting responsive, accessible, and interactive user interfaces with a focus on performance, security, usability, SEO, and seamless cross-device experiences.'
    },
    {
        id: 2,
        icon: FileCode,
        title: 'Backend Development',
        description: 'Designing scalable, secure, and high-performance server-side systems with clean API structures, efficient data handling, and robust authentication and authorization mechanisms.'
    },
    {
        id: 3,
        icon: Laptop,
        title: 'Full Stack Solutions',
        description: 'Delivering end-to-end solutions from database design to intuitive UI, with a strong focus on system architecture, performance optimization, CI/CD pipelines, and DevOps best practices.'
    }
] 