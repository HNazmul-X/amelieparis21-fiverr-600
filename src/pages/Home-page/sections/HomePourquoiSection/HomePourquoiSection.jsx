import React from "react";
import image from "../../../../assets/images/mockup3.b09400da400870efed97 (1).png";
import { HomePourquoiSectionData } from './../../../../data/HomePourquoiSectionData';
import { motion } from "framer-motion";
function HomePourquoiSection() {
  return (
    <section className="HomePourquoiSection">
      <article className="conatiner">
        <div className="wrapper">
          <div className="img_wrapper">
            <motion.img src={image} alt="Image" initial={{ scale: 0.7 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.3 }} />
          </div>

          <motion.div className="text-area" initial={{ x: "100%" }}
				whileInView={{ x: 1 }}
				transition={{ duration: 0.3 }}>
           
              <div >
                <h3>{HomePourquoiSectionData.title}</h3>
                <div className="single-list-wrapper">
                  {HomePourquoiSectionData.content.map((el, index) => (
                    <div key={index} className="single-list">
                      <div className={`icon-area ${el.defaultClass}`}>
                        <img src={el.icon} alt={el.title} />
                      </div>
                      <div className="single-text-area">
                        <h5>{el.title}</h5>
                        {el.text && <p>{el.text}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          
          </motion.div>
        </div>
      </article>
    </section>
  );
}

export default HomePourquoiSection;
