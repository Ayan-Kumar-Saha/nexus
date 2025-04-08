import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-background">
                <Navbar />
                <main className="flex-grow">
                    <div className="container-custom py-6 md:py-10">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        </>

    )
}

export default Layout;