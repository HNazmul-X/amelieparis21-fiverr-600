import React from "react";
import banner from "../../../assets/images/profile_2_cover.png";
import profilePic from "../../../assets/images/Profile Picture.png";
import { InlineIcon } from "@iconify/react";

export default function ProfileTemplate2() {
  // const datas = [
  //   {
  //     icon: "fontisto:mobile-alt",
  //     text: "012345678",
  //     name: "mobile",
  //   },
  //   {
  //     icon: "entypo:old-phone",
  //     text: "+1 90333 22222",
  //     name: "telephone",
  //   },
  //   {
  //     icon: "clarity:email-solid",
  //     text: "peter@pastrychef.com",
  //     name: "email",
  //   },
  //   {
  //     icon: "mdi:monitor-shimmer",
  //     text: "www.pastrychef.com",
  //     name: "website",
  //   },
  //   {
  //     icon: "akar-icons:location",
  //     text: "Gtandisilio Hotel, Califonia, CA- 36102 - USA",
  //     name: "location",
  //   },
  // ];

  return (
    <div className="profile-2-conatiner">
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      <div className="content">
        <div className="profile_pic_area">
          <div className="profile_pic">
            <img src={profilePic} alt="Profile pic" />
          </div>
          <div className="shear_icon_wrapper">
            <InlineIcon className="share_icon" icon="bx:bxs-share-alt" />
          </div>
        </div>
        <div className="besic-info">
          <h3>Peter Michael</h3>
          <p>Professional Pastry Chef</p>
        </div>
        <div className="contact-section">
          {/* {datas.map((data, index) => (
            <div
              className={`${
                data.name === "telephone" || data.name === "mobile"
                  ? "w-50"
                  : ""
              } single-contact`}
              key={index}
            >
              <InlineIcon icon={data.icon} />
              <p>{data.text}</p>
            </div>
          ))} */}
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
          <a
            target="_blank"
            href="https://www.pastrychef.com"
            className={`w-100 single-contact`}
          >
            <InlineIcon icon={"mdi:monitor-shimmer"} />
            <p>www.pastrychef.com</p>
          </a>
          <div className={`w-100 single-contact`}>
            <InlineIcon icon={"akar-icons:location"} />
            <p>Gtandisilio Hotel, Califonia, CA- 36102 - USA</p>
          </div>

          <button className="add-contact-button">ADD TO CONTACT</button>
        </div>
      </div>
    </div>
  );
}
