import { IService } from "@/interfaces/service";
import { Card, CardContent } from "@/components/ui/card";
import { FunctionComponent } from "react";

interface IServiceCardProps {
    service: IService
}

const ServiceCard: FunctionComponent<IServiceCardProps> = ({ service }) => {
    const { icon: Icon, title, description } = service;
    return (
        <Card className="border border-border/50 transition-all hover:border-primary/20 hover:shadow-md">
            <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4 text-primary">
                    <Icon />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;