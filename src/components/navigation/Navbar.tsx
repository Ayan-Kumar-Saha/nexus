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
        <header className="sticky top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur-xl">
            <div className="container-custom py-4">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="font-mono text-sm font-bold group">
                        <span className="text-primary">~/</span>
                        <span className="text-foreground group-hover:text-primary transition-colors">ayan</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-6">
                            {
                                NAV_LINKS
                                    .filter((link: INavLink) => link.isActive && link.showInNav)
                                    .map((link: INavLink) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.path}
                                                className={`font-mono text-sm transition-colors relative pb-1 ${
                                                    location.pathname === link.path
                                                        ? 'text-primary'
                                                        : 'text-muted-foreground hover:text-foreground'
                                                }`}
                                            >
                                                {link.name}
                                                {location.pathname === link.path && (
                                                    <motion.span
                                                        className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary"
                                                        layoutId="navbar-indicator"
                                                        transition={{ duration: 0.25 }}
                                                    />
                                                )}
                                            </Link>
                                        </li>
                                    ))
                            }
                            <li>
                                <Link
                                    to="https://topmate.io/ayan_kumar_saha"
                                    className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    book 1:1
                                </Link>
                            </li>
                        </ul>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </nav>

                {
                    isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-border/40 mt-3">
                            <ul className="flex flex-col gap-1">
                                {
                                    NAV_LINKS
                                        .filter((link: INavLink) => link.isActive && link.showInNav)
                                        .map((link: INavLink) => (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className={`block py-2 font-mono text-sm transition-colors ${
                                                    location.pathname === link.path
                                                        ? 'text-primary'
                                                        : 'text-muted-foreground hover:text-foreground'
                                                }`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ))
                                }
                                <Link
                                    to="https://topmate.io/ayan_kumar_saha"
                                    className="block py-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    book 1:1
                                </Link>
                            </ul>
                        </div>
                    )
                }
            </div>
        </header>
    )
}

export default Navbar;
