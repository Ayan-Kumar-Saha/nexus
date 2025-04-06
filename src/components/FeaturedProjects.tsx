import { ArrowRight } from "lucide-react";
import { Link } from "react-router"
import { IProject } from "@/interfaces/project";
import { PROJECT_LIST } from "@/models/projects";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Some of my recent work that showcases my skills and experience.
                    </p>
                </div>
                <Link to="/projects" className="inline-flex items-center text-primary mt-4 md:mt-0 hover:underline">
                    View all projects <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    PROJECT_LIST
                        .filter((project: IProject) => project.isFeatured)
                        .map((project: IProject) => <ProjectCard key={project.id} project={project} />)
                }
            </div>
        </section>
    )
}

export default FeaturedProjects;