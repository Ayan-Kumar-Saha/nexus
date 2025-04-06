import { IService } from "@/interfaces/service";
import { Code, FileCode, Laptop } from "lucide-react";

export const SERVICES: IService[] = [
    {
        id: 1,
        icon: Code,
        title: 'Frontend Development',
        description: 'Building responsive and interactive user interfaces with React, TypeScript, and modern CSS.'
    },
    {
        id: 2,
        icon: FileCode,
        title: 'Backend Development',
        description: 'Creating robust APIs and server-side applications using Node.js, Express, and various databases.'
    },
    {
        id: 3,
        icon: Laptop,
        title: 'Full Stack Solutions',
        description: 'End-to-end development from database design to user interface implementation.'
    }
] 