import { FunctionComponent } from "react";
import { IProject } from "@/interfaces/project";
import { Code, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { resolveSlug } from "@/lib/utils";

interface IProjectCardProps {
    project: IProject
}

const ProjectCard: FunctionComponent<IProjectCardProps> = ({ project }) => {
    const navigate = useNavigate();

    const { imagePath, name, description, tags, isCodeAvailable, isDemoAvailable, codebaseUrl, demoUrl } = project;

    const handleCardClick = () => {
        if (!project?.isDetailsAvailable) {
            toast.info("Project details will be available soon")
        } else {
            navigate(`/projects/${resolveSlug(project.name)}`)
        }
    }

    return (
        <Card onClick={handleCardClick} className="overflow-hidden border border-border/50 transition-all hover:border-primary/20 hover:shadow-md">
            <div className="h-48 bg-muted overflow-hidden">
                <img src={imagePath} alt={name} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-5">
                <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
                    <Code size={20} className="text-primary" />
                    <span>{name}</span>
                </h3>
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