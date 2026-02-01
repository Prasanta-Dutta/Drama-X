import { Outlet } from "react-router-dom";
// import { Body } from "./Body";
import {Header} from "./Header";
import Footer from "./Footer";

export const AppLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
            {/* <Body /> */}
            <Footer />
        </div>
    )
};