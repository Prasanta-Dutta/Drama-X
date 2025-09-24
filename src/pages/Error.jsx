import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1 className="text-4xl text-red-600 my-4">Error !</h1>
            <h2 className="text-2xl text-gray-700">{error?.status} {error.statusText}</h2>
            <h2 className="text-2xl text-gray-700">{error?.error?.message}</h2>
            
        </div>
    )
};