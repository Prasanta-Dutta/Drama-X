import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/AppLayout";
import { Error } from "./pages/Error";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Body } from "./components/Body";
import { Browse } from "./components/Browse";
import { Provider, useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import appStore from "./utils/appStore";
import { auth } from "./utils/firebase.config";
import { useEffect } from "react";
import { removeUser, addUser } from "./utils/userSlice";




const ProtectedBrowseRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user) return <Navigate to={"/"} />;
  return children;
}

const ProtectedHomeRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (user) return <Navigate to={"/browse"} />;
  return children;
}


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
      {
        path: "/browse",
        element:
          <ProtectedBrowseRoute>
            <Browse />
          </ProtectedBrowseRoute>
      }
    ],
    errorElement: <Error />,
  },
]);

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  return <RouterProvider router={appRouter} />
}

function App() {
  return (
    <Provider store={appStore}>
      <div className="">
        {/* <RouterProvider router={appRouter} >
          { <AppLayout /> } { Don't manually render it here the RouterProvider automatically renders the route }
        </RouterProvider> */}

        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;