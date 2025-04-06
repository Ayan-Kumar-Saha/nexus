import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="nx-container py-6 md:py-12">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;