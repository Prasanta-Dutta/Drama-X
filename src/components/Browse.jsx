import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux"
import { Logo2 } from "./Logo2";
import { auth } from "../utils/firebase.config";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

export const Browse = () => {
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
        <div>
            <div className="flex justify-between m-3 p-3">
                <Logo2 />
                <div
                    className="text-xl text-gray-700 cursor-pointer"
                    onClick={handleLogout}
                >
                    Logout
                </div>
            </div>
        </div>
    )
}