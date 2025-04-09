import CodeSnippet from "@/components/CodeSnippet";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { CONTACT_METHODS } from "@/constants/contacts";
import { HOME_PAGE_META } from "@/constants/page-meta";
import { BriefcaseBusiness, Coffee, ExternalLink } from "lucide-react";
import { FunctionComponent } from "react";
import { Link } from 'react-router'

const Home: FunctionComponent = () => {
    return (
        <div className="space-y-16 md:space-y-24">
            <section className="relative rounded-xl overflow-hidden">
                <div className="relative z-10 py-8 md:py-16 px-4">
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                            <HeroSection />

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