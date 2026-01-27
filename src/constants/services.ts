import { IService } from "@/interfaces/service";
import { Code, FileCode, Laptop } from "lucide-react";

export const SERVICES: IService[] = [
    {
        id: 1,
        icon: Code,
        title: 'User-First Interfaces',
        description: 'First impressions matter. I build screens that don’t just look good but feel natural to use. I focus on making the technology "get out of the way" so your users can get things done without frustration.'
    },
    {
        id: 2,
        icon: FileCode,
        title: 'Reliable Foundations',
        description: 'The best systems are the ones you never have to think about. I build the "hidden" logic that handles the heavy lifting, ensuring your data stays safe and your application stays fast as your business grows.'
    },
    {
        id: 3,
        icon: Laptop,
        title: 'From Idea to Launch',
        description: 'I don’t just write code; I help build products. I take your "what if" and turn it into a working reality, handling everything from the first sketch to the final launch so you can focus on the big picture.'
    }
]