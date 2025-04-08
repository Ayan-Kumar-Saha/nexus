export interface ITestimonial {
    id: number;
    author: string;
    profileImage: string;
    designation: string;
    organization?: string
    quote: string;
    isActive: boolean;
}