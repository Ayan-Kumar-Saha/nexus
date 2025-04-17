import { LuSearch } from "react-icons/lu";
import SectionHeader from "@/components/shared/SectionHeader";
import { PROJECT_LIST } from "@/constants/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { FunctionComponent, useState } from "react";
import { Button } from "@/components/ui/button";
import { PROJECT_PAGE_META } from "@/constants/page-meta";
import { motion } from "framer-motion";

const containerVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, }, }
}

const cardVariant = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Projects: FunctionComponent = () => {
    const activeProjects = PROJECT_LIST.filter(proj => proj.isActive);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const allTags: string[] = Array.from(new Set(activeProjects.flatMap(project => project.tags)));

    const onTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }

    const filteredProjects = activeProjects.filter(project => {
        const matchBySearchTerm = searchTerm === '' || (
            project.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.trim().toLowerCase())
        )
        const matchByTag = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));
        return matchBySearchTerm && matchByTag;
    })

    return (
        <>
            <SectionHeader title={PROJECT_PAGE_META.title} description={PROJECT_PAGE_META.description} />
            <div className="flex items-center gap-2 p-2 rounded-md border border-border-default mt-6 md:mt-12">
                <LuSearch className="text-lg text-secondary-text" />
                <input className="w-full outline-0 text-sm"
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">Filter by tags:</p>
                <div className="flex flex-wrap gap-2 my-4">
                    {
                        allTags.map(tag => (
                            <Button
                                key={tag}
                                variant={selectedTags.includes(tag) ? "default" : "outline"}
                                size="sm"
                                onClick={() => onTagClick(tag)}
                                className="text-xs cursor-pointer"
                            >
                                {tag}
                            </Button>
                        ))
                    }
                </div>
            </div>

            {
                filteredProjects.length > 0
                    ? (
                        <motion.div
                            variants={containerVariant}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                            {
                                filteredProjects.map((project) => (
                                    <ProjectCard key={project.id} variants={cardVariant} project={project} />
                                ))
                            }
                        </motion.div>
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-muted-foreground">No projects found matching your criteria.</p>
                            <Button
                                variant="link"
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedTags([]);
                                }}
                            >
                                Clear filters
                            </Button>
                        </div>
                    )
            }
        </>
    )
}

export default Projects;