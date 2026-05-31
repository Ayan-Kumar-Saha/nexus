import { IService } from "@/interfaces/service";
import { FunctionComponent } from "react";

interface IServiceCardProps {
    service: IService;
    index: number;
}

const ServiceCard: FunctionComponent<IServiceCardProps> = ({ service, index }) => {
    const { icon: Icon, title, description } = service;
    return (
        <div className="group h-full flex flex-col p-6 border border-border/40 rounded-sm hover:border-primary/40 transition-all duration-300 bg-card">
            <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-4xl font-bold text-primary/15 group-hover:text-primary/30 transition-colors leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <Icon className="text-muted-foreground group-hover:text-primary transition-colors mt-1" size={18} />
            </div>
            <h3 className="font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{description}</p>
        </div>
    );
}

export default ServiceCard;
