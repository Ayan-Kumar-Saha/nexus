import { FunctionComponent, useState } from "react";
import { Link, useLocation } from "react-router";
import { NAV_LINKS } from "../models/navlinks";
import { INavLink } from "../interfaces/navlink";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        hidden: {
            opacity: 0,
            height: 0
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.2,
                staggerChildren: 0.03
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                when: "afterChildren",
                staggerChildren: 0.03,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 }
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
                                    .filter((link: INavLink) => link.isActive)
                                    .map((link: INavLink) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.path}
                                                className={`hover:text-primary transition-colors relative ${location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground'
                                                    }`}
                                            >
                                                {link.name}
                                                {location.pathname === link.path && (
                                                    <motion.span
                                                        layoutId="navbar-indicator"
                                                        className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full"
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                        </ul>
                        {/* <ThemeToggle /> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* <ThemeToggle /> */}
                        <button
                            className="text-foreground hover:text-primary p-1"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden py-3"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <ul className="flex flex-col space-y-2">
                                {NAV_LINKS.map((link: INavLink) => (
                                    <motion.li
                                        key={link.name}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`block py-2 hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Navbar;