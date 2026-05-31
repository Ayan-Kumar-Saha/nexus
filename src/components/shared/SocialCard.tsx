import { FunctionComponent } from "react";
import { ISocialLink } from "@/interfaces/social-link";

interface ISocialCardProps {
    method: ISocialLink
}

const SocialCard: FunctionComponent<ISocialCardProps> = ({ method }) => {
    const { icon: Icon, link } = method;
    return (
        <div className="flex items-center p-3 border border-border/40 rounded-sm hover:border-primary/30 bg-card transition-colors">
            <a href={link} className="hover:text-primary transition-colors" target="_blank">
                <Icon size={18} />
            </a>
        </div>
    )
}

export default SocialCard;
