import { IExperience } from "@/interfaces/experience";

export const EXPERIENCES: IExperience[] = [
    {
        id: 1,
        company: 'Bloomscorp',
        positions: [
            {
                id: 1,
                role: 'Senior Engineer I',
                from: 2023,
                to: 2023,
                isActive: true,
                responsibilities: [
                    'Leading the development of enterprise web applications',
                    'Mentoring junior developers and conducting code reviews',
                    'Architecting scalable solutions using modern technologies',
                    'Implementing CI/CD pipelines for automated deployments'
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
                    'Leading the development of enterprise web applications',
                    'Mentoring junior developers and conducting code reviews',
                    'Architecting scalable solutions using modern technologies',
                    'Implementing CI/CD pipelines for automated deployments'
                ]
            },
            {
                id: 2,
                role: 'Team Lead',
                from: 2022,
                to: 2023,
                isActive: false,
                responsibilities: [
                    'Leading the development of enterprise web applications',
                    'Mentoring junior developers and conducting code reviews',
                    'Architecting scalable solutions using modern technologies',
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
                    'Leading the development of enterprise web applications',
                    'Mentoring junior developers and conducting code reviews',
                    'Architecting scalable solutions using modern technologies',
                    'Implementing CI/CD pipelines for automated deployments'
                ]
            },
        ]
    },

] 