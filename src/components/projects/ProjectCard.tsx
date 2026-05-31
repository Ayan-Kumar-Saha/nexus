import { FunctionComponent } from "react";
import { IProject } from "@/interfaces/project";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { resolveSlug } from "@/lib/utils";
import { motion } from "framer-motion";

interface IProjectCardProps {
    project: IProject;
    featured?: boolean;
}

const cardVariant = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const ProjectCard: FunctionComponent<IProjectCardProps> = ({ project, featured = false }) => {
    const navigate = useNavigate();

    const { imagePath, name, description, tags, isCodeAvailable, isDemoAvailable, codebaseUrl, demoUrl } = project;

    const handleCardClick = () => {
        if (!project?.isDetailsAvailable) {
            toast.info("Project details will be available soon")
        } else {
            navigate(`/projects/${resolveSlug(project.name)}`)
        }
    }

    const MotionDiv = motion.div;

    if (featured) {
        return (
            <MotionDiv
                variants={cardVariant}
                onClick={handleCardClick}
                className={`group overflow-hidden border border-border/40 rounded-sm hover:border-primary/30 transition-all duration-300 bg-card ${project.isDetailsAvailable ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                <div className="flex flex-col md:flex-row h-full">
                    <div className="h-52 md:h-auto md:w-2/5 bg-muted overflow-hidden shrink-0">
                        <img src={imagePath} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-xs text-primary px-1.5 py-0.5 border border-primary/20 bg-primary/5 rounded-sm">featured</span>
                        </div>
                        <h3 className="font-bold text-lg leading-tight mt-2 mb-2">{name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">{description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {tags.map((tag) => (
                                <span key={tag} className="text-xs px-2 py-0.5 font-mono bg-primary/8 text-primary rounded-sm border border-primary/15">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                            {isCodeAvailable && (
                                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs rounded-sm" asChild>
                                    <a href={codebaseUrl} target="_blank" rel="noopener noreferrer">
                                        <Github size={12} className="mr-1" /> Code
                                    </a>
                                </Button>
                            )}
                            {isDemoAvailable && (
                                <Button size="sm" className="h-7 px-2 text-xs rounded-sm" asChild>
                                    <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={12} className="mr-1" /> Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </MotionDiv>
        );
    }

    return (
        <MotionDiv
            variants={cardVariant}
            onClick={handleCardClick}
            className={`group overflow-hidden border border-border/40 rounded-sm hover:border-primary/30 transition-all duration-300 bg-card flex flex-col h-full ${project.isDetailsAvailable ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
            <div className="h-44 bg-muted overflow-hidden shrink-0">
                <img src={imagePath} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-base leading-tight mb-2">{name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">{description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 font-mono bg-primary/8 text-primary rounded-sm border border-primary/15">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
                    {isCodeAvailable && (
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs rounded-sm" asChild>
                            <a href={codebaseUrl} target="_blank" rel="noopener noreferrer">
                                <Github size={12} className="mr-1" /> Code
                            </a>
                        </Button>
                    )}
                    {isDemoAvailable && (
                        <Button size="sm" className="h-7 px-2 text-xs rounded-sm" asChild>
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={12} className="mr-1" /> Demo
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </MotionDiv>
    );
}

export default ProjectCard;
