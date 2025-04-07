import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { toast } from "sonner";

const Layout = () => {
    useEffect(() => {
        const hasSeenToast = sessionStorage.getItem("hasSeenDevToast");
        if (!hasSeenToast) {
            toast.warning("This site is under development", {
                description: "Some features may be incomplete or inaccurate.",
                duration: 8000,
            });
            sessionStorage.setItem("hasSeenDevToast", "true");
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow">
                <div className="container-custom py-6 md:py-10">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;