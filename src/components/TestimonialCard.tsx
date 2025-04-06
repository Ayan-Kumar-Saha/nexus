import { ITestimonial } from "@/interfaces/testimonial";
import { Card, CardContent } from "./ui/card";
import { FunctionComponent } from "react";

interface ITestimonialCardProps {
    testimonial: ITestimonial
}

const TestimonialCard: FunctionComponent<ITestimonialCardProps> = ({ testimonial }) => {
    const { author, quote, designation } = testimonial;
    return (
        <Card className="border border-border/50">
            <CardContent className="p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" viewBox="0 0 45 36" fill="currentColor" className="h-8 w-8 text-primary/20 mb-4">
                    <path d="M13.5 18H9C9 12.9375 12.9375 9 18 9V4.5C10.5 4.5 4.5 10.5 4.5 18L4.5 31.5H18V18H13.5ZM31.5 18H27C27 12.9375 30.9375 9 36 9V4.5C28.5 4.5 22.5 10.5 22.5 18L22.5 31.5H36V18H31.5Z" />
                </svg>
                <p className="italic text-foreground mb-4">{quote}</p>
                <div>
                    <p className="font-semibold">{author}</p>
                    <p className="text-sm text-muted-foreground">{designation}</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default TestimonialCard;