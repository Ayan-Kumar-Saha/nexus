import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { IContactMethod } from "../interfaces/contact-method";

export const CONTACT_METHODS: IContactMethod[] = [
    {
        id: 1,
        icon: LuMail,
        name: 'Email',
        value: 'ayankumarsaha96@gmail.com',
        link: 'mailto:ayankumarsaha96@gmail.com'
    },
    {
        id: 2,
        icon: LuPhone,
        name: 'Phone',
        value: '(+91) 7003980363',
        link: 'tel:+917003980363'
    },
    {
        id: 3,
        icon: LuMapPin,
        name: 'Location',
        value: 'Chandannagar, WB, India',
        link: 'https://www.google.com/search?q=chandannagar'
    }
]