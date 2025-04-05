import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router";
import { NAV_LINKS } from "../models/navlinks";
import { INavLink } from "../interfaces/navlink";

const Navbar: FunctionComponent = () => {

    const location = useLocation();

    return (
        <header className="sticky top-0 backdrop-blur-lg bg-page-background border-b border-border-default z-50">
            <div className="nx-container py-3">
                <nav className="flex justify-between items-center">
                    <Link to='/' className="font-code text-xl md:text-2xl font-bold hover:text-accent-text transition-colors">
                        <span className="text-accent-text">&gt;</span> ayan<span className="text-accent-text">_</span>kumar<span className="text-accent-text">_</span>saha
                    </Link>
                    <ul className="flex items-center space-x-6">
                        {
                            NAV_LINKS.map((navlink: INavLink) => {
                                return (
                                    <li key={navlink.id}>
                                        <Link to={navlink.path}
                                            className={`font-medium hover:text-accent-text transition-colors ${navlink.path === location.pathname ? 'text-accent-text' : 'text-primary-text'}`}>{navlink.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Navbar;