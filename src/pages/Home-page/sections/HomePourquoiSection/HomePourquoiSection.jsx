import React from "react";
import image from "../../../../assets/images/mockup3.b09400da400870efed97 (1).png";
import { motion } from "framer-motion";
import pencilIcon from "../../../../assets/images/personalize.d9a1fd4ceece73f8ca7b (1).png";
import wirelaseIcon from "../../../../assets/images/wireless.ea231e98f185e874affe6d09688c9640 (1).svg";
import pathIcon from "../../../../assets/images/infinite.6e794310bd63e994d8e74ab52aeb8177.svg";
import specakIcon from "../../../../assets/images/speaker.d9119ff686478f695c84e3b1faccfce9.svg";
import ecoIcon from "../../../../assets/images/Eco.f5cfaf56acbf48374227.png";
import peopleIcon from "../../../../assets/images/people.svg"

function HomePourquoiSection() {
  return (
    <>
      <div className="flex flex-col-reverse space-y-reverse space-y-10 md:flex-row items-center w-full px-10 md:space-x-20 lg:space-x-40 pt-14 lg:pb-4 md:pb-14 pb-16">
        <motion.img
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt="one card pro"
          className="w-[80%] sm:w-2/3 md:w-[45%]"
        />
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col space-y-8"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-oneCard-darkBlue">
            Pourquoi One Card pro?
          </h3>
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-3 bg-oneCard-green bg-opacity-10 rounded-2xl sm:rounded-3xl">
                <img src={pathIcon} alt="one card pro" />
              </div>
              <h5 className="text-base sm:text-lg md:text-xl font-bold text-oneCard-darkBlue">
                Partagez sans limite
              </h5>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-3 bg-oneCard-yellow bg-opacity-10 rounded-2xl sm:rounded-3xl text-oneCard-yellow text-2xl space-y-4">
                <img src={pencilIcon} alt="one card pro" />
              </div>
              <div className="text-oneCard-darkBlue flex flex-col text-base sm:text-lg md:text-xl font-bold">
                <h2 className="font-bold">Personnalisable</h2>
                <h2 className="font-normal">
                  modifiez vous informations à tout moment
                </h2>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-3 bg-oneCard-blue bg-opacity-10 rounded-2xl sm:rounded-3xl">
                <img src={wirelaseIcon} alt="one card pro" />
              </div>
              <h5 className="text-base sm:text-lg md:text-xl font-bold text-oneCard-darkBlue">
                Technologie sans contact
              </h5>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-3 bg-oneCard-yellow bg-opacity-10 rounded-2xl sm:rounded-3xl">
                <img src={specakIcon} alt="one card pro" />
              </div>
              <h5 className="text-base sm:text-lg md:text-xl font-bold text-oneCard-darkBlue">
                Marketting viral efficace
              </h5>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-3 bg-oneCard-blue bg-opacity-10 rounded-2xl sm:rounded-3xl text-oneCard-blue text-2xl space-y-4">
                <img src={peopleIcon} alt="one card pro" className="w-full" />
              </div>
              <div className="text-base sm:text-lg md:text-xl text-oneCard-darkBlue flex flex-col">
                <h2 className="font-bold">Sauvegardez directement</h2>
                <h2>dans les contacts du téléphone</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-3 bg-oneCard-green bg-opacity-10 rounded-2xl sm:rounded-3xl text-oneCard-blue text-2xl space-y-4">
                <img src={ecoIcon} alt="one card pro" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl text-oneCard-darkBlue font-bold">
                Éco responsable et Durable
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default HomePourquoiSection;
