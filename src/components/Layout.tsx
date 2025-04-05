import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;