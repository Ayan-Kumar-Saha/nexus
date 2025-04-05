import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const Layout = () => {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <div className="nx-container">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;