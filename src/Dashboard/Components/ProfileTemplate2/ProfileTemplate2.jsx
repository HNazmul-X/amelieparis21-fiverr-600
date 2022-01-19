import React from "react";
import banner from "../../../assets/images/profile_2_cover.png";
import profilePic from "../../../assets/images/Profile Picture.png";
import { InlineIcon } from "@iconify/react";
import { useProfileContext } from "../../../Context/ProfileTemplateContext";
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

export default function ProfileTemplate2() {
    const { userInfo, userPics, buttonInfo, iconAndTextColor } = useProfileContext();
    console.log("info:", buttonInfo);

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
    };
    return (
        <div className="profile-2-conatiner" style={{ "--purple-600": iconAndTextColor?.icon,"--text":iconAndTextColor?.text }}>
            <div className="banner">
                <img src={userPics.cover.dataURL || banner} alt="Banner" />
            </div>
            <div className="content">
                <div className="profile_pic_area">
                    <img className="profile_pic" src={userPics.profile.dataURL || profilePic} alt="Profile pic" />
                    <div className="shear_icon_wrapper">
                        <InlineIcon className="share_icon" icon="bx:bxs-share-alt" />
                    </div>
                </div>
                <div className="besic-info">
                    <h3>{userInfo?.name || "Peter Michael"}</h3>
                    <p>{userInfo?.tagline || "Professional Pastry Chef"}</p>
                </div>

                {userInfo.links.length ? (
                    <div className="contact-section">
                        {userInfo.links.map((data) => (
                            <a
                                href={`${data?.name === "phone" ? "tel:" : data?.name === "email" ? "mailto:" : data?.name === "telephone" ? "tel+" : ""}${data?.link}`}
                                target="_blank"
                                className={data.name === "phone" || data.name === "telephone" ? `w-50 single-contact` : `w-100 single-contact`}>
                                <InlineIcon icon={social[data?.name]} />
                                <p>{data.link}</p>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="contact-section">
                        <a href="tel:012345678" className={`w-50 single-contact`}>
                            <InlineIcon icon={"fontisto:mobile-alt"} />
                            <p>012345678</p>
                        </a>
                        <a href="tel:+1 90333 22222" className={`w-50 single-contact`}>
                            <InlineIcon icon={"entypo:old-phone"} />
                            <p>+1 90333 22222</p>
                        </a>
                        <a href="mailto:name@email.com" className={`w-100 single-contact`}>
                            <InlineIcon icon={"clarity:email-solid"} />
                            <p>peter@pastrychef.com</p>
                        </a>
                        <a target="_blank" href="https://www.pastrychef.com" className={`w-100 single-contact`}>
                            <InlineIcon icon={"mdi:monitor-shimmer"} />
                            <p>www.pastrychef.com</p>
                        </a>
                    </div>
                )}

                <div className="contact-inner">
                    <div className={`w-100 single-contact`}>
                        <InlineIcon icon={"akar-icons:location"} />
                        <p>{userInfo.address || "Gtandisilio Hotel, Califonia, CA- 36102 - USA"}</p>
                    </div>

                    <button style={{ background: `${buttonInfo.colors.bg}`, color: `${buttonInfo.colors.color}`, boxShadow: `0 0 5px ${buttonInfo.colors.shadow}` }} className="add-contact-button">
                        {buttonInfo?.info?.text || "ADD TO CONTACT"}
                    </button>
                </div>
            </div>
        </div>
    );
}
