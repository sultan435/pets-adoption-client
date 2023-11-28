import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Shared/Navbar/Navbar";
import Footer from "../../pages/Home/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-offWhite">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;