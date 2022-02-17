import React from "react";
import img2 from "../../../../assets/images/supportagent.c22613de369dc0f2f460b144551b5b7c.svg";
import img1 from "../../../../assets/images/deliverbox.ed4417f8b3a77cdeb719bf870ed80cd8 (1).svg"
import img3 from "../../../../assets/images/payment.b0e9a4ca11c2fa5e20aee26c3aee628e.svg"
import { motion } from "framer-motion";

function HomeLivraisonPartout() {
  const datas = [
    {
      imgSrc: img1,
      text: (
        <h5>
          Livraison partout
          <br />
          au maroc
        </h5>
      ),
      defaultClass: "yellow",
    },
    {
      imgSrc: img2,
      text: (
        <h5>
          Livraison partout
          <br />
          au maroc
        </h5>
      ),
      defaultClass: "beguni",
    },
    {
      imgSrc: img3,
      text: (
        <h5>
          Livraison partout
          <br />
          au maroc
        </h5>
      ),
      defaultClass: "red",
    },
  ];
  return (
    <motion.section className="HomeLivraisonPartout" initial={{ scale: 0.6 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.3 }}>
      <article className="container">
        <div className="wrapper">
          {datas.map((data, index) => (
            <div key={index} className="single-item">
              <div className={`img-wrapper ${data.defaultClass}`}>
                <img src={data.imgSrc} alt="" />
              </div>
              <div className="text">{data.text}</div>
            </div>
          ))}
        </div>
      </article>
    </motion.section>
  );
}

export default HomeLivraisonPartout;
