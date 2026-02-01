import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { ProtectedHomeRoute, ProtectedBrowseRoute } from "./projectedRoutes";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Body } from "../components/Body";
import { Browse } from "../components/Browse";
import { Error } from "../pages/Error";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element:
                    <ProtectedHomeRoute>
                        <Body />
                    </ProtectedHomeRoute>
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },

        ],
        errorElement: <Error />
    },
    {
        path: "/browse",
        element:
            <ProtectedBrowseRoute>
                <Browse />
            </ProtectedBrowseRoute>
    }
]);

export default appRouter;