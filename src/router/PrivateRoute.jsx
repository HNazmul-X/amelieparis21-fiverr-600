import axios from "axios";
import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/UserContext";
import GetCookie from "../Util/Coockie";

const PrivateRoute = () => {
    const auth = useAuth();
    const location = useLocation();
    const getCookie = new GetCookie();
    const jwtToken = getCookie.getCookie("token");
    const userContextEmpty = Object.values(auth?.user);

    if (auth?.user?.isLoggedIn && Object.keys(auth.user).keys.length > 0) {
        return <Outlet />;
    } else {
        if (userContextEmpty && jwtToken?.length > 2) {
            return <Outlet />;
        } else {
            return <Navigate state={{ from: location }} to={"/login"} replace={true} />;
        }
    }
};

export default PrivateRoute;
