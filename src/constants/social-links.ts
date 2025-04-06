import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";
import { ISocialLink } from "../interfaces/social-link";

export const SOCIAL_LINKS: ISocialLink[] = [
    {
        id: 1,
        name: 'Linkedin',
        icon: LuLinkedin,
        link: 'https://www.linkedin.com/in/ayankumarsaha/'
    },
    {
        id: 2,
        name: 'GitHub',
        icon: LuGithub,
        link: 'https://www.github.com/Ayan-Kumar-Saha'
    },
    {
        id: 3,
        name: 'Twitter',
        icon: LuTwitter,
        link: ''
    },
    {
        id: 4,
        name: 'Email',
        icon: LuMail,
        link: 'mailto:ayankumarsaha96@gmail.com'
    }
]