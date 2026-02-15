import { useEffect, useRef, useState } from "react";
import { auth } from "../utils/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useFormValidation } from "../utils/useFormValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export const Login = () => {
    console.log("render");
    const [isLogIn, setIsLogIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const classNameList = {
        inputClassName: "border-2 border-slate-700 rounded-sm p-2 bg-slate-800 text-white",
        submitClassName: "border-2 border-rose-700 rounded-sm p-2 bg-rose-800 text-xl font-semibold text-white",
        errorBoxClassName: "border-2 border-red-700 rounded-sm p-2 bg-black bg-opacity-0 text-xl text-red-600 text-center",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit button clicked");

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { validationStatus, errorMessage } = useFormValidation(
            name?.current?.value,
            email?.current?.value,
            password?.current?.value,
            isLogIn
        );

        if (!validationStatus) {
            setErrorMessage(errorMessage);
            return;
        }
        setErrorMessage(null);

        if (!isLogIn) {
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userInfo) => {
                    updateProfile(auth.currentUser, {
                        displayName: name?.current?.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        console.log(uid, email, displayName);
                        dispatch(addUser({ uid, email, displayName }));
                        navigate("/browse");
                    }).catch((error) => {
                        console.log(error.message);
                    });
                })
                .catch((error) => {
                    console.log("Error " + error.code + " " + error.message);
                    setErrorMessage("Error " + error.code + " " + error.message);
                });
        }
        else {
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userInfo) => {
                    const user = userInfo.user;
                    const safeUser = {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    };
                    console.log(user);
                    dispatch(addUser(safeUser));
                    navigate("/browse");
                })
                .catch((error) => {
                    setErrorMessage("Error " + error.code + " " + error.message);
                });
        }

        return;
    };

    useEffect(() => {
        return () => {
            setErrorMessage(null);
            if (name.current) name.current.value = "";
            if (email.current) email.current.value = "";
            if (password.current) password.current.value = "";
        }
    }, [isLogIn]);

    return (
        <div className="h-screen w-screen absolute z-20 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="p-10 bg-black bg-opacity-85 sm:w-full md:w-1/4 rounded-lg">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="text-3xl text-white font-bold my-4">
                        {isLogIn ? "Sign in" : "Sign up"}
                    </div>
                    {
                        !!errorMessage &&
                        <div className="flex flex-col my-3">
                            <div className={classNameList.errorBoxClassName}>{errorMessage}</div>
                        </div>
                    }
                    {
                        !!!isLogIn &&
                        <div className="flex flex-col my-3">
                            <input ref={name} type="text" placeholder="Name" className={classNameList.inputClassName} />
                        </div>
                    }
                    <div className="flex flex-col my-3">
                        <input ref={email} type="text" placeholder="Email" className={classNameList.inputClassName} />
                    </div>
                    <div className="flex flex-col my-3">
                        <input ref={password} type="password" placeholder="Password" className={classNameList.inputClassName} />
                    </div>
                    <div className="flex flex-col my-3 mb-4">
                        <button
                            type="submit"
                            className={classNameList.submitClassName}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="flex my-2 justify-center text-white">
                        {isLogIn ? "Don't have an account? " : "Already have an account? "} &nbsp;
                        <span
                            className="font-bold underline cursor-pointer"
                            onClick={() => setIsLogIn(!isLogIn)}
                        >
                            {isLogIn ? "Sign up" : "Sign in"}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
};