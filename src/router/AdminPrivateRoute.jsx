import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context/UserContext";

const AdminPrivateRoute = () => {
    const auth = useAuth();
    const location = useLocation()

    if (auth.user?.isAdmin) {
        return <Outlet />;
    } else if (Object.values(auth?.user).length > 0 && !auth.user?.isAdmin) {
        return <Navigate state={{from:location}} to={"/admin/login"} />;
    } else {
        return (
            <div className="d-flex w-100 justify-content-center mt-5 pt-5 ">
                <div class="spinner-border alert-light" style={{ width: "5rem", height: "5rem" }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
};

export default AdminPrivateRoute;
