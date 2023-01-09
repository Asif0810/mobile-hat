import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthCotext } from "../Context/AuthProvider";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthCotext)
    const location = useLocation();

    if (user) {
        return children
    }
    if (loading) {
        return <div>
            <h2 className="text-6xl text-center my-16">loading......</h2>
        </div>
    }
    return <Navigate to="/login" state={{ from: location }} replace />

};

export default PrivateRoutes;