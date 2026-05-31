import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECT_LIST } from "@/constants/projects";
import { resolveSlug } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Code, ExternalLink, Github, Layers, Tag } from "lucide-react";
import { FunctionComponent } from "react"
import { Link, useParams } from "react-router"

const ProjectDetails: FunctionComponent = () => {

    const { slug } = useParams<{ slug: string }>();
    const project = PROJECT_LIST.filter(p => p.isDetailsAvailable).find((p) => resolveSlug(p.name) === slug);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-bold mb-4">Project not found / Project data not yet available</h2>
                <Button asChild variant="default">
                    <Link to="/projects">
                        <ArrowLeft className="mr-2" size={16} />
                        Back to Projects
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">

            <Link to="/projects" className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft size={13} />
                back to projects
            </Link>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
                {
                    project.imagePath && (
                        <div className="w-full md:w-3/6 rounded-sm overflow-hidden border border-border/40">
                            <img
                                src={project.imagePath}
                                alt={project.name}
                                className="w-full h-full object-cover aspect-video"
                            />
                        </div>
                    )
                }

                <div className="flex-1">
                    <p className="font-mono text-xs text-primary mb-2">// project</p>
                    <h1 className="text-2xl font-bold font-mono mb-4">
                        {project.name}
                    </h1>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-sm text-xs font-mono border border-border/30">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {
                            project.isCodeAvailable && (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={project.codebaseUrl} target="_blank" rel="noopener noreferrer">
                                        <Github size={16} className="mr-1" /> Code
                                    </a>
                                </Button>
                            )
                        }
                        {
                            project.isDemoAvailable && (
                                <Button size="sm" asChild>
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} className="mr-1" /> Demo
                                    </a>
                                </Button>
                            )
                        }
                    </div>
                </div>
            </div>

            <Separator className="my-8" />

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                    <TabsTrigger value="overview" className="flex items-center gap-2">
                        <Layers size={16} />
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="features" className="flex items-center gap-2">
                        <Tag size={16} />
                        Features
                    </TabsTrigger>
                    <TabsTrigger value="contribution" className="flex items-center gap-2">
                        <Code size={16} />
                        Contribution
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                        <p className="text-muted-foreground">
                            {project.longDescription || project.description}
                        </p>
                    </div>
                </TabsContent>

                <TabsContent value="features">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    {project.features.length > 0 ? (
                        <ul className="space-y-3 pl-5 list-disc text-muted-foreground marker:text-primary">
                            {project.features.map((feature, index) => (
                                <li key={index} className="pl-2">{feature}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-muted-foreground">No detailed features available for this project.</p>
                    )}
                </TabsContent>

                <TabsContent value="contribution">
                    <h3 className="text-xl font-semibold mb-4">My Contribution</h3>
                    {project.contributions.length > 0 ? (
                        <ul className="space-y-3 pl-5 list-disc text-muted-foreground marker:text-primary">
                            {project.contributions.map((contribution, index) => (
                                <li key={index} className="pl-2">{contribution}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-muted-foreground">No detailed contributions available for this project.</p>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default ProjectDetails