import { Outlet } from "react-router";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "./components/ui/sonner";
import { ReactLenis } from 'lenis/react'

const Layout = () => {
    return (
        <ReactLenis root options={{ smoothWheel: true }}>
            <div className="min-h-screen flex flex-col bg-background">
                <Navbar />
                <main className="flex-grow">
                    <div className="container-custom py-6 md:py-10">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
            <Toaster />
        </ReactLenis>
    )
}

export default Layout;