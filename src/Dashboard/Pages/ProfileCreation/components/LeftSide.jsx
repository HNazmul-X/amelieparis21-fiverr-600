import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import SelectProfileTemplate from "./SelectProfileTemplate";
import SetUpPersonalInformation from "./SetUpPersonalInformation";
import SetupSocialLink from "./SetupSocialLink";
import SocialLinkSelection from "./SocialLinkSelection";
import SetupProfilePics from "./SetupProfilePics";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";

function LeftSide() {
    const { socialLinks } = useProfileContext();
    const [open, setOpen] = useState([]);
    const [iconPopupShow, setIconPopupShow] = useState(true);
    const [selectedIcon, setSelectedIcon] = useState([]);
    const handelOpen = (data) => {
        if (open.includes(data)) {
            const newOpen = open.filter((el) => el !== data);
            setOpen(newOpen);
        } else {
            setOpen([...open, data]);
        }
    };

    return (
        <>
            <div className="left-side-container db-template">
                <SelectProfileTemplate handelOpen={handelOpen} open={open} title={"Select Your Profile Template"} />
                <SetupProfilePics handelOpen={handelOpen} open={open} title={"Setup Profile Link"} />
                <SetUpPersonalInformation handelOpen={handelOpen} open={open} title={"Setup Personal Information"} />
                <SetupSocialLink setIconPopupShow={setIconPopupShow} handelOpen={handelOpen} open={open} title={"Setup Social Link"} />
            </div>
            {iconPopupShow ? <SocialLinkSelection selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} onClose={() => setIconPopupShow(!iconPopupShow)} /> : null}
        </>
    );
}

export default LeftSide;
