import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context/UserContext";

const PrivateRoute = () => {
    const auth = useAuth();
    const location = useLocation();

    // if(auth?.user?.isLoggedIn){
    //     return <Outlet/>
    // } else{
    //     return <Navigate state={{ from: location }} to={"/login"} replace={true} />;
    // }
    return <Outlet />;
};

export default PrivateRoute;
