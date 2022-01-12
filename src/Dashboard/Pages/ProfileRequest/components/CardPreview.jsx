import React from "react";
import cardImg from "../../../../assets/images/Rectangle 9.png";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";
import { allTemplateData } from "../Data/profileCreationData";

function CardPreview() {
    const {profileTemplateId} = useProfileContext();


    return (
        <div className="">
            {/* <img src={cardImg} alt="" className='w-100' /> */}
            {allTemplateData.map((template) => (profileTemplateId === template.id ? <template.template /> : null))}
            {/* <ProfileTemplate1 /> */}
        </div>
    );
}

export default CardPreview;
