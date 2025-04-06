import { ITestimonial } from "@/interfaces/testimonial";
import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";
import { HOME_PAGE_META } from "@/constants/page-meta";

const Testimonials = () => {
    return (
        <section>
            <SectionHeader title={HOME_PAGE_META.testimonial.title}
                description={HOME_PAGE_META.testimonial.description} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {
                    TESTIMONIALS.map(
                        (testimonial: ITestimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    )
                }
            </div>
        </section>
    );
}

export default Testimonials;