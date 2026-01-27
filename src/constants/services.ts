import { IService } from "@/interfaces/service";
import { 
    Search, 
    Compass, 
    Layout, 
    Settings2, 
    Rocket,
    RefreshCw
} from "lucide-react";

export const SERVICES: IService[] = [
    {
        id: 1,
        icon: Search,
        title: '1. Deconstruct & Discover',
        description: 'I start by stripping your idea to its core purpose. I listen to your goals to ensure I build a bridge that solves a real business problem, ensuring total alignment before I begin.'
    },
    {
        id: 2,
        icon: Compass,
        title: '2. Strategic Blueprint',
        description: 'I map out the path forward. This is where I determine how the technology will meet your specific requirements, keeping you updated as the technical strategy takes shape.'
    },
    {
        id: 3,
        icon: Layout,
        title: '3. Visual Prototype',
        description: 'Before building the heavy machinery, I craft the interface. I refine the visuals and the flow based on your feedback until the experience feels natural and effortless for your users.'
    },
    {
        id: 4,
        icon: Settings2,
        title: '4. The Engineering',
        description: 'Using my knowledge & expertise, I build the secure, "hidden" logic. I provide regular demo updates so you can see the engine coming to life in real-time.'
    },
    {
        id: 5,
        icon: Rocket,
        title: '5. The Launch',
        description: 'I handle the technical stress of moving your project to the real world. I perform a final "sanity check" with you to ensure a smooth rollout and immediate impact for your users.'
    },
    {
        id: 6,
        icon: RefreshCw,
        title: '6. Continuous Support',
        description: 'I stay on board to support and evolve your product looking for ways to use AI to automate tasks and keep your niche SaaS ahead of the curve.'
    }
]