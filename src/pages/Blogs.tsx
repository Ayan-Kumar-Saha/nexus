import { FunctionComponent } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ExternalLink, PenLine } from "lucide-react";
import { motion } from "framer-motion";

const BLOG_TEASERS = [
    {
        id: 1,
        title: "Building niche SaaS — lessons from the first 90 days",
        description: "What I got wrong about scope, pricing, and who to build for. The unglamorous truth about going from idea to paying users.",
        tag: "saas / product",
        readTime: "8 min read",
        link: null,
        coming: true,
    },
    {
        id: 2,
        title: "Applied AI in real products — beyond the ChatGPT wrapper",
        description: "How I'm using LLMs as infrastructure, not features. Patterns that actually stick in production.",
        tag: "ai / engineering",
        readTime: "6 min read",
        link: null,
        coming: true,
    },
    {
        id: 3,
        title: "Clean architecture in React — without the ceremony",
        description: "Folder structures, abstractions, and the rules I actually follow after 6 years of frontend work.",
        tag: "frontend / craft",
        readTime: "5 min read",
        link: null,
        coming: true,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Blogs: FunctionComponent = () => {
    return (
        <>
            <SectionHeader
                title="writings"
                description="Thoughts on building, shipping, and the craft of software."
            />

            <div className="mb-8 flex items-center gap-2 p-3 border border-primary/20 bg-primary/5 rounded-sm">
                <PenLine size={14} className="text-primary shrink-0" />
                <p className="text-xs font-mono text-muted-foreground">
                    <span className="text-primary">upcoming posts —</span> these are drafts in progress. subscribe or check back soon.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-3">
                {BLOG_TEASERS.map((post) => (
                    <motion.div
                        key={post.id}
                        variants={itemVariants}
                        className="group flex items-start gap-5 p-5 border border-border/40 rounded-sm bg-card hover:border-primary/30 transition-colors">
                        <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-primary/8 text-primary mt-0.5">
                            <PenLine size={14} />
                        </div>
                        <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-1.5">
                                <span className="font-mono text-xs text-primary">{post.tag}</span>
                                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                                {post.coming && (
                                    <span className="font-mono text-xs px-1.5 py-0.5 border border-border/50 text-muted-foreground rounded-sm">
                                        coming soon
                                    </span>
                                )}
                            </div>
                            <h3 className="font-bold text-base mb-1 leading-snug group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {post.description}
                            </p>
                        </div>
                        {post.link && (
                            <a href={post.link} target="_blank" className="shrink-0 text-muted-foreground hover:text-primary transition-colors mt-1">
                                <ExternalLink size={14} />
                            </a>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}

export default Blogs;
