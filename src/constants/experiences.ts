import { IExperience } from "@/interfaces/experience";

export const EXPERIENCES: IExperience[] = [
    {
        id: 1,
        company: 'Bloomscorp',
        positions: [
            {
                id: 1,
                role: 'Senior Engineer I',
                from: 2024,
                to: 2025,
                isActive: true,
                responsibilities: [
                    'Contributed to the design and development of Bloomsight, a sophisticated web analytics tool, which ultimately yields an accuracy of 80% when compared to Google Analytics (in specific metrics).',
                    'Accomplished the migration and unification of two B2B e-commerce websites by building a single, scalable platform using Angular, Spring Boot, and PostgreSQL, eliminating reliance on WordPress and enabling advanced product customization.',
                    'Accomplished a 95% reduction in deployment time by developing multiple CI/CD pipelines using Azure Pipelines, decreasing the build and deployment process from 3-5 days to 10-15 minutes, which improved efficiency and eliminated manual intervention across 10 projects.',
                    'Built internal tools and libraries that improved delivery speed and quality by 20%, leading to a boost in customer retention.'
                ]
            },
        ]
    },
    {
        id: 3,
        company: 'Nature Technologies Pvt. Ltd.',
        positions: [
            {
                id: 1,
                role: 'Full Stack Developer',
                from: 2023,
                to: 2024,
                isActive: false,
                responsibilities: [
                    'Contributed to the development of the in-house Chatware product by implementing typing indicators and online/offline presence using heartbeat pings and user state management, enhancing user engagement and delivering a dynamic real-time experience.',
                    'Built an angular library for Google Tag Manager integration which works with Angular SSR',
                    'Mentored 5 junior developers through hands-on code reviews, pair programming, and structured knowledge-sharing sessions.'
                ]
            },
        ]
    },
    {
        id: 2,
        company: 'Blu Cocoon Digital Pvt. Ltd.',
        positions: [
            {
                id: 1,
                role: 'Tech Lead',
                from: 2023,
                to: 2023,
                isActive: false,
                responsibilities: [
                    'Led a team of Full Stack and AI developers to create a unique yard occupancy solution, boosting container placement efficiency by 35% and automating position detection and record-keeping.',
                    'Conducted 8+ POCs, scope of work documentation, and effort estimations for the PreSales Team, helping them acquire 5 new customers and bill services more efficiently with improved pricing.',
                    'Assisted in recruiting new talent and collaborated with HR on screening and reviewing assignments, leading to the successful recruitment of 8 efficient junior and senior engineers.',
                    'Led initiatives to optimize the performance of web and mobile apps, reducing load times by 50% and improving user engagement by 30% through code optimization and caching techniques.'
                ]
            },
            {
                id: 2,
                role: 'Team Lead',
                from: 2022,
                to: 2023,
                isActive: false,
                responsibilities: [
                    'Single-handedly built over 15 CI/CD pipelines for web, Android, and iOS projects using Azure Pipelines. This eliminated single-point dependency, reducing deployment time by 80%.',
                    'Collaborated with cross-functional teams across the USA, Thailand, and Singapore, leveraging Agile principles to plan, develop, and deliver 5 projects, while effectively managing client relationships.',
                    'Voluntarily mentored 10 junior engineers during my free time, establishing best practices, defining career goals, and organizing 12 technical learning sessions, while assisting with their daily tasks.',
                    'Implementing CI/CD pipelines for automated deployments'
                ]
            },
            {
                id: 3,
                role: 'Senior Associate Developer',
                from: 2020,
                to: 2022,
                isActive: false,
                responsibilities: [
                    'Within 18 months, planned and implemented multiple responsive, platform-independent apps, reaching over 10,000 users globally.',
                    'Served as a support and maintenance engineer, independently resolving three P1 issues, and multiple backlog bugs—one open for over 3 months. Provided and documented RCA reports and solutions.',
                ]
            },
        ]
    },

] 