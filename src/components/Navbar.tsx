import { FunctionComponent } from "react";
import { Link } from "react-router";
import { NAV_LINKS } from "../models/navlinks";
import { INavLink } from "../interfaces/navlink";

const Navbar: FunctionComponent = () => {
    return (
        <header className="sticky top-0 backdrop-blur-lg bg-background/90 border-b border-border z-50">
            <div className="nx-container py-3">
                <nav className="flex justify-between items-center">
                    <Link to='/' className="font-code text-lg md:text-xl font-bold">
                        <span className="text-primary">&gt;</span> ayan<span className="text-primary">_</span>saha
                    </Link>
                    <ul className="flex items-center space-x-6">
                        {
                            NAV_LINKS.map((navlink: INavLink) => {
                                return (
                                    <li key={navlink.id}>
                                        <Link to={navlink.path} className="font-medium">{navlink.name}</Link>
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