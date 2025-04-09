import { FunctionComponent, useState } from "react";
import ContactCard from "../components/ContactCard";
import SectionHeader from "../components/SectionHeader";
import SocialCard from "../components/SocialCard";
import { CONTACT_METHODS } from "../constants/contacts";
import { SOCIAL_LINKS } from "../constants/social-links";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { CONTACT_PAGE_META } from "@/constants/page-meta";

const Contact: FunctionComponent = () => {

    const [formData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting] = useState(false);

    const handleChange = () => { }

    const onFormSubmit = () => { }

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
                    <form className="space-y-6" onSubmit={onFormSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-muted-foreground">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-muted-foreground">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your email"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm text-muted-foreground">
                                Subject
                            </label>
                            <Input
                                id="subject"
                                name="subject"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Subject of your message"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-muted-foreground">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message..."
                                rows={6}
                            />
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto cursor-pointer">
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