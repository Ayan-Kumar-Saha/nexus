import { FunctionComponent, useState } from "react";
import { Link, useLocation } from "react-router";
import { NAV_LINKS } from "@/constants/navlinks";
import { INavLink } from "@/interfaces/navlink";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { motion } from "framer-motion";

const Navbar: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 backdrop-blur-lg bg-background/90 border-b border-border z-50">
            <div className="container-custom py-3">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="font-mono text-lg md:text-xl font-bold hover:text-primary transition-colors">
                        <span className="text-primary">&gt;</span> ayan<span className="text-primary">_</span>kumar<span className="text-primary">_</span>saha
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <ul className="flex items-center space-x-6">
                            {
                                NAV_LINKS
                                    .filter((link: INavLink) => link.isActive && link.showInNav)
                                    .map((link: INavLink) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.path}
                                                className={`hover:text-primary transition-colors relative ${location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground'
                                                    }`}
                                            >
                                                {link.name}
                                                {location.pathname === link.path && (
                                                    <motion.span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full"
                                                        layoutId="navbar-indicator"
                                                        transition={{ duration: 0.3 }} />
                                                )}
                                            </Link>
                                        </li>
                                    ))
                            }
                            <li>
                                <Link
                                    to="https://cal.com/ayan-kumar-saha"
                                    className={`hover:text-primary transition-colors relative text-foreground`}>
                                    Book 1:1
                                </Link>
                            </li>
                        </ul>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <ThemeToggle />
                        <button
                            className="text-foreground hover:text-primary p-1"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>

                {
                    isMenuOpen && (
                        <div className="md:hidden py-3">
                            <ul className="flex flex-col space-y-2">
                                {
                                    NAV_LINKS
                                        .filter((link: INavLink) => link.isActive && link.showInNav)
                                        .map((link: INavLink) => (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className={`block py-2 hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground'
                                                    }`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ))
                                }
                                <li>
                                    <Link
                                        to="https://cal.com/ayan-kumar-saha"
                                        className={`block py-2 hover:text-primary transition-colors relative text-foreground`}>
                                        Book 1:1
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div >
        </header >
    )
}

export default Navbar;