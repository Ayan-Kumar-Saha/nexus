import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router";
import { NAV_LINKS } from "../models/navlinks";
import { INavLink } from "../interfaces/navlink";

const Navbar: FunctionComponent = () => {

    const location = useLocation();

    return (
        <header className="sticky top-0 backdrop-blur-lg bg-background/90 border-b border-border z-50">
            <div className="nx-container py-3">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="font-mono text-lg md:text-xl font-bold hover:text-primary transition-colors">
                        <span className="text-primary">&gt;</span> ayan<span className="text-primary">_</span>kumar<span className="text-primary">_</span>saha
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <ul className="flex items-center space-x-6">
                            {NAV_LINKS.map((link: INavLink) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`hover:text-primary transition-colors relative ${location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground'}`}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;