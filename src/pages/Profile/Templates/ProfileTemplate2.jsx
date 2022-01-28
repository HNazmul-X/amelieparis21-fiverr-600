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
import { apiBaseURL } from "./../../../Util/API_Info";

export default function ProfileTemplate2() {
  const baseurl = apiBaseURL;

  const data = {
    photos: {
      cover:
        "/upload/profileTemplateImg/UploadcoverPic53f24c3b-542d-41a2-ac7e-f6233b4317f3Frameverification.png",
      profile:
        "/upload/profileTemplateImg/UploadprofilePic1306993b-2e19-4c52-a008-798408ff34c9photo_2022-01-07_03-34-13-removebg-preview.png",
    },
    personalInfo: {
      name: "H. Nazmul Hassan",
      tags: ["ddd", "ddd", "ddd", "ddd"],
      tagline: "H. Nazmul Hassan",
      about:
        "uploadedPics uploadedPics uploadedPics uploadedPics uploadedPics uploadedPics uploadedPics uploadedPics uploadedPics uploadedPics uploadedPics",
      address: "Richi, Habigonj Sadar, Sylhet",
      title: "",
    },
    mainButton: {
      text: "CONTACT ME",
      link: "https://web-hnazmul.web.app/",
    },
    colors: {
      button: {
        bg: "#ffa8a8",
        color: "#670909",
        shadow: "#160f3e",
      },
      icon: "",
      text: "",
    },
    _id: "61e3cd5a501c9e425d427955",
    user: "61e3c950501c9e425d427924",
    templateName: "profileTemplate2",
    socialLinks: [
      {
        name: "facebook",
        link: "https://www.facebook.com/tabaccum.muntaha/",
        _id: "a0597848-7fff-412a-a7f3-46568d4bf6ea",
      },
      {
        name: "whatsapp",
        link: "https://wa.me/01764595028",
        _id: "84ec2532-0334-4962-b09f-06b325470f50",
      },
    ],
    createdAt: "2022-01-16T07:46:34.564Z",
    updatedAt: "2022-01-16T08:35:22.029Z",
    __v: 0,
  };

  const social = {
    facebook: facebookFill,
    twitter: twitterFill,
    instagram: instagramFill,
    linkedIn: linkedinIcon,
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
    <div className="profile-2-conatiner w-100 ">
      <div className="banner">
        {/* <img src={baseurl + data?.photos.cover || banner} alt="Banner" /> */}
        <img src={banner} alt="Banner" />
      </div>
      <div className="content">
        <div className="profile_pic_area">
          {/* <img
            className="profile_pic"
            src={baseurl + data?.photos?.profile || profilePic}
            alt="Profile pic"
          /> */}
          <img
            className="profile-pic"
            src={profilePic}
            alt="profile"
          />
          <div className="shear_icon_wrapper">
            <InlineIcon className="share_icon" icon="bx:bxs-share-alt" />
          </div>
        </div>
        <div className="besic-info">
          <h3>{data.personalInfo?.name || "Peter Michael"}</h3>
          <p>{data.personalInfo?.tagline || "Professional Pastry Chef"}</p>
        </div>

        {
          data?.socialLinks.length ? (
            <div className="contact-section">
              {data?.socialLinks.map((data) => (
                <a
                  href={`${
                    data?.name === "phone"
                      ? "tel:"
                      : data?.name === "email"
                      ? "mailto:"
                      : data?.name === "telephone"
                      ? "tel+"
                      : ""
                  }${data?.link}`}
                  target="_blank"
                  className={
                    data.name === "phone" || data.name === "telephone"
                      ? `w-50 single-contact`
                      : `w-100 single-contact`
                  }
                >
                  <InlineIcon icon={social[data?.name]} />
                  <p>{data.name}</p>
                </a>
              ))}
            </div>
          ) : (
            <div></div>
          )
          //   <div className="contact-section">
          //     <a href="tel:012345678" className={`w-50 single-contact`}>
          //       <InlineIcon icon={"fontisto:mobile-alt"} />
          //       <p>012345678</p>
          //     </a>
          //     <a href="tel:+1 90333 22222" className={`w-50 single-contact`}>
          //       <InlineIcon icon={"entypo:old-phone"} />
          //       <p>+1 90333 22222</p>
          //     </a>
          //     <a href="mailto:name@email.com" className={`w-100 single-contact`}>
          //       <InlineIcon icon={"clarity:email-solid"} />
          //       <p>peter@pastrychef.com</p>
          //     </a>
          //     <a
          //       target="_blank"
          //       href="https://www.pastrychef.com"
          //       className={`w-100 single-contact`}
          //     >
          //       <InlineIcon icon={"mdi:monitor-shimmer"} />
          //       <p>www.pastrychef.com</p>
          //     </a>
          //   </div>
        }

        <div className="contact-inner">
          <div className={`w-100 single-contact`}>
            <InlineIcon icon={"akar-icons:location"} />
            <p>
              {data?.personalInfo?.address ||
                "Gtandisilio Hotel, Califonia, CA- 36102 - USA"}
            </p>
          </div>

          <button
            style={{
              background: `${data?.colors?.button?.bg}`,
              color: `${data?.colors?.button?.color}`,
              boxShadow: `0 0 5px ${data?.colors?.button?.shadow}`,
            }}
            className="add-contact-button"
          >
            {data?.mainButton?.text || "ADD TO CONTACT"}
          </button>
        </div>
      </div>
    </div>
  );
}
