import { FunctionComponent } from "react"
import { IContactMethod } from "@/interfaces/contact-method"

interface IContactCardProps {
    method: IContactMethod
}

const ContactCard: FunctionComponent<IContactCardProps> = ({ method }) => {
    const { name, icon: Icon, link, value } = method;

    return (
        <div className="flex items-center card-hover p-4 border bg-card rounded-md space-x-4">
            <Icon className="text-primary text-2xl" />
            <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">{name}</span>
                <a className="hover:text-primary" href={link} target="_blank">{value}</a>
            </div>
        </div>
    )
}

export default ContactCard;