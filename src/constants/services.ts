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
        description: 'First, I take time to truly understand your idea and your goals. We focus on the real problem you want to solve so we start on the right path.'
    },
    {
        id: 2,
        icon: Compass,
        title: 'Clear Plan',
        description: 'Next, I create a simple, clear plan for how everything will work. You’ll always know what we’re building and why.'
    },
    {
        id: 3,
        icon: Layout,
        title: 'Design Preview',
        description: 'Before development begins, I design how your product will look and feel. We refine it together until it feels smooth and easy to use.'
    },
    {
        id: 4,
        icon: Settings2,
        title: 'Build',
        description: 'Then I build the core features behind the scenes. I share regular updates so you can see the progress step by step.'
    },
    {
        id: 5,
        icon: Rocket,
        title: 'Launch',
        description: 'I take care of moving your project live and make sure everything works properly so your users can start using it without issues.'
    },
    {
        id: 6,
        icon: RefreshCw,
        title: 'Ongoing Support',
        description: 'After launch, I continue to support and improve your product, helping you grow and keeping everything running smoothly.'
    }
]