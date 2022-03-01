import React from "react";
import image from "../../../../assets/images/Mockup2.fcc4cb4cf533f266d129.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const btnVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
  },
};

function HomeBanner() {
  const navigate = useNavigate();
  return (
    <>
      {/* <section className="home_banner">
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
    </section> */}
      <div className="w-full bg-oneCard-lightGray relative" id="heroSection">
        <div className="w-full h-full heroSection">
          <div className="flex flex-col items-center justify-between px-8 pt-8 sm:px-16">
            <div className="flex flex-col items-center justify-center mt-12 space-y-6">
              <motion.h1
                className="text-4xl font-black md:text-5xl lg:text-7xl text-oneCard-darkBlue"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 }}
              >
                One Card Pro
              </motion.h1>
              <motion.p
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-light text-center text-oneCard-lightBlue lg:text-xl md:text-base"
              >
                Votre carte de visite unique. Créez votre carte et transmettez
                votre profil en un seul geste 100 % interactive !
              </motion.p>
              <motion.button
                variants={btnVariants}
                initial={{ scale: 0.3 }}
                animate={{ scale: 1 }}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                className="flex items-center px-7 py-4 space-x-3 text-sm font-medium bg-oneCard-darkBlue rounded-full cursor-pointer shadow-lg  focus:outline-none text-oneCard-lightGray md:text-base z-10"
                onClick={() => navigate("/create-card")}
              >
                <span>Créez votre Carte</span>
              </motion.button>
            </div>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="flex flex-col items-center md:-mt-20"
            >
              <img
                src={image}
                alt="one card pro"
                className="w-5/6 md:w-4/5 justify-self-end"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
