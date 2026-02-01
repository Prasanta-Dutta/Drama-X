import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const user = useSelector((state) => state.user);
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/");

        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="flex items-center mx-6">
            <div
                className="text-xl text-white font-medium cursor-pointer px-4 py-2 rounded-md bg-slate-700"
                onClick={handleLogout}
            >
                Logout
            </div>
        </div>
    )
};

export default Logout;