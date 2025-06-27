import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CloudDownload } from "lucide-react";
import { ISocialLink } from "@/interfaces/social-link";
import { SOCIAL_LINKS } from "@/constants/social-links";
import TypewriterBuilder from "@/components/home/TypewriterBuilder";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6">
            {/* <div className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                <span>Available for new positions</span>
            </div> */}

            <h1 className="text-3xl md:text-4xl tracking-tight font-bold">
                <span>I'm <span className="text-primary">Ayan</span></span>
                <TypewriterBuilder
                    className="mt-2"
                    sequences={[
                        { text: "a <span class='text-primary'>Web</span> Developer", pause: 1000 },
                        { deleteChars: 13 },
                        { text: "<span class='text-primary'>Mobile</span> Developer", pause: 1500 },
                        { deleteChars: 16 },
                        { text: "<span class='text-primary'>UI</span> Developer", pause: 1500 },
                        { deleteChars: 12 },
                        { text: "<span class='text-primary'>Frontend</span> Developer", pause: 1500 },
                        { deleteChars: 18 },
                        { text: "<span class='text-primary'>Backend</span> Developer", pause: 1500 },
                        { deleteChars: 18 },
                        { text: "<span class='text-primary'>Full Stack</span> Developer", pause: 1500 },
                        { deleteAll: true }
                    ]} />
            </h1>

            <p className="text-muted-foreground max-w-md text-base md:text-lg">
                I design and build beautifully simple things
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild>
                    <Link to="/projects">
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <a href="docs/resume_ayan_kumar_saha.pdf" download>
                        <CloudDownload className="mr-2 h-4 w-4" />
                        Download CV
                    </a>
                </Button>
            </div>

            <div className="flex items-center gap-5 pt-2">
                {
                    SOCIAL_LINKS
                        .filter((link: ISocialLink) => link.isActive)
                        .map(({ link, icon: Icon, id }: ISocialLink) => (
                            <a href={link} key={id} target="_blank" className="text-muted-foreground hover:text-primary transition" aria-label="GitHub">
                                <Icon size={20} />
                            </a>
                        ))
                }
            </div>
        </motion.div>
    )
}

export default HeroSection;