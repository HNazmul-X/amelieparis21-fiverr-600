import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideMenu from "./DashboardSideMenu";
import { InlineIcon } from "@iconify/react";

const DashboardLayout = () => {
  return (
    <main id="admin_panel_dashboard">
      <div className="layout">
        <div className="dashboard__layout__side__menu__bar">
          <div className="sidebar-brand">
            <h3>Brand Name</h3>
          </div>
          <DashboardSideMenu />
        </div>

        <div className="dashboard__layout__main__content">
          {" "}
          <div className="dashboard__navbar">
            <div class="input-group search_wrapper">
              <span class="input-group-text" className="adon">
                <InlineIcon icon=":ant-design:search-outlined" />
              </span>
              <input type="text" className="form-control" />
            </div>
            <InlineIcon className="avatar" icon="carbon:user-avatar" />
          </div>
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
