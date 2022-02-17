import React from "react";
import { motion } from "framer-motion";
function HomeVideoExplainer() {
  return (
    <section className="home-video-explainer">
      <article className="container">
        <h3>Vidéo explicative</h3>
        <motion.div className="video-wrapper" initial={{ scale: 0.6 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.3 }}>
          <iframe
            src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
            frameborder="0"
            title="one card pro"
            className="my-video-frame"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </motion.div>
      </article>
    </section>
  );
}

export default HomeVideoExplainer;
