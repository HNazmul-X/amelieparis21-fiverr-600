import React, { useState } from "react";
import banner from "../../../assets/images/Cover Image1.png";
import profilePic from "../../../assets/images/Profile Picture (2).png";
import { InlineIcon } from "@iconify/react";
import linkdinIcon from "../../../assets/images/Linkedin.png";
import facebookIcon from "../../../assets/images/Facebook.png";
import callIcon from "../../../assets/images/icon.png";
import emailIcon from "../../../assets/images/icon (1).png";
import instagramIcon from "../../../assets/images/Instagram.png";

function ProfileTemplate1() {
  const workLists = ["Social Media", "MARKETING", "DESIGN", "GRAPHIC"];

  const socilaLink = [
    {
      title: "Instagram",
      des: "Sandhyamer",
      icon: instagramIcon,
      destination: "https://www.youtube.com/",
    },
    {
      title: "Facebook",
      des: "Sandhyamer",
      icon: facebookIcon,
      destination: "https://www.youtube.com/",
    },
    {
      title: "Linkedin",
      des: "Sandhyamer",
      icon: linkdinIcon,
      destination: "https://www.youtube.com/",
    },
    {
      title: "Phone",
      des: "Sandhyamer",
      icon: callIcon,
      destination: "https://www.youtube.com/",
    },
    {
      title: "E-mail",
      des: "Sandhyamer",
      icon: emailIcon,
      destination: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="profile-template-1">
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      {/* <div className='content'> */}
      <div className="besic-info">
        <img className="profile-pic" src={profilePic} alt="profile" />
        <div className="info">
          <div className="name-section">
            <div>
              <h3>Sandhya Mer</h3>
              <p>Peace | Love | Travel</p>
            </div>
            <div className="share">
              <InlineIcon className="share_icon" icon="bx:bxs-share-alt" />
            </div>
          </div>
          <div className="description">
            <p>
              Social Media Manager at VRTeam Design ASU | Media & Firm Junagadh,
              IN
            </p>
          </div>
          <div className="work-container">
            {workLists.map((el, index) => (
              <p key={index} className="single-work">
                {el}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-section">
        <button className="add-contact-btn">ADD TO CONTACT</button>
        <div className="social-container">
          {/* {socilaLink.map((el, index) => (
            <div
              className="signle-social-link"
              key={index}
              onClick={() => handelOpen(el.title)}
            >
              <div className="left">
                <img src={el.icon} alt={el.title} />
                <div>
                  <h5>{el.title}</h5>
                  <p>{el.des}</p>
                </div>
              </div>
              <InlineIcon
                className={`right-arrow ${
                  open?.includes(el.title) ? "active-arrow" : ""
                }`}
                icon="ep:arrow-right"
              />
            </div>
          ))} */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="signle-social-link"
          >
            <div className="left">
              <img src={instagramIcon} alt={"linkdinIcon"} />
              <div>
                <h5>Instagram</h5>
                <p>Sandhyamer</p>
              </div>
            </div>
            <InlineIcon className={`right-arrow `} icon="ep:arrow-right" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="signle-social-link"
          >
            <div className="left">
              <img src={facebookIcon} alt={"linkdinIcon"} />
              <div>
                <h5>Facebook</h5>
                <p>Sandhyamer</p>
              </div>
            </div>
            <InlineIcon className={`right-arrow `} icon="ep:arrow-right" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="signle-social-link"
          >
            <div className="left">
              <img src={linkdinIcon} alt={"linkdinIcon"} />
              <div>
                <h5>Linkedin</h5>
                <p>Sandhyamer</p>
              </div>
            </div>
            <InlineIcon className={`right-arrow `} icon="ep:arrow-right" />
          </a>
          <a href="tel:https://www.youtube.com" className="signle-social-link">
            <div className="left">
              <img src={callIcon} alt={"linkdinIcon"} />
              <div>
                <h5>Phone</h5>
                <p>Sandhyamer</p>
              </div>
            </div>
            <InlineIcon className={`right-arrow `} icon="ep:arrow-right" />
          </a>
          <a
            href="mailto:https://www.youtube.com"
            className="signle-social-link"
          >
            <div className="left">
              <img src={emailIcon} alt={"linkdinIcon"} />
              <div>
                <h5>E-mail</h5>
                <p>Sandhyamer</p>
              </div>
            </div>
            <InlineIcon className={`right-arrow `} icon="ep:arrow-right" />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ProfileTemplate1;
