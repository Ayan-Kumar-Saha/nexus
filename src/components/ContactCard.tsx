import { FunctionComponent } from "react"
import { IContactMethod } from "../interfaces/contact-method"

interface IContactCardProps {
    method: IContactMethod
}

const ContactCard: FunctionComponent<IContactCardProps> = ({ method }) => {
    const { name, icon: Icon, link, value } = method;

    return (
        <div className="flex items-center card-hover p-4 border border-border-default bg-card-background rounded-md space-x-4">
            <Icon className="text-accent-text text-2xl" />
            <div className="flex flex-col">
                <span className="text-secondary-text text-sm">{name}</span>
                <a className="hover:text-accent-text" href={link} target="_blank">{value}</a>
            </div>
        </div>
    )
}

export default ContactCard;