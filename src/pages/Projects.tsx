import { Search } from "lucide-react";
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
            <div className="flex items-center gap-2 px-3 py-2 rounded-sm border border-border/40 mt-6 md:mt-10 bg-card focus-within:border-primary/40 transition-colors">
                <Search size={14} className="text-muted-foreground shrink-0" />
                <input
                    className="w-full outline-none text-sm bg-transparent placeholder:text-muted-foreground/60 font-mono"
                    type="text"
                    placeholder="search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="mt-5">
                <p className="font-mono text-xs text-muted-foreground mb-3">// filter by tag</p>
                <div className="flex flex-wrap gap-1.5">
                    {
                        allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => onTagClick(tag)}
                                className={`px-2.5 py-1 rounded-sm text-xs font-mono border transition-colors cursor-pointer ${
                                    selectedTags.includes(tag)
                                        ? "border-primary/50 bg-primary/10 text-primary"
                                        : "border-border/40 bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                                }`}
                            >
                                {tag}
                            </button>
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
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                            {
                                filteredProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
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