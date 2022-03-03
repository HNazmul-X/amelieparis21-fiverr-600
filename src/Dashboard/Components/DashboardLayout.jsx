import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashboardSideMenu from "./DashboardSideMenu";
import { InlineIcon } from "@iconify/react";
import { useAuth } from "../../Context/UserContext";
import logo from "../../assets/images/Asset 1.svg"

const DashboardLayout = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (auth?.user?.isAdmin === false) {
            navigate("/admin/login", {
                state: {
                    from: location,
                },
            });
        }
    }, [auth?.user?.isAdmin]);

    return (
        <main id="admin_panel_dashboard">
            <div className="layout">
                {auth?.user?.isAdmin ? (
                    <div className="dashboard__layout__side__menu__bar">
                        <div className="sidebar-brand">
                           <img src={logo} className="img-fluid " style={{width:"80px"}}  alt="" />
                        </div>
                        <DashboardSideMenu />
                    </div>
                ) : null}

                <div className={`dashboard__layout__main__content ${!auth?.user?.isAdmin ? "w-100" : ""}`}>
                    {" "}
                    {auth?.user?.isAdmin ? (
                        <div className="dashboard__navbar">
                            <button className="my-button" onClick={() => auth.logoutUser()}>
                                LogOut
                            </button>
                        </div>
                    ) : null}
                    <div style={{ height: !auth?.user?.isAdmin ? "100vh" : null }} className="dashboard-content ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;
