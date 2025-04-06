import { ITestimonial } from "@/interfaces/testimonial";
import { Card } from "./ui/card";
import { FunctionComponent } from "react";
import { Quote } from "lucide-react";

interface ITestimonialCardProps {
    testimonial: ITestimonial
}

const TestimonialCard: FunctionComponent<ITestimonialCardProps> = ({ testimonial }) => {
    const { author, profileImage, quote, designation, organization } = testimonial;
    return (
        <Card className="flex flex-col justify-between h-full min-h-[320px] border border-border/50 p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
            <div className="flex-grow">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-foreground text-justify mb-6 line-clamp-7">{quote}</p>
            </div>

            <div className="flex items-center gap-4 mt-auto">
                <img
                    src={profileImage ? profileImage : 'images/placeholder.svg'}
                    alt={author}
                    className="w-12 h-12 rounded-full object-cover border border-muted"
                />
                <div>
                    <p className="font-semibold">{author}</p>
                    <p className="text-sm text-muted-foreground">
                        {designation}
                    </p>
                    {organization && <p className="text-xs text-primary">@ {organization}</p>}
                </div>
            </div>
        </Card>

    );
}

export default TestimonialCard;