import { ArrowRight } from "lucide-react";
import { Link } from "react-router"
import { IProject } from "@/interfaces/project";
import { PROJECT_LIST } from "@/constants/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { HOME_PAGE_META } from "@/constants/page-meta";

const FeaturedProjects = () => {
    return (
        <section>
            <SectionHeader title={HOME_PAGE_META.featured_project.title}
                description={HOME_PAGE_META.featured_project.description} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    PROJECT_LIST
                        .filter((project: IProject) => project.isFeatured && project.isActive)
                        .map((project: IProject) => <ProjectCard key={project.id} project={project} />)
                }
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10">
                <span></span>
                <Link to="/projects" className="inline-flex justify-center items-center text-primary mt-4 md:mt-0 hover:underline">
                    View all projects <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>
        </section>
    )
}

export default FeaturedProjects;