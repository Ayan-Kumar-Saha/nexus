import { Link } from "react-router";
import { ISocialLink } from "../interfaces/social-link";
import { SOCIAL_LINKS } from "../models/social-links";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border-default">
            <div className="nx-container py-8">
                <div className="flex justify-between items-center text-secondary-text">
                    <span className="text-sm">&copy; {year} Ayan Kumar Saha. All rights reserved.</span>

                    <ul className="flex items-center space-x-4">
                        {
                            SOCIAL_LINKS.map(({ id, icon: Icon, link }: ISocialLink) => {
                                return (
                                    <li key={id}>
                                        <Link to={link} target="_blank"> <Icon className="text-xl" /></Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;