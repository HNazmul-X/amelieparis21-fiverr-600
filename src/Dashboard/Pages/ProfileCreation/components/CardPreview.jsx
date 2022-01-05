import React from "react";
import cardImg from "../../../../assets/images/Rectangle 9.png"
import ProfileTemplate1 from './../../../Components/ProfileTemplate1/ProfileTemplate1';
import ProfileTemplate2 from './../../../Components/ProfileTemplate2/ProfileTemplate2';
import ProfileTemplate3 from './../../../Components/ProfileTemplate3/ProfileTemplate3';

function CardPreview() {
    return (
        <div>
            {/* <img src={cardImg} alt="" className='w-100' /> */}
            {/* <ProfileTemplate2 /> */}
            <ProfileTemplate3 />
        </div>
    );
}

export default CardPreview;
