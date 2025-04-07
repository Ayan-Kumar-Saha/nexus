import PositionCard from "@/components/PositionCard";
import SectionHeader from "@/components/SectionHeader";
import SkillCategoryCard from "@/components/SkillCategoryCard";
import { Button } from "@/components/ui/button";
import { CONTACT_METHODS } from "@/constants/contacts";
import { EXPERIENCES } from "@/constants/experiences";
import { ABOUT_PAGE_META } from "@/constants/page-meta";
import { SKILL_CATEGORIES } from "@/constants/skill-categories";
import { ISkillCategory } from "@/interfaces/skill-category";
import { Briefcase, Coffee, Download } from "lucide-react";
import { Link } from "react-router";

const AboutMe = () => {
    return (
        <>
            <SectionHeader title={ABOUT_PAGE_META.title} description={ABOUT_PAGE_META.description} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="my-3 text-sm md:text-base">
                        <p className="text-justify">
                            Hello! I'm Ayan Kumar Saha, a passionate full-stack developer with a strong focus on creating clean, efficient, and user-friendly applications. With over 5 years of experience in web development, I've worked on a wide range of projects from small business websites to large enterprise applications.
                        </p>
                        <p className="mt-3 text-justify">
                            I believe in continuous learning and staying up-to-date with the latest technologies and best practices. When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new hiking trails.
                        </p>
                        <p className="mt-3 text-justify">
                            I'm currently based in {CONTACT_METHODS.find(method => method.name === 'Location')?.value} and open to remote opportunities as well as interesting freelance projects.
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
                            <a href="/resume.pdf" download>
                                <Download className="mr-2" size={16} />
                                Download CV
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="border-4 border-primary w-[230px] h-[230px] rounded-full overflow-hidden">
                        <img src='images/placeholder.svg' className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <section className="mt-16">
                <SectionHeader title={ABOUT_PAGE_META.skill_header} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        SKILL_CATEGORIES.map(
                            (category: ISkillCategory) => <SkillCategoryCard key={category.category} category={category} />)
                    }
                </div>
            </section>

            <section className="mt-16">
                <SectionHeader title={ABOUT_PAGE_META.experience_header} />
                <div className="space-y-8">
                    {
                        EXPERIENCES.map((company, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-start">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mr-3">
                                        <Briefcase size={16} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-mono">{company.company}</h3>
                                    </div>
                                </div>
                                <div className="ml-10 space-y-4 mt-3">
                                    {company.positions.map((position, posIndex) => (
                                        <PositionCard key={posIndex} position={position} />
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default AboutMe;