import CodeSnippet from "@/components/CodeSnippet";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TypewriterBuilder from "@/components/TypewriterBuilder";
import { Button } from "@/components/ui/button";
import { CONTACT_METHODS } from "@/constants/contacts";
import { HOME_PAGE_META } from "@/constants/page-meta";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { ISocialLink } from "@/interfaces/social-link";
import { ArrowRight, BriefcaseBusiness, CloudDownload, Coffee, ExternalLink } from "lucide-react";
import { Link } from 'react-router'

const Home = () => {
    return (
        <div className="space-y-16 md:space-y-24">
            <section className="relative rounded-xl overflow-hidden">
                <div className="relative z-10 py-8 md:py-16 px-4">
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                            <div className="space-y-6">
                                <div className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                    <span>Available for new positions</span>
                                </div>

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
                            </div>

                            <div className="hidden sm:block bg-card border border-border shadow-lg rounded-lg overflow-hidden">
                                <CodeSnippet />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Services />

            <FeaturedProjects />

            <Testimonials />

            <section className="relative bg-primary/5 rounded-xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <BriefcaseBusiness size={36} className="mx-auto text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {HOME_PAGE_META.get_in_touch.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {HOME_PAGE_META.get_in_touch.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                        <Button size="lg" asChild>
                            <Link to="/contact">
                                <Coffee className="mr-2 h-5 w-5" />
                                Let’s cook.
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href={`mailto:${CONTACT_METHODS.find(method => method.name === 'Email')?.value}`}>
                                <ExternalLink className="mr-2 h-5 w-5" />
                                {CONTACT_METHODS.find(method => method.name === 'Email')?.value}
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;