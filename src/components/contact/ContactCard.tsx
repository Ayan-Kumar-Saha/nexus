import { FunctionComponent } from "react"
import { IContactMethod } from "@/interfaces/contact-method"

interface IContactCardProps {
    method: IContactMethod
}

const ContactCard: FunctionComponent<IContactCardProps> = ({ method }) => {
    const { name, icon: Icon, link, value } = method;

    return (
        <div className="flex items-center p-4 border border-border/40 rounded-sm hover:border-primary/30 transition-colors space-x-4 bg-card">
            <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-primary/10">
                <Icon className="text-primary" size={16} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground font-mono">{name}</p>
                <a className="text-sm hover:text-primary transition-colors" href={link} target="_blank">{value}</a>
            </div>
        </div>
    )
}

export default ContactCard;
