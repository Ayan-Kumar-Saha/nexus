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
        title: 'Understand & Explore',
        description: 'I start by listening. We talk through your idea, your goals, and what success actually looks like - so I build the right thing, not just something.'
    },
    {
        id: 2,
        icon: Compass,
        title: 'Clear Plan',
        description: 'Before a single line of code, we agree on what\'s being built and how. No surprises, no scope creep - just a clear roadmap we both understand.'
    },
    {
        id: 3,
        icon: Layout,
        title: 'Design Preview',
        description: 'You\'ll see exactly how your product looks and feels before I start building. We tweak it together until it clicks.'
    },
    {
        id: 4,
        icon: Settings2,
        title: 'Build',
        description: 'This is where I write the code. I work in focused cycles and keep you in the loop with regular updates - so you\'re never left wondering what\'s happening.'
    },
    {
        id: 5,
        icon: Rocket,
        title: 'Launch',
        description: 'I handle the deployment so you don\'t have to. Your product goes live cleanly, tested, and ready for real users.'
    },
    {
        id: 6,
        icon: RefreshCw,
        title: 'Ongoing Support',
        description: 'Shipping is just the beginning. I stick around to fix issues, add features, and help your product grow as your needs change.'
    }
]