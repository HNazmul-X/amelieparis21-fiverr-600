import React from "react";
import SectionTitle from "./SectionTitle";
import { allTemplateData } from "../Data/profileCreationData";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";

function SelectProfileTemplate({ open, handelOpen, title }) {

    const { setProfileTemplateId } = useProfileContext();

    return (
        <div className="select-profile-template db-template">
            <SectionTitle title={title} handelOpen={handelOpen} open={open} />
            <div className={`${open.includes(title) ? "d-block open-div" : "d-none"}`}>
                <div className={`template-img-wrapper`}>
                    {allTemplateData.map((data, index) => {
                        return (
                            <div className="profile-template-card" onClick={()=> setProfileTemplateId(data?.id)} key={index}>
                                <img src={data?.preview_img} alt="image" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SelectProfileTemplate;
