import { useState } from "react";
import ContactCard from "../components/ContactCard";
import PageHeader from "../components/PageHeader";
import SocialCard from "../components/SocialCard";
import { CONTACT_METHODS, pageDescription, pageTitle } from "../models/contacts";
import { SOCIAL_LINKS } from "../models/social-links";
import { LuSend } from "react-icons/lu";

const Contact = () => {

    const [isSubmitting] = useState(false);

    return (
        <>
            <PageHeader title={pageTitle} description={pageDescription} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                {/* Contact Methods */}
                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-xl font-mono font-bold">Get in Touch</h3>

                    <div className="space-y-4">
                        {
                            CONTACT_METHODS.map(method => <ContactCard key={method.id} method={method} />)
                        }
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-mono font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {
                                SOCIAL_LINKS.map(method => <SocialCard key={method.id} method={method} />)
                            }
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-mono font-bold mb-6">Send a Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name" className="text-sm text-secondary-text">
                                    Name
                                </label>
                                <input type="text"
                                    className="text-sm border border-border-default rounded-md py-2 px-3 outline-primary-text"
                                    placeholder="Enter your name" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email" className="text-sm text-secondary-text">
                                    Email
                                </label>
                                <input type="text"
                                    className="text-sm border border-border-default rounded-md py-2 px-3 outline-primary-text"
                                    placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="subject" className="text-sm text-secondary-text">
                                Subject
                            </label>
                            <input type="text"
                                className="text-sm border border-border-default rounded-md py-2 px-3 outline-primary-text"
                                placeholder="Subject of your matter" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="message" className="text-sm text-secondary-text">
                                Message
                            </label>
                            <textarea rows={6}
                                className="text-sm border border-border-default rounded-md py-2 px-3 outline-primary-text" />
                        </div>
                        {
                            !isSubmitting
                                ? (
                                    <button className="inline-flex items-center justify-center gap-2 cursor-pointer rounded-md text-sm h-10 py-2 px-4 bg-accent-text hover:bg-accent-text/90 text-white transition-colors">
                                        <LuSend /><span>Send Message</span>
                                    </button>
                                )
                                : (
                                    <button className="inline-flex items-center justify-center gap-2 cursor-pointer rounded-md text-sm h-10 py-2 px-4 bg-accent-text/90 text-white transition-colors">
                                        <LuSend /><span>Sending...</span>
                                    </button>
                                )
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;