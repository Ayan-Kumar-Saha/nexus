import { IExperience } from "@/interfaces/experience";
import { FunctionComponent } from "react";
import { Card, CardContent } from "./ui/card";
import { Briefcase, ChevronDown } from "lucide-react";
import ResponsibilitiesDialog from "./ResponsibilitiesDialog";
import { ScrollArea } from "./ui/scroll-area";

interface IExperienceCardProps {
    experience: IExperience
}

const ExperienceCard: FunctionComponent<IExperienceCardProps> = ({ experience }) => {
    const showScroll = experience.positions.length > 2;

    return (
        <Card className="bg-background border border-border hover:border-primary/30 transition-colors">
            <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Briefcase size={18} />
                    </div>
                    <h3 className="font-mono font-medium">{experience.company}</h3>
                </div>

                {showScroll ? (
                    <div className="relative">
                        <ScrollArea className="h-[180px] pr-4">
                            <div className="space-y-4">
                                {experience.positions.map((position, posIndex) => (
                                    <div key={posIndex} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                                        <div className="flex flex-col">
                                            <h4 className="text-sm font-medium">{position.role}</h4>
                                            <span className="text-xs text-muted-foreground mt-1">
                                                {position.from} - {position.isActive ? 'Now' : position.to}
                                            </span>
                                            <ResponsibilitiesDialog position={position} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card to-transparent pointer-events-none flex justify-center items-end pb-1">
                            <ChevronDown size={16} className="text-muted-foreground animate-bounce" />
                        </div>
                    </div>

                ) : (
                    <div className="space-y-4">
                        {experience.positions.map((position, posIndex) => (
                            <div key={posIndex} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-medium">{position.role}</h4>
                                    <span className="text-xs text-muted-foreground mt-1">
                                        {position.from} - {position.isActive ? 'Now' : position.to}
                                    </span>
                                    <ResponsibilitiesDialog position={position} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default ExperienceCard;