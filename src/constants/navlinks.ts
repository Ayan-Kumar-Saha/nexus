import { INavLink } from "../interfaces/navlink";
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/Home'));
const AboutMePage = lazy(() => import('../pages/AboutMe'));
const ProjectsPage = lazy(() => import('../pages/Projects'));
const ProjectDetailsPage = lazy(() => import('../pages/ProjectDetails'));
const BlogsPage = lazy(() => import('../pages/Blogs'));
const ContactPage = lazy(() => import('../pages/Contact'));

export const NAV_LINKS: INavLink[] = [
    {
        id: 1,
        name: 'Home',
        path: '/',
        element: HomePage,
        isActive: true,
        showInNav: true
    },
    {
        id: 2,
        name: 'About',
        path: '/about-me',
        element: AboutMePage,
        isActive: true,
        showInNav: true
    },
    {
        id: 3,
        name: 'Projects',
        path: '/projects',
        element: ProjectsPage,
        isActive: true,
        showInNav: true
    },
    {
        id: 3,
        name: 'Projects',
        path: '/projects/:slug/:id',
        element: ProjectDetailsPage,
        isActive: true,
        showInNav: false
    },
    {
        id: 4,
        name: 'Blogs',
        path: '/blogs',
        element: BlogsPage,
        isActive: false,
        showInNav: false
    },
    {
        id: 5,
        name: 'Contact',
        path: '/contact',
        element: ContactPage,
        isActive: true,
        showInNav: true
    }
]