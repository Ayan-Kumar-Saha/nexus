import { IPosition } from "@/interfaces/experience";
import { ScrollArea } from "./ui/scroll-area";
import { FunctionComponent } from "react";

interface IPositionCardProps {
    position: IPosition
}

const PositionCard: FunctionComponent<IPositionCardProps> = ({ position }) => {
    return (
        <div className="relative pl-6 pb-4 border-l border-border last:border-l-transparent">
            <div className="absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary"></div>
            <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-base font-medium">{position.role}</h4>
                    <span className="text-xs text-muted-foreground">{position.from} - {position.to}</span>
                </div>
                <ScrollArea className="h-24">
                    <ul className="mt-1 space-y-1 text-muted-foreground text-xs">
                        {position.responsibilities.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                                <span className="mr-1 mt-1 text-primary">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </div>
        </div>
    );
}

export default PositionCard;