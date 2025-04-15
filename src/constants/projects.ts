import { IProject } from "../interfaces/project";

export const PROJECT_LIST: IProject[] = [
    {
        id: 1,
        name: 'Nexus',
        description: 'My personal developer portfolio app',
        tags: ['Web', 'React', 'Tailwind'],
        isCodeAvailable: true,
        codebaseUrl: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: true,
        demoUrl: 'https://ayankumarsaha.dev',
        isFeatured: true,
        imagePath: '/images/projects/nexus.png',
        isActive: true,
        isDetailsAvailable: true,
        longDescription: "Nexus is my personal portfolio site that I built to brush up on my React skills after being neck-deep in Angular for way too long. I wanted something clean, simple, and truly me—a place to showcase my projects, tell my story, and quietly scream “I know what I’m doing” without actually saying it. It was a fun way to shake off the Angular hangover and remind myself that JSX/TSX still feels like home.",
        features: [
            "Built with React as a Single Page Application (SPA) for smooth, fast navigation without page reloads",
            "Minimalist layout with clean visuals and short, snappy user flow - thanks to TailwindCSS",
            "Responsive design to make it look good on all screens and devices",
            "Too harsh on the eyes? Use dark mode"
        ],
        contributions: [
        ]
    },
    {
        id: 2,
        name: 'Anuprerna',
        description: 'A B2B e-commerce platform for wholesale sustainable fabrics',
        tags: ['Web', 'Angular', 'Spring Boot', 'PostgreSQL', 'Tailwind'],
        isCodeAvailable: false,
        codebaseUrl: 'https://www.github.com/Ayan-Kumar-Saha/nexus',
        isDemoAvailable: true,
        demoUrl: 'https://anuprerna.com',
        isFeatured: true,
        imagePath: '/images/projects/anuprerna.png',
        isActive: true,
        isDetailsAvailable: true,
        longDescription: "Anuprerna is an ethical textile brand based in Kolkata that bridges traditional East Indian handloom craftsmanship with modern, sustainable fashion. They collaborate with over 300 rural artisans to produce handwoven fabrics and finished products using natural fibers like cotton, khadi, linen, and peace silk. Their mission is to empower artisans, preserve indigenous weaving techniques, and offer eco-friendly textiles to global designers and conscious consumers.",
        features: [
            "Mobile-First Design – Fully responsive UI built with accessibility and UX best practices.",
            "SSR, SEO-optimized, fast-loading SPA using lazy loading and code-splitting.",
            "300+ scalable REST APIs with secure auth, caching, and optimized DB access",
            "3,500+ Products Managed – Supports dynamic configuration, variants, weaving styles, and custom measurements.",
            "500+ Weekly Orders – Robust order management system with workflow-driven processing.",
            "2,000+ Active Users – Stable user management with role-based access and behavior tracking.",
            "Custom CMS – Built from scratch to manage products, orders, customers, and production workflows and many more",
            "Payment Gateway Integration – Secure online payments via major Indian and international gateways.",
            "Real-time logging and error monitoring across frontend and backend using Sentry",
            "In-House Analytics – Tracks product views, customer behavior, and conversion funnels without third-party dependencies.",
            "In-House Service for transactional and marketing email workflows.",
            "Jenkins + AWS Deployment – CI/CD pipeline with automated tests and environment-based rollouts."
        ],
        contributions: [
            "Led a team of 4 members, overseeing project execution and collaboration.",
            "Fully responsible for backend architecture, API development, and database design.",
            "Managed 50% of the custom CMS development, ensuring scalability and smooth operations.",
            "Contributed 25% to the user facing frontend development, ensuring seamless UI/UX integration.",
            "Conducted code reviews, optimized performance, and ensured high-quality standards.",
            "Led research and development efforts and handled third-party service integrations (e.g., payment gateways).",
            "Managed project timelines, communicated with clients, and ensured on-time delivery."
        ]
    },
    {
        id: 11,
        name: 'Delta Faucet',
        description: 'A B2C e-commerce platform for faucets, showers, and bathroom accessories',
        tags: ['Web', 'Angular', 'Spring Boot', 'PostgreSQL', 'Tailwind'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: true,
        demoUrl: 'https://deltafaucet.in',
        isFeatured: true,
        imagePath: '/images/projects/delta.png',
        isActive: true,
        isDetailsAvailable: false,
        longDescription: "",
        features: [

        ],
        contributions: [
        ]
    },
    {
        id: 3,
        name: 'Bloomsight',
        description: 'Ultimate website analytics and marketing companion',
        tags: ['Web', 'Javascript', 'React', 'Typescript'],
        isCodeAvailable: true,
        codebaseUrl: 'https://github.com/bloomscorp/bloomsight.js',
        isDemoAvailable: true,
        demoUrl: 'https://bloomsight.io/',
        isFeatured: false,
        imagePath: '/images/projects/bloomsight.png',
        isActive: true,
        isDetailsAvailable: false,
        longDescription: "",
        features: [
        ],
        contributions: [
        ]
    },
    {
        id: 4,
        name: 'Scio (RPMC)',
        description: 'A push-notification-based communication app for a NAAC-accredited government college',
        tags: ['Android', 'Web', 'Flutter', 'React', 'Typescript'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: true,
        demoUrl: 'https://play.google.com/store/apps/details?id=in.org.rpmcollege',
        isFeatured: false,
        imagePath: '/images/projects/scio.png',
        isActive: true,
        isDetailsAvailable: false,
        longDescription: "",
        features: [

        ],
        contributions: [
        ]
    },
    {
        id: 5,
        name: 'ngx-gtag',
        description: 'An Angular library for integrating with Google Tag Manager (GTM), with SSR support',
        tags: ['Web', 'Angular', 'Typescript'],
        isCodeAvailable: true,
        codebaseUrl: 'https://github.com/bloomscorp/ngx-google-tags-manager',
        isDemoAvailable: true,
        demoUrl: 'https://www.npmjs.com/package/@bloomscorp/ngx-gtag',
        isFeatured: false,
        imagePath: '/images/projects/ngx-gtag.png',
        isActive: true,
        isDetailsAvailable: true,
        longDescription: "",
        features: [

        ],
        contributions: [
        ]
    },
    {
        id: 6,
        name: 'Containova',
        description: 'An AI-powered application for managing yard containers',
        tags: ['Android', 'iOS', 'Web', 'Flutter', 'Angular', 'React', 'MongoDB', 'Nodejs'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: true,
        demoUrl: 'https://containova.com/',
        isFeatured: false,
        imagePath: '/images/projects/containova.png',
        isActive: true,
        isDetailsAvailable: false,
        longDescription: "",
        features: [

        ],
        contributions: [
        ]
    },
    {
        id: 7,
        name: 'Tapioca Growth App',
        description: 'a cross-platform app for streamlining tapioca farming',
        tags: ['Android', 'Web', 'iOS', 'Apache Cordova', 'Angular', 'MongoDB', 'Nodejs'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: true,
        demoUrl: 'https://play.google.com/store/apps/details?id=com.ingredion.tapiocagrowth&hl=en_IN',
        isFeatured: false,
        imagePath: '/images/projects/tapioca-growth.png',
        isActive: true,
        isDetailsAvailable: false,
        longDescription: "",
        features: [

        ],
        contributions: [
        ]
    },
    {
        id: 8,
        name: 'Care First App',
        description: 'A cross-platform app for monitoring health status',
        tags: ['Android', 'Web', 'iOS', 'Apache Cordova', 'MongoDB', 'Nodejs'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: false,
        demoUrl: '',
        isFeatured: false,
        imagePath: '/images/placeholder.svg',
        isActive: true,
        isDetailsAvailable: false,
        longDescription: "",
        features: [

        ],
        contributions: [
        ]
    },
    {
        id: 9,
        name: 'Office Occupancy App',
        description: 'A cross-platform app for managing office occupancy',
        tags: ['Android', 'Web', 'iOS', 'Apache Cordova', 'MongoDB', 'Nodejs'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: false,
        demoUrl: '',
        isFeatured: false,
        imagePath: '/images/placeholder.svg',
        isActive: true,
        isDetailsAvailable: false,
        longDescription: "",
        features: [

        ],
        contributions: [
        ]
    },
    {
        id: 10,
        name: 'AMS Method DB',
        description: 'An app for storing and managing food processing recipes',
        tags: ['Web', 'Angular', 'MongoDB', 'Nodejs'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: false,
        demoUrl: '',
        isFeatured: false,
        imagePath: '/images/placeholder.svg',
        isActive: true,
        isDetailsAvailable: false,
        longDescription: "",
        features: [

        ],
        contributions: [
        ]
    }
]