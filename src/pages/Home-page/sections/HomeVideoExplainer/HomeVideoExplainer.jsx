import React from "react";

function HomeVideoExplainer() {
  return (
    <section className="home-video-explainer">
      <article className="container">
        <h3>Vidéo explicative</h3>
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
            frameborder="0"
            title="one card pro"
            className="my-video-frame"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </article>
    </section>
  );
}

export default HomeVideoExplainer;
