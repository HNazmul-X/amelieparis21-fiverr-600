import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <main id="admin_panel_dashboard">
            <div className="layout">
                <div className="dashboard__layout__side__menu__bar">
                    <div className="sidebar-brand">
                        <h3>company Brand</h3>
                    </div>

                    
                </div>

                <div className="dashboard__layout__main__content">  
                    <div className="dashboard__navbar">

                    </div>
                    <div className="dashboard-content">
                        <Outlet/>
                    </div>



                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;
