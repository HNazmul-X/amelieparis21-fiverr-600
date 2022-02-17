import React from "react";
import img1 from "../../../../assets/images/onecardprocard.6dceb05db30b5e84ab04.png";
import { HomePageCommentData } from "./../../../../data/HomePageCommentData";
import { motion } from "framer-motion";
function HomePageComment() {
  return (
    <section className="home-comment">
      <article className="container">
        <div className="wrapper">
          <h3>Comment ça marche</h3>
          <div className="full-wrapper">
            {HomePageCommentData.map((data, index) => (
              <div key={index} className="single-option">
                <div className="number">
                  <h3>{index + 1}</h3>
                </div>
                <div className="content">
                  <h2>{data.text}</h2>
                  <motion.img src={data.imgSrc} alt={data.text} initial={{ scale: 0.6 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.3 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomePageComment;
