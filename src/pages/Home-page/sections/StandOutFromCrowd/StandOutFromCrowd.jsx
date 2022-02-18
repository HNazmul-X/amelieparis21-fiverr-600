import React from "react";
import standoutfromcrowd from "../../../../assets/images/standoutfromcrowd.1cb47dcaade0dac7736d.png";
import { motion } from "framer-motion";

function StandOutFromCrowd() {
  return (
    <div className="flex flex-col lg:flex-row w-full px-14 py-14 items-center justify-center space-y-6 lg:space-y-0 lg:space-x-16 bg-oneCard-white">
			<motion.img
				initial={{ scale: 0.6 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.3 }}
				src={standoutfromcrowd}
				alt="one card pro"
				className="md:w-4/5 lg:w-2/5"
			/>
			<motion.div
				initial={{ x: "100%" }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.3 }}
				className="flex flex-col lg:w-2/5 space-y-4"
			>
				<div className="flex flex-col text-oneCard-darkBlue space-y-6">
					<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-oneCard-darkBlue">
						SE DISTINGUER DES AUTRES
					</h3>
					<h5 className="text-base sm:text-lg md:text-xl font-normal text-oneCard-darkBlue flex flex-col space-y-3">
						Tout est transmis d'un simple contact. Faites de chaque rendez-vous
						une impression mémorable.
					</h5>
				</div>
			</motion.div>
		</div>
  )
}

export default StandOutFromCrowd