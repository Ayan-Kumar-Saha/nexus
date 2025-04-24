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
            "Built using React and TailwindCSS",
            "Single Page Application (SPA) for smooth, fast navigation without page reloads",
            "Minimalist layout with clean visuals and short, snappy user flow",
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
            "Built using Angular, Spring Boot, and PostgreSQL",
            "Mobile-First Design – Fully responsive UI built with accessibility and UX best practices",
            "SSR, SEO-optimized, fast-loading SPA using lazy loading and code-splitting",
            "300+ scalable REST APIs with secure auth, caching, and optimized DB access",
            "3,500+ Products Managed – Supports dynamic configuration with fabric, colors, finishes, and custom measurements",
            "500+ Weekly Orders – Robust order management system with workflow-driven processing",
            "2,000+ Active Users – Stable user management with behavior tracking.",
            "Custom CMS – Built from scratch to manage products, orders, customers, production workflows and many more",
            "Zoho Integration – Seamlessly connected with Zoho for inventory, sales orders, invoicing, and stock synchronization",
            "Razorpay Integration – Secure online payments via major Indian and international gateways",
            "Sentry Integration - Real-time logging and error monitoring across frontend and backend",
            "Bloomsight Analytics Integration - Tracks product views, customer behavior, and conversion funnels without third-party dependencies",
            "Bloomsight Email Integration - In-House Service for transactional and marketing email workflows",
            "Jenkins + AWS Deployment – CI/CD pipeline with environment-based rollouts"
        ],
        contributions: [
            "Led a team of 4 members, overseeing project execution and collaboration.",
            "Fully responsible for backend architecture, API development, and database design.",
            "Managed 50% of the custom CMS development, ensuring scalability and smooth operations.",
            "Contributed 25% to the user facing frontend development, ensuring seamless UI/UX integration.",
            "A key contributor to ArtisanFlow, their proprietary tech solution that brings complete transparency and real-time visibility to the artisanal supply chain",
            "Conducted code reviews, optimized performance, and ensured high-quality standards.",
            "Led research and development efforts and handled third-party service integrations (e.g., Razorpay, Zoho etc).",
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
        isDetailsAvailable: true,
        longDescription: "Delta Faucet Company, a subsidiary of Masco Corporation, is known for combining style and innovation to create transformative experiences with water. The Indian website, deltafaucet.in, showcases a curated portfolio of premium kitchen and bathroom solutions tailored for Indian homes. Featuring cutting-edge technologies like H₂Okinetic®, ShieldSpray®, and Lumicoat™, the site offers a detailed view into Delta’s product lines, design inspirations, and technology-driven features. With a strong emphasis on performance, visual appeal, and brand storytelling, the platform serves as a digital touchpoint for homeowners, architects, and designers.",
        features: [
            "Built using Angular, Spring Boot, and PostgreSQL",
            "Server-side rendering (SSR) for SEO and faster load times",
            "Advanced filtering and search with responsive UI",
            "Custom built CMS integration for dynamic content and product management",
            "Custom CMS Integration – Enabled dynamic product management",
            "CI/CD pipeline with Jenkins, deployed to AWS"
        ],
        contributions: [
            "Worked as an independant contributor to develop multiple modules across frontend, CMS and backend",
            "Debugged and optimized critical workflows, fixed good number of bugs",
            "Provided active maintenance and production support",
            "Ensured performance, security, and SEO best practices were followed"
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
        isDetailsAvailable: true,
        longDescription: "Bloomsight is a comprehensive web analytics and marketing platform designed to provide businesses with real-time insights into user behavior and campaign performance. It offers a suite of tools that enable detailed tracking, reporting, and integration capabilities to optimize digital strategies.​",
        features: [
            "Real-time website analytics and user behavior tracking",
            "Custom event tracking (e.g., clicks, form submissions)",
            'Email campaign creation, management, and tracking',
            'URL shortening with click tracking',
            'Customizable reports and visualizations',
            'Centralized marketing dashboard'
        ],
        contributions: [
            "Developed the client-side dashboard using React and Tailwind CSS",
            "Built reusable UI components and ensured responsive layout",
            "Implemented real-time data rendering and visualizations",
            "Created the core JavaScript tracking library: bloomsight.js",
            "bloomsight.js handles event tracking, payload structuring, and backend communication",
            "Ensured cross-browser compatibility and performance optimization in the tracking script"
        ]
    },
    {
        id: 4,
        name: 'Scio (RPMC)',
        description: 'A push-notification-based communication app for a NAAC-accredited government college',
        tags: ['Android', 'Web', 'Flutter', 'React', 'Typescript', 'Firebase'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: true,
        demoUrl: 'https://play.google.com/store/apps/details?id=in.org.rpmcollege',
        isFeatured: false,
        imagePath: '/images/projects/scio.png',
        isActive: true,
        isDetailsAvailable: true,
        longDescription: "A real-time, push notification-based mobile and web application developed for a NAAC-accredited Government College. Built to serve as the official communication channel, the app reliably connects students, parents, and faculty with college updates and bulletins.",
        features: [
            "Push notification-based communication using Firebase Cloud Messaging (FCM).",
            "Built using Dart/Flutter for a seamless Android and iOS experience.",
            "Robust backend with Spring Boot and PostgreSQL ensuring data consistency and reliability.",
            "Admin-facing CMS built in React to manage users and push communications.",
            "Support for onboarding and managing different user roles: students, parents, and faculty.",
            "Real-time delivery of announcements, bulletins, and alerts with negligible latency.",
            "Used daily by 3000+ users with 0 data loss incidents.",
            "Multi-language ready architecture with scalable user management.",
            "Secure login and role-based access for both admins and app users."
        ],
        contributions: [
            "Led development of the entire mobile application using Dart/Flutter for both Android and iOS platforms.",
            "Built and maintained a Spring Boot backend with PostgreSQL, ensuring efficient data flow and integrity.",
            "Developed the React-based CMS for admins to manage users and broadcast notifications.",
            "Integrated Firebase Cloud Messaging (FCM) to ensure reliable and instant delivery of push notifications.",
            "Architected the app for performance and scalability, handling 3000+ daily active users with minimal latency.",
            "Implemented secure user onboarding for students, faculty, and parents with role-based access control.",
            "Collaborated directly with college stakeholders to ensure compliance with academic communication requirements.",
            "Optimized the backend for near-zero data loss even during peak load."
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
        longDescription: "A lightweight and configurable Angular wrapper for Google Analytics 4 (GA4), designed to simplify event tracking and page view logging in Angular applications without directly relying on the global gtag object everywhere.",
        features: [
            "Plug-and-play GA4 integration for Angular apps.",
            "Supports automatic and manual page view tracking.",
            "Simple API to log custom events with categories, actions, and labels.",
            "Environment-based enable/disable mechanism for development and production.",
            "Support for multiple tracking IDs (useful for multi-tenant or multi-brand apps).",
            "Service-based abstraction to avoid direct use of `gtag` in components.",
            "Tree-shakable and compatible with Angular's dependency injection.",
            "Detailed developer documentation and usage examples available on npm."
        ],
        contributions: [
            "Ideated, architected, and built the entire library from scratch with best practices in Angular packaging and TypeScript.",
            "Designed a flexible API allowing developers to integrate GA4 tracking in minutes with minimal setup.",
            "Implemented core services to abstract Google Analytics logic away from Angular components.",
            "Handled multiple tracking ID support to accommodate enterprise-grade multi-tenant needs.",
            "Ensured compatibility with Angular's DI and build systems for maximum performance and maintainability.",
            "Published and maintain the library on npm under the Bloomscorp scope, with regular updates and support.",
            "Wrote comprehensive documentation with usage guides, installation steps, and common troubleshooting tips.",
            "Used in production across Bloomscorp projects to track user interactions and business-critical metrics."
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
        isDetailsAvailable: true,
        longDescription: "Containova is an intelligent container yard management system built to optimize logistics operations in container yards. It streamlines container movement, improves space utilization, and automates traditionally manual processes using AI and modern web technologies.",
        features: [
            "Container Check-In/Check-Out System: Digitally tracks incoming and outgoing containers with minimal human input.",
            "Yard Occupancy Planning: Visual representation of yard layout with live updates on container positions.",
            "AI-Powered Placement Optimization: Automatically suggests the best slot for incoming containers based on usage patterns and yard constraints.",
            "Automated Position Detection: Uses image processing to detect and confirm container and machinery positions in real time.",
            "Task Management Module: Assigns, tracks, and audits tasks for yard personnel and logistics staff.",
            "Cross - Platform Frontend: Combines Angular and React for admin and operations views, tailored for different user roles.",
            "Serverless Architecture: Leveraged Azure Functions for backend operations, enabling scalability and lower cost.",
            "MongoDB Backend: Schemaless flexibility to handle varied container data and activity logs."
        ],
        contributions: [
            "Led Development and Maintenance: Oversaw full lifecycle of the application—from architecture to deployment—while mentoring a team of frontend and backend developers.",
            "Frontend Engineering: Built and maintained modular UIs using Angular and React, optimized for real-time updates and usability in rough environments (e.g., tablets used on container yards).",
            "AI & Optimization Logic: Integrated AI models within a app for container placement suggestions and automated position validation using Flutter",
            "Azure Serverless Integration: Designed and implemented APIs using Azure Functions, ensuring fast and scalable backend communication.",
            "Database Modeling: Structured MongoDB collections for flexible yet performant querying of yard layouts, container statuses, and personnel tasks.",
            "DevOps & Monitoring: Implemented CI/CD pipelines, logging, and health checks for seamless deployment and monitoring."
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
        isDetailsAvailable: true,
        longDescription: "A multi-platform field and supply chain management app built for a Fortune 500 agribusiness, aimed at digitizing and optimizing the end-to-end lifecycle of tapioca farming and processing in Thailand. It served 2,500+ farmers across rural areas and supported both English and Thai languages.",
        features: [
            "Farmer Registration Module with geotagging and identity validation.",
            "Farm and Plantation tracking with detailed crop cycle and sustainability data.",
            "Offer and Booking System for managing delivery and pickup schedules.",
            "Stem Supply Management for efficient planting material distribution.",
            "Dual-language support with dynamic switching between English and Thai.",
            "Cross-platform support via Apache Cordova for Android, iOS, and Web.",
            "Offline-first architecture for reliable operation in low-connectivity rural areas.",
            "Dashboard and reporting tools for real-time insights into farming and logistics operations.",
            "Recognition as the best app across 120 countries and 60 sectors for impact and innovation."
        ],
        contributions: [
            "Led full-cycle development of a multi-platform app using Angular, Apache Cordova, Azure Functions, and MongoDB.",
            "Led a team of 12 developers over a span of 1.5 years, guiding architecture, implementation, and delivery.",
            "Owned critical aspects from database design to CI/CD deployment pipelines, contributing heavily to every technical layer.",
            "Built and maintained critical modules including Registration, Farm & Plantation, Offer, Booking, and Stem Supply.",
            "Integrated dynamic language switching with complete English and Thai localization.",
            "Designed a responsive and intuitive UI/UX for seamless farmer onboarding and daily use.",
            "Optimized backend functions using Azure Functions for scalable and cost-efficient processing.",
            "Collaborated with stakeholders to drive adoption among 2,500+ farmers and refine modules based on on-ground feedback.",
            "Contributed to the app's recognition as the best solution in its category across 120 countries and 60 sectors."
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
        tags: ['Web', 'Angular', 'MongoDB', 'Nodejs', 'Azure Functions'],
        isCodeAvailable: false,
        codebaseUrl: '',
        isDemoAvailable: false,
        demoUrl: '',
        isFeatured: false,
        imagePath: '/images/placeholder.svg',
        isActive: true,
        isDetailsAvailable: true,
        longDescription: "An internal web application built for a Fortune 500 food processing giant to manage the lifecycle of thousands of recipes globally—ensuring consistency, compliance, and real-time collaboration across teams.",
        features: [
            "Built using Angular for frontend, Azure Functions for backend, and MongoDB for data storage.",
            "Supports recipe creation, editing, and publishing with strict version control.",
            "Implements a review and approval workflow to prevent premature or unauthorized updates.",
            "Role-based access control to manage permissions for creators, reviewers, and approvers.",
            "Real-time validation and status indicators to streamline global recipe updates.",
            "Ensures only the latest approved recipes are accessible by end preparers.",
            "Optimized for high availability and performance under global usage scenarios.",
            "Audit trails and history logs for complete traceability of changes."
        ],
        contributions: [
            "Designed and developed the complete application architecture using Angular, Azure Functions, and MongoDB.",
            "Implemented version control and approval mechanisms to ensure recipe integrity and regulatory compliance.",
            "Built modular, reusable Angular components to handle dynamic forms and complex data models.",
            "Collaborated with cross-functional teams to gather requirements and align with operational workflows.",
            "Optimized backend APIs for fast retrieval and storage of large recipe datasets.",
            "Ensured security best practices with scoped access based on user roles and responsibilities.",
            "Played a critical role in deploying and maintaining the app across multiple regions."
        ]
    }
]