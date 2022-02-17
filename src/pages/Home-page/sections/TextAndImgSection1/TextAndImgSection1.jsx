import React from "react";
import img from "../../../../assets/images/professional.1a5394a9c541aeacb807.jpg";
import { motion } from "framer-motion";

function TextAndImgSection1({ data }) {
  const { imgSrc, title, text, leftImg,backgroundColor } = data;
  return (
    <section className="text-img-section-1" style={{background:backgroundColor}}>
      <article className="container">
        <motion.div className="wrapper" >
          <motion.div className={`content-area ${leftImg ? "order-1" : ""}`} initial={{ scale: 0.6 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.5 }}>
            <h3>{title}</h3>
            {text}
          </motion.div>
          <div className="img-area">
            <motion.img src={imgSrc} alt={title} initial={{ scale: 0.6 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.5 }} />
          </div>
        </motion.div>
      </article>
    </section>
  );
}

export default TextAndImgSection1;
