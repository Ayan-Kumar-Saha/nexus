import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
    const location = useLocation();

    const pageVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow">
                <div className="container-custom py-6 md:py-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            className="page-transition"
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;