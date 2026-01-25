import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedBrowseRoute = ({ children }) => {
    const user = useSelector((state) => state.user);
    if (!user) return <Navigate to={"/"} />;
    return children;
};

export const ProtectedHomeRoute = ({ children }) => {
    const user = useSelector((state) => state.user);
    if (user) return <Navigate to={"/browse"} />;
    return children;
};
