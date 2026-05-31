import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CloudDownload, Wrench } from "lucide-react";
import { ISocialLink } from "@/interfaces/social-link";
import { SOCIAL_LINKS } from "@/constants/social-links";
import TypewriterBuilder from "@/components/home/TypewriterBuilder";
import { motion } from "framer-motion";

const STATS = [
    { value: "6+", label: "yrs exp" },
    { value: "20+", label: "projects" },
    { value: "10+", label: "clients" },
    { value: "2", label: "products" },
];

const HeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8">

            <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-xs font-mono text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    available for projects
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border/40 bg-card text-xs font-mono text-muted-foreground">
                    <Wrench size={11} className="text-primary" />
                    building: ai-driven saas tools
                </div>
            </div>

            <div>
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tight font-bold leading-[1.1]">
                    I'm <span className="text-primary">Ayan</span>
                </h1>
                <TypewriterBuilder
                    className="mt-3 font-mono text-xl sm:text-2xl md:text-2xl text-muted-foreground font-medium"
                    sequences={[
                        { text: "web developer", pause: 1200 },
                        { deleteChars: 13 },
                        { text: "mobile developer", pause: 1500 },
                        { deleteChars: 16 },
                        { text: "ui developer", pause: 1500 },
                        { deleteChars: 12 },
                        { text: "frontend developer", pause: 1500 },
                        { deleteChars: 18 },
                        { text: "backend developer", pause: 1500 },
                        { deleteChars: 17 },
                        { text: "full stack developer", pause: 1500 },
                        { deleteAll: true }
                    ]} />
            </div>

            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
                I build things for the web. Clean code, clear intent, and products that don't frustrate people.
            </p>

            <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-sm">
                    <Link to="/projects">
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-sm" asChild>
                    <a href="docs/resume_ayan_kumar_saha.pdf" download>
                        <CloudDownload className="mr-2 h-4 w-4" />
                        Resume
                    </a>
                </Button>
            </div>

            <div className="flex items-center gap-5">
                {
                    SOCIAL_LINKS
                        .filter((link: ISocialLink) => link.isActive)
                        .map(({ link, icon: Icon, id }: ISocialLink) => (
                            <a href={link} key={id} target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="social">
                                <Icon size={18} />
                            </a>
                        ))
                }
            </div>

            <div className="flex items-center gap-0 divide-x divide-border/50">
                {STATS.map(({ value, label }) => (
                    <div key={label} className="pr-5 first:pl-0 pl-5">
                        <p className="font-mono font-bold text-lg text-foreground">{value}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">{label}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default HeroSection;
