import { ITestimonial } from "@/interfaces/testimonial";
import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";
import { HOME_PAGE_META } from "@/constants/page-meta";
import Marquee from "react-fast-marquee";
import { FunctionComponent } from "react";

const Testimonials: FunctionComponent = () => {
    return (
        <section>
            <SectionHeader title={HOME_PAGE_META.testimonial.title}
                description={HOME_PAGE_META.testimonial.description} />

            <Marquee pauseOnHover gradient={false} speed={50}>
                {
                    TESTIMONIALS
                        .filter((testimonial: ITestimonial) => testimonial.isActive)
                        .map((testimonial: ITestimonial) => (
                            <div key={testimonial.id} className="min-w-[400px] max-w-sm px-4 h-full">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))
                }
            </Marquee>
        </section>
    );
}

export default Testimonials;