import React from "react";
import img from "../../../../assets/images/Pattern.png";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function GetInTouch() {
  return (
    <section className="get-in-touch-section">
        <div className="parten-bg">
            <img src={img} alt="" />
        </div>
      <article className="container">
        <div className="row w-100 mx-auto">
          <LeftSide />
          <RightSide />
        </div>
      </article>
    </section>
  );
}

export default GetInTouch;
