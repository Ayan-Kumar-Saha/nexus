import { ITestimonial } from "@/interfaces/testimonial";
import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className="bg-card/30 rounded-xl py-12 px-6">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Client Testimonials</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    What people are saying about working with me.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {
                    TESTIMONIALS.map((testimonial: ITestimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)
                }
            </div>
        </section>
    );
}

export default Testimonials;