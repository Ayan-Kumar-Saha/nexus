import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <div className="nx-container min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;