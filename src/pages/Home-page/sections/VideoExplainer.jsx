import React, {useEffect} from "react";
import img1 from "../../../assets/images/groun09.png";
function VideoExplainer() {

//     useEffect(() => {
//    const ifream = document.querySelector("myframe").contentWindow.window.document
//       // const ifream = document.getElementById('myframe').contentWindow.document.getElementById("player")
//     //   ifream?.style.display="none"
//         console.log(ifream);
//         console.log(document.getElementById('myframe').contentWindow.document);
//     }, [])

  return (
    <section className="video-explainer-section">
      <article className="container">
        <div className="top-icon-wrapper">
        <div className="top-icon-area">
          <img src={img1} alt="" />
        </div>
        </div>
        <h1>This is video explainer</h1>
        <div className="video-frame">
          <iframe
          id="myframe"
            src="https://www.youtube.com/embed/N1gY4oK3cTM"
            className="responsive-iframe"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    </section>
  );
}

export default VideoExplainer;
