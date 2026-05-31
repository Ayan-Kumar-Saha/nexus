import ExperienceCard from "@/components/about-me/ExperienceCard";
import SectionHeader from "@/components/shared/SectionHeader";
import SkillCategoryCard from "@/components/about-me/SkillCategoryCard";
import { Button } from "@/components/ui/button";
import { CONTACT_METHODS } from "@/constants/contacts";
import { EXPERIENCES } from "@/constants/experiences";
import { ABOUT_PAGE_META } from "@/constants/page-meta";
import { SKILL_CATEGORIES } from "@/constants/skill-categories";
import { ISkillCategory } from "@/interfaces/skill-category";
import { Coffee, Download } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.35
        }
    }
};

const AboutMe = () => {
    return (
        <>
            <SectionHeader title={ABOUT_PAGE_META.title} description={ABOUT_PAGE_META.description} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col-reverse md:flex-row gap-8 mt-2">
                <div className="flex-1">
                    <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                        <p>
                            Hey, I'm Ayan. I build software for a living and I genuinely like it. Six years in and I still get a kick out of shipping something that works.
                        </p>
                        <p>
                            I've worked across the stack. Frontends, backends, mobile apps, wearables, DevOps, cloud infra. The problems kept pulling me in different directions and I followed.
                        </p>
                        <p>
                            Outside work, I'm into personal finance, read about money more than most people I know, and follow cricket closely. I also like reading about how businesses work, what makes products stick, and occasionally go down rabbit holes I didn't plan on.
                        </p>
                        <p>
                            Based in {CONTACT_METHODS.find(method => method.name === 'Location')?.value}. Open to remote work and freelance projects, especially ones that involve something I haven't done before.
                        </p>
                    </div>
                    <div className="flex mt-8 gap-3">
                        <Button className="rounded-sm" asChild>
                            <Link to="/contact">
                                <Coffee className="mr-2" size={15} />
                                Get in Touch
                            </Link>
                        </Button>
                        <Button variant="outline" className="rounded-sm" asChild>
                            <a href="docs/resume_ayan_kumar_saha.pdf" download>
                                <Download className="mr-2" size={15} />
                                Download CV
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end items-start">
                    <div className="border-2 border-primary/30 w-[180px] h-[180px] md:w-[210px] md:h-[210px] rounded-full overflow-hidden">
                        <img src='images/dp2.png' className="w-full h-full object-cover" alt="Ayan Kumar Saha" />
                    </div>
                </div>
            </motion.div>

            <section className="mt-16 scroll-offset" id="skills">
                <SectionHeader title={ABOUT_PAGE_META.skill_header} />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        SKILL_CATEGORIES.map(
                            (category: ISkillCategory) => (
                                <motion.div key={category.category} variants={itemVariants} className="h-full">
                                    <SkillCategoryCard category={category} />
                                </motion.div>
                            ))
                    }
                </motion.div>
            </section>

            <section className="mt-16">
                <SectionHeader title={ABOUT_PAGE_META.experience_header} />
                <div className="relative ml-1.5 pl-6 border-l border-border/30 space-y-8">
                    {EXPERIENCES.map((company) => (
                        <ExperienceCard key={company.id} experience={company} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default AboutMe;
