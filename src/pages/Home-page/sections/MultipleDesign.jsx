import React from "react";
import icon from "../../../assets/images/icon3.png";
import profile1 from "../../../assets/images/Group_1282.png";
import profile2 from "../../../assets/images/Group_1281.png";
import profile3 from "../../../assets/images/Group_1280.png";
import { InlineIcon } from "@iconify/react";

function MultipleDesign() {
  return (
    <section className="multiple-design-section">
      <article className="container">
        <div className="top-icon-area">
          <img src={icon} alt="" />
        </div>
        <h3>Multiple Design</h3>
        <div className="image-area">
          <img src={profile1} alt="" />
          <img src={profile2} alt="" />
          <img src={profile3} alt="" />
        </div>
        <div className="icon-wrapper">
          <span className="icon">
            <InlineIcon icon="clarity:cursor-hand-click-line" />
          </span>
          <span className="icon">
            <InlineIcon icon="akar-icons:pencil" />
          </span>
          <span className="icon">
            <InlineIcon icon="clarity:cursor-hand-click-line" />
          </span>
        </div>
      </article>
    </section>
  );
}

export default MultipleDesign;
