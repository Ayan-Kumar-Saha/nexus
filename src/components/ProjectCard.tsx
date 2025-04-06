import { FunctionComponent } from "react";
import { IProject } from "../interfaces/project";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface IProjectCardProps {
    project: IProject
}

const ProjectCard: FunctionComponent<IProjectCardProps> = ({ project }) => {

    const { imagePath, name, description, tags, isCodeAvailable, isDemoAvailable, codebaseUrl, demoUrl } = project;

    return (
        <Card className="overflow-hidden border border-border/50 transition-all hover:border-primary/20 hover:shadow-md">
            <div className="h-48 bg-muted overflow-hidden">
                <img src={imagePath} alt={name} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    {
                        isCodeAvailable && (
                            <Button variant="outline" size="sm" asChild>
                                <a href={codebaseUrl} target="_blank" rel="noopener noreferrer">
                                    <Github size={16} className="mr-1" /> Code
                                </a>
                            </Button>
                        )
                    }
                    {
                        isDemoAvailable && (
                            <Button size="sm" asChild>
                                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={16} className="mr-1" /> Demo
                                </a>
                            </Button>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;