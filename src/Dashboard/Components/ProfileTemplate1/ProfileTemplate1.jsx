import React, { useState } from "react";
import banner from "../../../assets/images/Cover Image1.png";
import profilePic from "../../../assets/images/Profile Picture (2).png";
import { InlineIcon } from "@iconify/react";
import linkdinIcon from "../../../assets/images/Linkedin.png";
import facebookIcon from "../../../assets/images/Facebook.png";
import callIcon from "../../../assets/images/icon.png";
import emailIcon from "../../../assets/images/icon (1).png";
import instagramIcon from "../../../assets/images/Instagram.png";
import { useProfileContext } from "../../../Context/ProfileTemplateContext";

function ProfileTemplate1() {
    const workLists = ["Social Media", "MARKETING", "DESIGN", "GRAPHIC"];
    const { userInfo, userPics,buttonInfo } = useProfileContext();

    const social = {
        facebook: facebookIcon,
        instagram: instagramIcon,
        linkedin: linkdinIcon,
        phone: callIcon,
        email: emailIcon,
    };
    console.log(userInfo.name);
    return (
        <div className="profile-template-1">
            <div className="banner">
                <img src={userPics.cover.dataURL || banner} alt="Banner" />
            </div>
            <div className="besic-info">
                <img className="profile-pic bg-light" src={userPics.profile.dataURL || profilePic} alt="profile" />
                <div className="info">
                    <div className="name-section">
                        <div>
                            <h3>{userInfo?.name || "Your Name Here"}</h3>
                            <p>{userInfo?.tagline || "Your Tagline Here"}</p>
                        </div>
                        <div className="share">
                            <InlineIcon className="share_icon" icon="bx:bxs-share-alt" />
                        </div>
                    </div>
                    <div className="description">
                        <p>{userInfo?.about || "Write Something About You"}</p>
                    </div>
                    <div className="work-container">
                        {userInfo.tags?.map((el, index) => (
                            <p key={index} className="single-work">
                                {el}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="contact-section">
                <button className="add-contact-btn">{buttonInfo?.info?.text || "ADD TO CONTACT"}</button>
                <div className="social-container">
                    {userInfo.links.map((data) => (
                        <a href={`${data?.name === "phone" ? "tel:" : data?.name === "email" ? "mailto:" : ""}${data?.link}`} target="_blank" className="signle-social-link">
                            <div className="left">
                                <img src={social[data?.name]} alt={""} />
                                <div>
                                    <h5>{data?.name}</h5>
                                    <p className="mt-1">{(userInfo.name && userInfo.name.split(" ")[1]) || "username"}</p>
                                </div>
                            </div>
                            <InlineIcon className={`right-arrow `} icon="ep:arrow-right" />
                        </a>
                    ))}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default ProfileTemplate1;
