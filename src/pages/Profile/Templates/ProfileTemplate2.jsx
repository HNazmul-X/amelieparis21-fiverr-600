import React from "react";
import banner from "../../../assets/images/profile_2_cover.png";
import profilePic from "../../../assets/images/Profile Picture.png";
import { InlineIcon } from "@iconify/react";
import twitterFill from "@iconify/icons-akar-icons/twitter-fill";
import facebookFill from "@iconify/icons-akar-icons/facebook-fill";
import instagramFill from "@iconify/icons-akar-icons/instagram-fill";
import linkedinIcon from "@iconify/icons-brandico/linkedin";
import bxlTiktok from "@iconify/icons-bx/bxl-tiktok";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import monitorShimmer from "@iconify/icons-mdi/monitor-shimmer";
import mobileDevice from "@iconify/icons-akar-icons/mobile-device";
import telephoneIcon from "@iconify/icons-bytesize/telephone";
import emailLine from "@iconify/icons-clarity/email-line";
import whatsappIcon from "@iconify/icons-dashicons/whatsapp";
import youtubeFilled from "@iconify/icons-ant-design/youtube-filled";
import microsoftIcon from "@iconify/icons-bi/microsoft";
import appleFilled from "@iconify/icons-ant-design/apple-filled";
import vimeoRect from "@iconify/icons-brandico/vimeo-rect";
import snapchatIcon from "@iconify/icons-fa-brands/snapchat";
import amazonCircleFilled from "@iconify/icons-ant-design/amazon-circle-filled";
import discordFill from "@iconify/icons-akar-icons/discord-fill";
import telegramFill from "@iconify/icons-akar-icons/telegram-fill";
import skypeFilled from "@iconify/icons-ant-design/skype-filled";
import dribbbleCircleFilled from "@iconify/icons-ant-design/dribbble-circle-filled";
import bloggerRect from "@iconify/icons-brandico/blogger-rect";
import behanceCircleFilled from "@iconify/icons-ant-design/behance-circle-filled";
import bxCurrentLocation from "@iconify/icons-bx/bx-current-location";
import pinterestFill from "@iconify/icons-akar-icons/pinterest-fill";
import { apiBaseURL } from "./../../../Util/API_Info";

export default function ProfileTemplate2({ data, onShare, addToContact }) {
    const baseurl = apiBaseURL;

    const social = {
        facebook: facebookFill,
        twitter: twitterFill,
        instagram: instagramFill,
        linkedin: linkedinIcon,
        tiktok: bxlTiktok,
        github: githubFill,
        whatsapp: whatsappIcon,
        youtube: youtubeFilled,
        microsoft: microsoftIcon,
        apple: appleFilled,
        vimeo: vimeoRect,
        snapchat: snapchatIcon,
        amazon: amazonCircleFilled,
        discord: discordFill,
        telegram: telegramFill,
        skype: skypeFilled,
        dribbble: dribbbleCircleFilled,
        blogger: bloggerRect,
        behance: behanceCircleFilled,
        website: monitorShimmer,
        phone: mobileDevice,
        telephone: telephoneIcon,
        email: emailLine,
        location: bxCurrentLocation,
        pinterest: pinterestFill,
    };
    return (
        <div
            className="profile-2-conatiner w-100 "
            style={{
                "--purple-600": data?.colors?.icon,
                "--text": data?.colors?.text,
            }}>
            <div className="banner">
                <img src={baseurl + data?.photos?.cover || banner} alt="Banner" />
            </div>
            <div className="content">
                <div className="profile_pic_area">
                    <img className="profile_pic" src={baseurl + data?.photos?.profile || profilePic} alt="Profile pic" />
                    <div onClick={onShare} className="shear_icon_wrapper">
                        <InlineIcon className="share_icon" icon="ci:share-outline" />
                    </div>
                </div>
                <div className="besic-info">
                    <h3>{data?.personalInfo?.name || "Peter Michael"}</h3>
                    <p>{data?.personalInfo?.tagline || "Professional Pastry Chef"}</p>
                </div>

                {data?.socialLinks.length ? (
                    <div className="contact-section">
                        {data?.socialLinks.map((data, index) => (
                            <a
                                key={index}
                                href={`${data?.link}`}
                                target="_blank"
                                className={data?.name === "phone" || data?.name === "telephone" ? `w-50 single-contact` : `w-100 single-contact`}>
                                <InlineIcon icon={social[data?.name]} />
                                <span>{data.link}</span>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div></div>
                )}

                <div className="contact-inner">
                    <div className={`w-100 single-contact`}>
                        <InlineIcon icon={"akar-icons:location"} />
                        <p>{data?.personalInfo?.address || "Gtandisilio Hotel, Califonia, CA- 36102 - USA"}</p>
                    </div>

                    <button
                        style={{
                            background: `${data?.colors?.button?.bg}`,
                            color: `${data?.colors?.button?.color}`,
                            boxShadow: `0 0 5px ${data?.colors?.button?.shadow}`,
                        }}
                        onClick={addToContact}
                        className="add-contact-button">
                        {"ADD TO CONTACT"}
                    </button>
                </div>
            </div>
        </div>
    );
}
