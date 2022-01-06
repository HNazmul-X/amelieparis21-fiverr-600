import React from "react";
import banner from "../../../assets/images/Cover Image1.png";
import profilePic from "../../../assets/images/Profile Picture3.png";
import { InlineIcon } from "@iconify/react";

function ProfileTemplate3() {
  return (
    <div className="profile-template-3">
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      <div className="besic-info">
        <div className="profile-pic-container">
          <div className="wrapper">
            <img className="profile-pic" src={profilePic} alt="profile" />
            <div className="share">
              <InlineIcon className="share_icon" icon="bx:bxs-share-alt" />
            </div>
          </div>
        </div>
        <div className="info">
          <div className="name-section">
            <div>
              <h3>Sandhya Mer</h3>
              <p>Florida Branch</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <a href="#">
            <InlineIcon
              className={`right-arrow `}
              icon="fluent:call-24-filled"
            />
            <p>Call Me</p>
          </a>
          <a href="#">
            <InlineIcon className={`right-arrow `} icon="bx:bxl-whatsapp" />
            <p>Whatsapp</p>
          </a>
          <a href="#">
            <InlineIcon
              className={`right-arrow `}
              icon="ep:location-information"
            />
            <p>Location</p>
          </a>
          <a href="#">
            <InlineIcon
              className={`right-arrow `}
              icon="ep:location-information"
            />
            <p>Email</p>
          </a>
          <a href="#">
            <InlineIcon className={`right-arrow `} icon="bx:bxl-facebook" />
            <p>Facebook</p>
          </a>
          <a href="#">
            <InlineIcon
              className={`right-arrow `}
              icon="ant-design:twitter-outlined"
            />

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
        <div className="add-contact-btn">
          <button>ADD TO CONTACT</button>
        </div>
        <div className="about">
          <h3>About Skoda</h3>
          <p>
            Škoda Auto a.s., often shortened to Škoda, is a Czech automobile
            manufacturer founded in 1895
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileTemplate3;
