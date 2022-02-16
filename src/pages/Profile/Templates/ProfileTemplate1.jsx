import React, { useState } from "react";
import banner from "../../../assets/images/Cover Image1.png";
import profilePic from "../../../assets/images/Profile Picture (2).png";
import { InlineIcon } from "@iconify/react";
import linkdinIcon from "../../../assets/images/social_icon/linkedin.svg";
import facebookIcon from "../../../assets/images/social_icon/facebook.svg";
import as from "../../../assets/images/social_icon/facebook.svg";
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

import { apiBaseURL } from "./../../../Util/API_Info";

function ProfileTemplate1({ data, onShare, addToContact }) {
    const baseurl = apiBaseURL;

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
        <div className="profile-template-1 w-100 " style={{ "--icon-text": data?.colors?.icon, "--text": data?.colors?.text }}>
            <div className="banner">
                <img src={baseurl + data?.photos.cover} alt="Banner" />
            </div>
            <div className="besic-info">
                <img className="profile-pic bg-light" src={baseurl + data?.photos?.profile || profilePic} alt="profile" />
                <div className="info">
                    <div className="name-section">
                        <div>
                            <h3>{data?.personalInfo?.name || "Your Name Here"}</h3>
                            <p>{data?.personalInfo?.tagline || "Your Tagline Here"}</p>
                        </div>
                        <div className="share" onClick={() => onShare(window.location)}>
                            <InlineIcon className="share_icon" icon="bx:bxs-share-alt" />
                        </div>
                    </div>
                    <div className="description">
                        <p>{data?.personalInfo?.about || "Write Something About You"}</p>
                    </div>
                    <div className="work-container">
                        {data?.personalInfo?.tags?.map((el, index) => (
                            <p key={index} className="single-work">
                                {el}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="contact-section">
                <button
                    onClick={addToContact}
                    style={{
                        background: `${data?.colors?.button?.bg}`,
                        color: `${data?.colors?.button?.color}`,
                        boxShadow: `0 0 5px ${data?.colors?.button?.shadow}`,
                    }}
                    className="add-contact-btn">
                    {"ADD TO CONTACT"}
                </button>
                <div className="social-container-1">
                    {data?.socialLinks.map((el, index) => (
                        <a
                            key={index}
                            href={`${el?.name === "phone" ? "tel:" : el?.name === "email" ? "mailto:" : el?.name === "telephone" ? "tel:" : ""}${el?.link}`}
                            target="_blank"
                            className="signle-social-link">
                            <div className="left">
                                <img src={social[el?.name]} alt={""} />
                                <div>
                                    <h5>{el?.name}</h5>
                                    <p className="mt-1">{el?.link}</p>
                                </div>
                            </div>
                            <InlineIcon className={`right-arrow `} icon="ep:arrow-right" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileTemplate1;
