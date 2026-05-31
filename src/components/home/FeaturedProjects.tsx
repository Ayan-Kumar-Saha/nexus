import { ArrowRight } from "lucide-react";
import { Link } from "react-router"
import { IProject } from "@/interfaces/project";
import { PROJECT_LIST } from "@/constants/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { HOME_PAGE_META } from "@/constants/page-meta";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const FeaturedProjects = () => {
    const featured = PROJECT_LIST.filter((p: IProject) => p.isFeatured && p.isActive);

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}>
            <SectionHeader title={HOME_PAGE_META.featured_project.title}
                description={HOME_PAGE_META.featured_project.description} />

            {featured.length > 0 && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-4">
                    <ProjectCard project={featured[0]} featured={true} />
                    {featured.length > 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {featured.slice(1).map((project: IProject) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </motion.div>
            )}

            <div className="flex justify-end mt-8">
                <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-mono text-primary hover:underline underline-offset-4">
                    view all projects <ArrowRight size={14} />
                </Link>
            </div>
        </motion.section>
    )
}

export default FeaturedProjects;
