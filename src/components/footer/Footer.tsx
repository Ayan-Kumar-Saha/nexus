import { ISocialLink } from "@/interfaces/social-link";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { SITE_INFO } from "@/constants/page-meta";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 py-6 bg-background">
            <div className="container-custom">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono">
                        <span>© {currentYear} ayan kumar saha</span>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span>updated: {SITE_INFO.lastUpdated}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {
                            SOCIAL_LINKS
                                .filter((link: ISocialLink) => link.isActive)
                                .map(({ id, icon: Icon, link }: ISocialLink) => (
                                    <a key={id} href={link}
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        <Icon size={16} />
                                    </a>
                                ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
