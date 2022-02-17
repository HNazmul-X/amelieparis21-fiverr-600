import React from "react";
import image from "../../../../assets/images/Mockup2.fcc4cb4cf533f266d129.png"
import { motion } from "framer-motion";

const btnVariants = {
	hover: {
		scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
	},
};

function HomeBanner() {
  return (
    <section className="home_banner">
      <article className="container">
        <div className="wrapper">
          <motion.h1 initial={{ y: -250 }}
							animate={{ y: 0 }}>One Card Pro</motion.h1>
          <motion.p 
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            One Card Pro Votre Carte de visite unique One Card pro Créez votre
            Carte Transmettez votre profil en un seul geste 100 % interactive !
          </motion.p>
          <div className="action-area">
              <motion.button className="btn"
              variants={btnVariants}
							initial={{ scale: 0.3 }}
							animate={{ scale: 1 }}
							whileHover="hover"
							whileTap={{ scale: 0.9 }}> 
              Créez votre Carte
              </motion.button>
          </div>
          <motion.div initial={{ scale: 0.5 }}
						animate={{ scale: 1 }} className="img-area"
          >
              <img src={image} className='img'/>
          </motion.div>
        </div>
      </article>
    </section>
  );
}

export default HomeBanner;
