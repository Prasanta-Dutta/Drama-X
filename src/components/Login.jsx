import { useState } from "react";

export const Login = () => {
    const [isLogIn, setIsLogIn] = useState(true);

    return (
        <div className="h-screen w-screen absolute z-20 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="p-10 bg-black bg-opacity-85 w-4/12 rounded-lg">
                <form className="flex flex-col">
                    <div className="text-3xl text-white font-bold my-4">
                        {isLogIn ? "Sign in" : "Sign up"}
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="p-2 text-gray-200 text-lg">Username</label>
                        <input type="text" className="border-2 border-gray-400 rounded-sm p-2" />
                    </div>
                    <div className="flex flex-col my-2 mb-6">
                        <label className="p-2 text-gray-200 text-lg">Password</label>
                        <input type="password" className="border-2 border-gray-400 rounded-sm p-2" />
                    </div>
                    <div className="flex flex-col my-2 mb-4">
                        <button type="submit" className="border-2 border-gray-400 rounded-sm bg-white text-xl font-semibold p-2">Submit</button>
                    </div>
                    <div className="flex my-2 mb-4">
                        <input type="checkbox" className="" />
                        <div className="text-sm text-white font-bold mx-5">Remind ME</div>
                    </div>
                    <div className="flex my-2 justify-center text-white">
                        Don't have an account? &nbsp;<span className="font-bold underline cursor-pointer" onClick={() => setIsLogIn(!isLogIn)}>{isLogIn ? "Sign up" : "Sign in"}</span>
                    </div>
                </form>
            </div>
        </div>
    )
};