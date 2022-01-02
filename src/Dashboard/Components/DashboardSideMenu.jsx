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
                  {data.dropdown && data.dropdown.length ? (
                    <p
                      onClick={() => setActiveMenu(data.label)}
                      className="left mb-0 menu-item"
                    >
                      <InlineIcon icon="uil:image-upload" />
                      <span className="title">{data.label}</span>
                    </p>
                  ) : (
                    <Link to={data.destination} className="left mb-0 menu-item">
                      <InlineIcon icon="uil:image-upload" />
                      <span className="title">{data.label}</span>
                    </Link>
                  )}
                  {data.dropdown && data.dropdown.length > 0 && (
                    <InlineIcon className="right-arrow" icon="ep:arrow-right" />
                  )}
                </div>
              </div>
              {data.dropdown && data.dropdown.length > 0 && (
                <div
                  className={`${
                    activeMenu === data.label ? "d-block" : "d-none"
                  } dropworn-area`}
                >
                  <div className="dropdown-container">
                    {data.dropdown.map((drp, index) => (
                      <Link
                        key={index}
                        to={drp.destination}
                        className="single-dropdown"
                      >
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
