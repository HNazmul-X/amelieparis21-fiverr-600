import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import SelectProfileTemplate from "./SelectProfileTemplate";
import SetupProfileLink from "./SetupProfileLink";
import SetUpPersonalInformation from "./SetUpPersonalInformation";
import SetupSocialLink from "./SetupSocialLink";
import SocialLinkSelection from "./SocialLinkSelection";

function LeftSide() {
    const [open, setOpen] = useState("");
    const [iconPopupShow, setIconPopupShow] = useState(true);
    const handelOpen = (data) => {
        if (data === open) {
            setOpen("");
        } else {
            setOpen(data);
        }
    };

    return (
        <>
            <div className="left-side-container db-template">
                <SelectProfileTemplate handelOpen={handelOpen} open={open} title={"Select Your Profile Template"} />
                <SetupProfileLink handelOpen={handelOpen} open={open} title={"Setup Profile Link"} />
                <SetUpPersonalInformation handelOpen={handelOpen} open={open} title={"Setup Personal Information"} />
                <SetupSocialLink handelOpen={handelOpen} open={open} title={"Setup Social Link"} />
            </div>
            {iconPopupShow ? <SocialLinkSelection onClose={() => setIconPopupShow(!iconPopupShow)} /> : null}
        </>
    );
}

export default LeftSide;
