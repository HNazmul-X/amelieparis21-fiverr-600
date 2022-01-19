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
import { apiBaseURL } from "./../../../Util/API_Info";

function ProfileTemplate1({data}) {
  const baseurl = apiBaseURL;

 /*  const data = {
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
  }; */

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
  };

  return (
    <div className="profile-template-1 w-100 " style={{ "--icon-text": data?.colors?.icon, "--text": data?.colors?.text }}>
      <div className="banner">
        {/* <img src={baseurl + data?.photos.cover} alt="Banner" /> */}
        <img src={banner} alt="Banner" />
      </div>
      <div className="besic-info">
        {/* <img
          className="profile-pic bg-light"
          src={baseurl + data?.photos?.profile || profilePic}
          alt="profile"
        /> */}
        <img className="profile-pic bg-light" src={profilePic} alt="profile" />
        <div className="info">
          <div className="name-section">
            <div>
              <h3>{data?.personalInfo?.name || "Your Name Here"}</h3>
              <p>{data?.personalInfo?.tagline || "Your Tagline Here"}</p>
            </div>
            <div className="share">
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
          style={{
            background: `${data?.colors?.button?.bg}`,
            color: `${data?.colors?.button?.color}`,
            boxShadow: `0 0 5px ${data?.colors?.button?.shadow}`,
          }}
          className="add-contact-btn"
        >
          {data?.mainButton?.text || "ADD TO CONTACT"}
        </button>
        <div className="social-container-1">
          {data?.socialLinks.map((el, index) => (
            <a
              key={index}
              href={`${
                el?.name === "phone"
                  ? "tel:"
                  : data?.name === "email"
                  ? "mailto:"
                  : ""
              }${el?.link}`}
              target="_blank"
              className="signle-social-link"
            >
              <div className="left">
                <img src={social[el?.name]} alt={""} />
                <div>
                  <h5>{el?.name}</h5>
                  <p className="mt-1">
                    {(data?.personalInfo?.name &&
                      data?.personalInfo?.name.split(" ")[1]) ||
                      "username"}
                  </p>
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
