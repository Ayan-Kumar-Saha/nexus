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
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4
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
                transition={{ duration: 0.5 }}
                className="flex flex-col-reverse md:flex-row gap-6">
                <div className="flex-1/2">
                    <div className="my-3 text-sm md:text-base">
                        <p className="text-justify">
                            Hey, I’m Ayan Kumar Saha, a full-stack engineer who’s all about building things that work and feel right. Clean code, clear intent, and a good user experience - that’s my happy place.
                        </p>
                        <p className="mt-3 text-justify">
                            I’ve been doing this for over six years now. From small websites to enterprise-level systems, I’ve worn a lot of hats. But it’s never been just about ticking boxes. I care about the craft. I enjoy solving problems that matter and making digital spaces better.
                        </p>
                        <p className="mt-3 text-justify">
                            Outside of work, I’m a finance enthusiast, an unapologetic cricket addict, and someone who genuinely enjoys the occasional escape to the bed, for good sleep.
                        </p>
                        <p className="mt-3 text-justify">
                            I’m currently based in {CONTACT_METHODS.find(method => method.name === 'Location')?.value} - open to remote roles and freelance gigs that are worth the time and energy. If you’ve got something interesting, let’s chat.
                        </p>
                    </div>
                    <div className="flex mt-10 gap-3">
                        <Button asChild>
                            <Link to="/contact">
                                <Coffee className="mr-2" size={16} />
                                Get in Touch
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="docs/resume_ayan_kumar_saha.pdf" download>
                                <Download className="mr-2" size={16} />
                                Download CV
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex-1/2 flex justify-center items-center">
                    <div className="border-4 border-primary w-[200px] h-[200px] md:w-[230px] md:h-[230px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden">
                        <img src='images/dp2.png' className="w-full h-full object-cover" />
                    </div>
                </div>
            </motion.div>

            <section className="mt-16 scroll-offset" id="skills">
                <SectionHeader title={ABOUT_PAGE_META.skill_header} />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {

                        SKILL_CATEGORIES.map(
                            (category: ISkillCategory) => (
                                <motion.div key={category.category} variants={itemVariants}>
                                    <SkillCategoryCard category={category} />
                                </motion.div>
                            ))
                    }
                </motion.div>
            </section>

            <section className="mt-16">
                <SectionHeader title={ABOUT_PAGE_META.experience_header} />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        EXPERIENCES.map((company) => <ExperienceCard key={company.id} experience={company} />)
                    }
                </div>
            </section>
        </>
    );
}

export default AboutMe;