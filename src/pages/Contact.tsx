import { FunctionComponent, useState } from "react";
import ContactCard from "@/components/contact/ContactCard";
import SectionHeader from "@/components/shared/SectionHeader";
import SocialCard from "@/components/shared/SocialCard";
import { CONTACT_METHODS } from "@/constants/contacts";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { CONTACT_PAGE_META } from "@/constants/page-meta";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { SubmitHandler, useForm } from "react-hook-form";
import { IContactFormData } from "@/interfaces/contact-form-data";

const Contact: FunctionComponent = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactFormData>()

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaToken, setCaptchaToken] = useState("");

    const onError = () => {
        const firstError = Object.values(errors)[0];
        if (firstError && firstError?.message) {
            toast.error(firstError.message)
        }
    }


    const onFormSubmit: SubmitHandler<IContactFormData> = (data: IContactFormData) => {
        setIsSubmitting(true);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            data as unknown as Record<string, unknown>,
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        ).then(() => {
            toast('Message sent!', {
                description: "Thanks for reaching out. I'll get back to you soon.",
            });
            reset();
        }).catch(() => {
            toast('Something went wrong!', {
                description: "Please try again later",
            });
        }).finally(() => {
            setIsSubmitting(false);
        })
    }

    return (
        <div className="space-y-12">
            <SectionHeader title={CONTACT_PAGE_META.title} description={CONTACT_PAGE_META.description} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-xl font-bold">Get in Touch</h3>

                    <div className="space-y-4">
                        {
                            CONTACT_METHODS.map(method => <ContactCard key={method.id} method={method} />)
                        }
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {
                                SOCIAL_LINKS.map(method => <SocialCard key={method.id} method={method} />)
                            }
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit(onFormSubmit, onError)}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-muted-foreground">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    {...register('name', { required: 'Name is required' })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-muted-foreground">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    placeholder="Your email"
                                    {...register('email', { required: true })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm text-muted-foreground">
                                Subject
                            </label>
                            <Input
                                id="subject"
                                placeholder="Subject of your message"
                                {...register('subject', { required: true })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-muted-foreground">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Your message..."
                                rows={6}
                                {...register('message', { required: true })}
                            />
                        </div>
                        <ReCAPTCHA
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={(token) => setCaptchaToken(token || "")}
                        />

                        <Button type="submit" disabled={isSubmitting || !captchaToken} className="w-full sm:w-auto cursor-pointer">
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                                    Sending...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Send size={16} />
                                    Send Message
                                </span>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;