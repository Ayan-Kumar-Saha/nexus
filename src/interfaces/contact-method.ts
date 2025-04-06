import { IconType } from "react-icons"

export interface IContactMethod {
    id: number;
    icon: IconType;
    name: string;
    value: string;
    link: string
}