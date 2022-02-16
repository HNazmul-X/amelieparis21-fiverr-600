import { ProfileSidebarData } from "../../data/DashboardSideMenuData";
import { InlineIcon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function DashboardSideMenu() {
    const [activeMenu, setActiveMenu] = useState("");

    return (
        <div className="deshbord-menus-section">
            <div className="menu-container">
                {ProfileSidebarData.map((data, index) => (
                    <SidebarAccordion key={index} data={data} activeMenu={activeMenu} setActiveMenu={setActiveMenu} index={index} />
                ))}
            </div>
        </div>
    );
}

export default DashboardSideMenu;

const SidebarAccordion = ({ data, index, activeMenu, setActiveMenu }) => {
    const dropdownRef = useRef(null);

    const isDropDown = (data) => {
        return data?.dropdown?.length > 0;
    };

    const handleExpandingMenus = (id) => {
        if (activeMenu === id) {
            setActiveMenu("");
        } else {
            setActiveMenu(id);
        }
    };
    window.dropdownRef = dropdownRef;

    return (
        <div key={index} className="single-menu-section">
            <div className="single-menu-container">
                <div className={`menu-title-area ${data?.id === activeMenu ? "active-link" : ""} `} onClick={() => isDropDown(data) && handleExpandingMenus(data?.id)}>
                    <div className="menu-title-container">
                        {isDropDown(data) ? (
                            <>
                                <div className="left user-select-none">
                                    <InlineIcon icon="uil:image-upload" />
                                    <p className="title">{data.label}</p>
                                </div>
                            </>
                        ) : (
                            <Link to="/" className="left">
                                <InlineIcon icon="uil:image-upload" />
                                <p className="title">{data.label}</p>
                            </Link>
                        )}

                        {isDropDown(data) && <InlineIcon className="right-arrow" icon="ep:arrow-right" />}
                    </div>
                </div>
                {isDropDown(data) && (
                    <div className={`dropworn-area d-block`} ref={dropdownRef} style={{ maxHeight: activeMenu === data?.id ? dropdownRef.current.scrollHeight : 0 }}>
                        <div className="p-2">
                            <div className="dropdown-container">
                                {data.dropdown.map((drp,index) => (
                                    <Link key={index} to={drp.destination} className="single-dropdown">
                                        {drp.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <div></div>
            </div>
        </div>
    );
};
