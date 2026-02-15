import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { ProtectedHomeRoute, ProtectedBrowseRoute } from "./projectedRoutes";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Body } from "../components/Body";
import { Error } from "../pages/Error";
import { lazy, Suspense } from "react";

const Browse = lazy(() => import("../components/Browse"));

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
            <Suspense fallback={<div className="text-white">Loading...</div>}>
                <ProtectedBrowseRoute>
                    <Browse />
                </ProtectedBrowseRoute>
            </Suspense>
    }
]);

export default appRouter;