import { FunctionComponent } from "react";
import { ISocialLink } from "@/interfaces/social-link";

interface ISocialCardProps {
    method: ISocialLink
}

const SocialCard: FunctionComponent<ISocialCardProps> = ({ method }) => {
    const { icon: Icon, link } = method;
    return (
        <div className="flex items-center card-hover p-4 border bg-card rounded-md">
            <a href={link} className="hover:text-primary" target="_blank">
                <Icon className="text-xl" />
            </a>
        </div>
    )
}

export default SocialCard;