import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-screen">
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;