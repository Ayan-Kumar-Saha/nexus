import { ITestimonial } from "@/interfaces/testimonial";
import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "../shared/SectionHeader";
import { HOME_PAGE_META } from "@/constants/page-meta";
import Marquee from "react-fast-marquee";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Testimonials: FunctionComponent = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}>
            <SectionHeader title={HOME_PAGE_META.testimonial.title}
                description={HOME_PAGE_META.testimonial.description} />

            <Marquee pauseOnHover gradient={false} speed={35}>
                {
                    TESTIMONIALS
                        .filter((testimonial: ITestimonial) => testimonial.isActive)
                        .map((testimonial: ITestimonial) => (
                            <div key={testimonial.id} className="min-w-[360px] max-w-sm px-3 h-full">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))
                }
            </Marquee>
        </motion.section>
    );
}

export default Testimonials;
