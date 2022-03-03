import React, { useState } from "react";
import banner from "../../../assets/images/Cover Image1.png";
import profilePic from "../../../assets/images/Profile Picture (2).png";
import { InlineIcon } from "@iconify/react";
import { useProfileContext } from "../../../Context/ProfileTemplateContext";
import linkdinIcon from "../../../assets/images/social_icon/linkedin.svg";
import facebookIcon from "../../../assets/images/social_icon/facebook.svg";
import callIcon from "../../../assets/images/icon.png";
import emailIcon from "../../../assets/images/icon (1).png";
import instagramIcon from "../../../assets/images/social_icon/instagram.svg";
import twitter from "../../../assets/images/social_icon/twitter2.svg";
import tiktok from "../../../assets/images/social_icon/tiktok1.svg";
import whatsapp from "../../../assets/images/social_icon/whatsapp.svg";
import youtube from "../../../assets/images/social_icon/youtube.svg";
import snapchat from "../../../assets/images/social_icon/snapchat.svg";
import discord from "../../../assets/images/social_icon/discord.png";
import skype from "../../../assets/images/social_icon/skype.svg";
import dribbble from "../../../assets/images/social_icon/dribbble.svg";
import behance from "../../../assets/images/social_icon/behance.svg";
import github from "../../../assets/images/social_icon/icons8-github.svg";
import microsoft from "../../../assets/images/social_icon/microsoft.png";
import website from "../../../assets/images/social_icon/domain.png";
import telephone from "../../../assets/images/social_icon/telephone.png";
import apple from "../../../assets/images/social_icon/mac-os.png";
import vimeo from "../../../assets/images/social_icon/vimeo.png";
import amazon from "../../../assets/images/social_icon/amazon.png";
import telegram from "../../../assets/images/social_icon/telegram-app--v1.png";
import blogger from "../../../assets/images/social_icon/blogger.png";
import location from "../../../assets/images/social_icon/location_icon.svg";
import pinterest from "../../../assets/images/social_icon/pinterest.svg";

function ProfileTemplate1() {
    const workLists = ["Social Media", "MARKETING", "DESIGN", "GRAPHIC"];
    const { userInfo, userPics, buttonInfo, iconAndTextColor } = useProfileContext();

    const social = {
        facebook: facebookIcon,
        twitter: twitter,
        instagram: instagramIcon,
        linkedin: linkdinIcon,
        tiktok: tiktok,
        github: github,
        website: website,
        phone: callIcon,
        telephone: telephone,
        email: emailIcon,
        whatsapp: whatsapp,
        youtube: youtube,
        microsoft: microsoft,
        apple: apple,
        vimeo: vimeo,
        snapchat: snapchat,
        amazon: amazon,
        discord: discord,
        telegram: telegram,
        skype: skype,
        dribbble: dribbble,
        blogger: blogger,
        behance: behance,
        location: location,
        pinterest: pinterest,
    };
    return (
        <div
            className="profile-template-1"
            style={{
                "--icon-text": iconAndTextColor?.icon,
                "--text": iconAndTextColor?.text,
            }}>
            <div className="banner">
                <img src={userPics?.cover?.dataURL || banner} alt="Banner" />
            </div>
            <div className="besic-info">
                <img className="profile-pic bg-light" src={userPics?.profile?.dataURL || profilePic} alt="profile" />
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
                        {userInfo?.tags?.map((el, index) => (
                            <p key={index} className="single-work">
                                {el}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="contact-section">
                <button
                    style={{
                        background: `${buttonInfo?.colors?.bg}`,
                        color: `${buttonInfo?.colors?.color}`,
                        boxShadow: `0 0 5px ${buttonInfo?.colors?.shadow}`,
                    }}
                    className="add-contact-btn">
                    {buttonInfo?.info?.text || "Ajouter aux contacts "}
                </button>
                <div className="social-container">
                    {userInfo?.links.map((data,index) => (
                        <a key={index} href={`${data?.link}`} target="_blank" className="signle-social-link">
                            <div className="left">
                                <img src={social[data?.name]} alt={""} />
                                <div>
                                    <h5>{data?.name}</h5>
                                    <p className="mt-1">{"name"}</p>
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
