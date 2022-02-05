import React, { useEffect } from "react";
import img1 from "../../../assets/images/groun09.png";
import { InlineIcon } from "@iconify/react";

function VideoExplainer() {
 

  return (
    <section className="video-explainer-section">
      <article className="container">
        <div className="top-icon-wrapper">
          <div className="top-icon-area">
            <img src={img1} alt="" />
          </div>
        </div>
        <h3>Video Explainer</h3>
        {/* <div className="video-frame">
          <iframe
            id="myframe"
            src="https://www.youtube.com/embed/N1gY4oK3cTM"
            className="responsive-iframe"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div> */}
        <div className="video-wrapper">
          <div className="video-container">
            <div className="play-icon">
              <span className="icon">
                <InlineIcon icon="bi:play-fill" />
              </span>
            </div>
            {/* Vidoe tag here */}
          </div>
        </div>
      </article>
    </section>
  );
}

export default VideoExplainer;
