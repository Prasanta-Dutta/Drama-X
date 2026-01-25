import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import appRouter from "../routes/appRouter";
import { RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase.config";
import { useEffect } from "react";

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
};

export default AppRouter;