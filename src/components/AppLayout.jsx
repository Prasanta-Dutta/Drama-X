import { Outlet } from "react-router-dom";
// import { Body } from "./Body";
import {Header} from "./Header";

export const AppLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
            {/* <Body /> */}
        </div>
    )
};