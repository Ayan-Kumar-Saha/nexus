import { LuSearch } from "react-icons/lu";
import PageHeader from "../components/PageHeader";
import { pageTitle, pageDescription, PROJECT_LIST } from "../models/projects";
import { IProject } from "../interfaces/project";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <>
            <PageHeader title={pageTitle} description={pageDescription} />
            <div className="flex items-center gap-2 p-2 rounded-md border border-border-default mt-6 md:mt-12">
                <LuSearch className="text-lg text-secondary-text" />
                <input className="w-full outline-0 text-sm" type="text" placeholder="Search projects..." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    PROJECT_LIST.map((project: IProject) => <ProjectCard key={project.id} project={project} />)
                }
            </div>
        </>
    )
}

export default Projects;