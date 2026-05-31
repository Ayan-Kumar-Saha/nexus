import CodeSnippet from "@/components/home/CodeSnippet";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import { Button } from "@/components/ui/button";
import { HOME_PAGE_META } from "@/constants/page-meta";
import { motion } from "framer-motion";
import { Calendar, Coffee } from "lucide-react";
import { FunctionComponent } from "react";
import { Link } from 'react-router'

const Home: FunctionComponent = () => {
    return (
        <div className="space-y-20 md:space-y-28">
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center py-6 md:py-12">
                    <HeroSection />

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="hidden md:block">
                        <CodeSnippet />
                    </motion.div>
                </div>
            </section>

            <Services />

            <FeaturedProjects />

            <Testimonials />

            <section className="border border-border/40 rounded-sm p-8 md:p-12 bg-card">
                <div className="max-w-2xl space-y-5">
                    <p className="font-mono text-xs text-primary">// let&apos;s_collaborate</p>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                        {HOME_PAGE_META.get_in_touch.heading}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {HOME_PAGE_META.get_in_touch.description}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-1">
                        <Button size="lg" className="rounded-sm" asChild>
                            <Link to="/contact">
                                <Coffee className="mr-2 h-4 w-4" />
                                Contact Me
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-sm" asChild>
                            <Link to="https://topmate.io/ayan_kumar_saha">
                                <Calendar className="mr-2 h-4 w-4" />
                                Book 1:1
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
