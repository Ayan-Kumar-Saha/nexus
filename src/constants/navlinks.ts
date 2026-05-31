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
        name: 'home',
        path: '/',
        element: HomePage,
        isActive: true,
        showInNav: true
    },
    {
        id: 2,
        name: 'about',
        path: '/about-me',
        element: AboutMePage,
        isActive: true,
        showInNav: true
    },
    {
        id: 3,
        name: 'projects',
        path: '/projects',
        element: ProjectsPage,
        isActive: true,
        showInNav: true
    },
    {
        id: 3,
        name: 'projects',
        path: '/projects/:slug',
        element: ProjectDetailsPage,
        isActive: true,
        showInNav: false
    },
    {
        id: 4,
        name: 'blogs',
        path: '/blogs',
        element: BlogsPage,
        isActive: false,
        showInNav: false
    },
    {
        id: 5,
        name: 'contact',
        path: '/contact',
        element: ContactPage,
        isActive: true,
        showInNav: true
    }
]