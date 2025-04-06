import { INavLink } from "../interfaces/navlink";

export const NAV_LINKS: INavLink[] = [
    {
        id: 1,
        name: 'Home',
        path: '/',
        isActive: true
    },
    {
        id: 2,
        name: 'About',
        path: '/about-me',
        isActive: false
    },
    {
        id: 3,
        name: 'Projects',
        path: '/projects',
        isActive: true
    },
    {
        id: 4,
        name: 'Blogs',
        path: '/blogs',
        isActive: false
    },
    {
        id: 5,
        name: 'Contact',
        path: '/contact',
        isActive: true
    }
]