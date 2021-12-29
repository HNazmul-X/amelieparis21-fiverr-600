import { datas } from "../../data/DashboardSideMenuData";
import { InlineIcon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";

function DashboardSideMenu() {
  const [activeMenu, setActiveMenu] = useState("");
  return (
    <div className="deshbord-menus-section">
      <div className="menu-container">
        {datas.map((data, index) => (
          <div key={index} className="single-menu-section">
            <div className="single-menu-container">
              <div
                className={`${
                  activeMenu === data.label ? "active-link" : ""
                } menu-title-area`}
              >
                <div className="menu-title-container">
                  <Link to="/" className="left">
                    <InlineIcon icon="uil:image-upload" />
                    <p className="title">{data.label}</p>
                  </Link>
                  <InlineIcon
                    onClick={() => setActiveMenu(data.label)}
                    className="right-arrow"
                    icon="ep:arrow-right"
                  />
                </div>
              </div>
              {data.dropdown.length > 0 && (
                <div
                  className={`${
                    activeMenu === data.label ? "d-block" : "d-none"
                  } dropworn-area`}
                >
                  <div className="dropdown-container">
                    {data.dropdown.map((drp) => (
                      <Link to={drp.destination} className="single-dropdown">
                        {drp.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardSideMenu;
