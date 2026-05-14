import { ISocialLink } from "@/interfaces/social-link";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { SITE_INFO } from "@/constants/page-meta";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-8 bg-background">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} Ayan Kumar Saha. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/15 transition-colors cursor-default group">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40 [animation-delay:0.5s]"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]"></span>
                            </span>
                            <span className="text-xs text-muted-foreground font-medium whitespace-nowrap group-hover:text-foreground transition-colors">
                                Last updated: {SITE_INFO.lastUpdated}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {
                            SOCIAL_LINKS
                                .filter((link: ISocialLink) => link.isActive)
                                .map(({ id, icon: Icon, link }: ISocialLink) => {
                                    return (
                                        <a key={id} href={link}
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors">
                                            <Icon className="text-xl" />
                                        </a>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;