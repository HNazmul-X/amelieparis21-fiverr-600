import React from "react";
import img1 from "../../../../assets/images/manwithcard.418c8d5a39d60d8b153a.png";
import { motion } from "framer-motion";

function TextAndImgSection2() {
  return (
    <section className="TextAndImgSection2">
      <article className="container">
        <motion.div className="wrapper">
          <div className="img-section">
            <motion.img src={img1} alt="" initial={{ scale: 0.9 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.3 }}/>
          </div>
          <motion.div className="content-area" initial={{ x: "100%" }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.3 }}>
            <div className="single-content">
              <h4>TOUJOURS AVEC VOUS</h4>
              <p>
                Vous n'aurez plus peur d'oublier vos cartes de visites, one card
                pro est toujours prêt à l'emploi.
              </p>
            </div>
            <div className="single-content">
              <h4>ÉCONOMISEZ DE L'ARGENT</h4>
              <p>
                Arrêtez d'acheter des milliers de cartes de visite qui finissent
                à la poubelle.
              </p>
            </div>
            <div className="single-content">
              <h4>TOUJOURS AVEC VOUS</h4>
              <p>
                Échangez et enregistrez vos coordonnées en quelques secondes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}

export default TextAndImgSection2;
