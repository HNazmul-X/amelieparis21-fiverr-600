import React from "react";
import banner from "../../../assets/images/Cover Image1.png";
import profilePic from "../../../assets/images/Profile Picture3.png";
import { InlineIcon } from "@iconify/react";
import { useProfileContext } from "../../../Context/ProfileTemplateContext";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-akar-icons/twitter-fill";
import facebookFill from "@iconify/icons-akar-icons/facebook-fill";
import instagramFill from "@iconify/icons-akar-icons/instagram-fill";
import linkedinIcon from "@iconify/icons-brandico/linkedin";
import bxlTiktok from "@iconify/icons-bx/bxl-tiktok";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import worldLine from "@iconify/icons-clarity/world-line";
import bxsPhone from "@iconify/icons-bx/bxs-phone";
import telephoneIcon from "@iconify/icons-bytesize/telephone";
import emailLine from "@iconify/icons-clarity/email-line";
import whatsappIcon from "@iconify/icons-dashicons/whatsapp";
import youtubeFilled from "@iconify/icons-ant-design/youtube-filled";
import microsoftIcon from "@iconify/icons-cib/microsoft";
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
import locationCurrent from "@iconify/icons-carbon/location-current";
import pinterestFill from "@iconify/icons-akar-icons/pinterest-fill";

function ProfileTemplate3() {
    const { userInfo, userPics, buttonInfo, iconAndTextColor } = useProfileContext();

    const social = {
        facebook: facebookFill,
        twitter: twitterFill,
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
        website: worldLine,
        github: githubFill,
        tiktok: bxlTiktok,
        instagram: instagramFill,
        linkedin: linkedinIcon,
        phone: bxsPhone,
        telephone: telephoneIcon,
        email: emailLine,
        location: locationCurrent,
        pinterest: pinterestFill,
    };

    return (
        <div
            className="profile-template-3"
            style={{
                "--red-700": iconAndTextColor?.icon,
                "--text": iconAndTextColor?.text,
            }}>
            <div className="banner">
                <img src={userPics?.cover?.dataURL || banner} alt="Banner" />
            </div>
            <div className="besic-info">
                <div className="profile-pic-container">
                    <div className="wrapper">
                        <img className="profile-pic dashboard" src={userPics?.profile?.dataURL || profilePic} alt="profile" />
                        <div className="share dashboard">
                            <InlineIcon className="share_icon" icon="bx:bxs-share-alt" />
                        </div>
                    </div>
                </div>
                <div className="info dashboard">
                    <div className="name-section">
                        <div>
                            <h3>{userInfo?.name || "Sandhya Mer"}</h3>
                            <p>{userInfo?.tagline || "Florida Branch"}</p>
                        </div>
                    </div>
                </div>

                {userInfo?.links?.length ? (
                    <div className="contact">
                        {userInfo?.links.map((data) => (
                            <a key={data?._id} href={`${data?.name === "phone" ? "tel:" : data?.name === "email" ? "mailto:" : data?.name === "tel+" ? "tel+" : ""}${data?.link}`} target="_blank">
                                <Icon icon={social[data?.name]} />
                                <p>{data?.name}</p>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="contact">
                        <a href="#">
                            <InlineIcon className={`right-arrow `} icon="fluent:call-24-filled" />
                            <p>Call Me</p>
                        </a>
                        <a href="#">
                            <InlineIcon className={`right-arrow `} icon="bx:bxl-whatsapp" />
                            <p>Whatsapp</p>
                        </a>
                        <a href="#">
                            <InlineIcon className={`right-arrow `} icon="ep:location-information" />
                            <p>Location</p>
                        </a>
                        <a href="#">
                            <InlineIcon className={`right-arrow `} icon="ep:location-information" />
                            <p>Email</p>
                        </a>
                        <a href="#">
                            <InlineIcon className={`right-arrow `} icon="bx:bxl-facebook" />
                            <p>Facebook</p>
                        </a>
                        <a href="#">
                            <InlineIcon className={`right-arrow `} icon="ant-design:twitter-outlined" />

                            <p>Twitter</p>
                        </a>
                        <a href="#">
                            <InlineIcon className={`right-arrow `} icon="ci:instagram" />
                            <p>Instagram</p>
                        </a>
                        <a href="#">
                            <InlineIcon className={`right-arrow `} icon="bx:bxl-linkedin" />
                            <p>Linkedin</p>
                        </a>
                    </div>
                )}

                <div className="add-contact-btn">
                    <button
                        style={{
                            background: `${buttonInfo?.colors?.bg}`,
                            color: `${buttonInfo?.colors?.color}`,
                            boxShadow: `0 0 5px ${buttonInfo?.colors?.shadow}`,
                        }}>
                        {buttonInfo?.info?.text || "ADD TO CONTACT"}
                    </button>
                </div>
                <div className="about">
                    <h3>About {userInfo?.name || "Skoda"}</h3>
                    <p>{userInfo?.address || "Škoda Auto a.s., often shortened to Škoda, is a Czech automobile manufacturer founded in 1895"}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileTemplate3;
