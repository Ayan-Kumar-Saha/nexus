import { LuSearch } from "react-icons/lu";
import PageHeader from "../components/PageHeader";
import { pageTitle, pageDescription, PROJECT_LIST } from "../models/projects";
import { IProject } from "../interfaces/project";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

const Projects = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [allProjects, setAllProjects] = useState<IProject[]>(PROJECT_LIST);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const tags: string[] = Array.from(new Set(allProjects.flatMap(project => project.tags)));

    const onTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }

    const filteredProjects = allProjects.filter(project => {
        const matchBySearchTerm = searchTerm === '' || (
            project.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.trim().toLowerCase())
        )
        const matchByTag = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));
        return matchBySearchTerm && matchByTag;
    })

    return (
        <>
            <PageHeader title={pageTitle} description={pageDescription} />
            <div className="flex items-center gap-2 p-2 rounded-md border border-border-default mt-6 md:mt-12">
                <LuSearch className="text-lg text-secondary-text" />
                <input className="w-full outline-0 text-sm"
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="mt-6">
                <p className="text-secondary-text text-sm mb-2">Filter by technology</p>
                <div className="flex flex-wrap gap-2 my-4">
                    {
                        tags.map((tag, index) => (
                            <button className={`text-xs cursor-pointer border border-border-default h-9 px-3 rounded-md transition-all ${selectedTags.includes(tag) ? 'bg-accent-text text-white' : 'bg-page-background hover:bg-code-background  '}`}
                                key={index}
                                onClick={() => onTagClick(tag)}>{tag}</button>
                        ))
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                    filteredProjects.map((project: IProject) => <ProjectCard key={project.id} project={project} />)
                }
            </div>
        </>
    )
}

export default Projects;