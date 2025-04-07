import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { FaStackOverflow } from "react-icons/fa";
import { ISocialLink } from "../interfaces/social-link";

export const SOCIAL_LINKS: ISocialLink[] = [
    {
        id: 1,
        name: 'Linkedin',
        icon: LuLinkedin,
        link: 'https://www.linkedin.com/in/ayankumarsaha/',
        isActive: true
    },
    {
        id: 2,
        name: 'GitHub',
        icon: LuGithub,
        link: 'https://www.github.com/Ayan-Kumar-Saha',
        isActive: true
    },
    {
        id: 3,
        name: 'StackOverflow',
        icon: FaStackOverflow,
        link: 'https://stackoverflow.com/users/6452448/blacklist96',
        isActive: true
    },
    {
        id: 4,
        name: 'Email',
        icon: LuMail,
        link: 'mailto:ayankumarsaha96@gmail.com',
        isActive: true
    }
]