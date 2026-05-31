import { ITestimonial } from "@/interfaces/testimonial";
import { FunctionComponent } from "react";

interface ITestimonialCardProps {
    testimonial: ITestimonial
}

const TestimonialCard: FunctionComponent<ITestimonialCardProps> = ({ testimonial }) => {
    const { author, profileImage, quote, designation, organization } = testimonial;
    return (
        <div className="flex flex-col h-full min-h-[260px] border border-border/40 rounded-sm p-6 hover:border-primary/30 transition-colors bg-card">
            <p className="text-sm text-foreground leading-relaxed mb-6 flex-grow line-clamp-6">
                &ldquo;{quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <img
                    src={profileImage ? profileImage : 'images/placeholder.svg'}
                    alt={author}
                    className="w-9 h-9 rounded-full object-cover border border-border/40"
                />
                <div>
                    <p className="text-sm font-semibold">{author}</p>
                    <p className="text-xs text-muted-foreground">
                        {designation}{organization ? ` · ${organization}` : ''}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
