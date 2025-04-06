import { FunctionComponent } from "react";
import { IProject } from "../interfaces/project";
import { Code, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface IProjectCardProps {
    project: IProject
}

const ProjectCard: FunctionComponent<IProjectCardProps> = ({ project }) => {

    const { image, name, description, tags, isCodeAvailable, isDemoAvailable, codebaseUrl, demoUrl } = project;

    return (
        <Card className="bg-card overflow-hidden card-hover border-border h-full flex flex-col">
            {image && (
                <div className="aspect-video overflow-hidden border-b border-border">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                </div>
            )}
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Code size={18} className="text-primary" />
                    {name}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/50">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4 border-t border-border">
                {
                    isCodeAvailable && (
                        <a
                            href={codebaseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                        >
                            <Github size={16} />
                            <span>Code</span>
                        </a>
                    )
                }
                {
                    isDemoAvailable && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                        >
                            <ExternalLink size={16} />
                            <span>Demo</span>
                        </a>
                    )}
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;