import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/AppLayout";
import { Error } from "./pages/Error";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <Error />,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  }
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter} >
        {/* <AppLayout /> */} {/* Don't manually render it here the RouterProvider automatically renders the route */}
      </RouterProvider>
    </div>
  );
}

export default App;