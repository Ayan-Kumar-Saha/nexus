import { ISocialLink } from "../interfaces/social-link";
import { SOCIAL_LINKS } from "../constants/social-links";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-8 bg-background">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} Ayan Kumar Saha. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        {
                            SOCIAL_LINKS.map(({ id, icon: Icon, link }: ISocialLink) => {
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