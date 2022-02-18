import React from 'react'
import card from "../../../../assets/images/onecardprocard.6dceb05db30b5e84ab04.png";
import mockup from "../../../../assets/images/screen3.e542a0c34fc481c49be4.png";
import mockup2 from "../../../../assets/images/mockup.8745e8f731ebddfac7f1.png";
import { motion } from "framer-motion";

function HomeHowItWorks() {
  return (
    <div className="flex flex-col items-center w-full px-14 py-14 space-y-14 bg-oneCard-lightGray">
			<h3 className="text-2xl font-bold sm:text-3xl md:text-4xl text-oneCard-darkBlue">
				Comment ça marche
			</h3>
			<div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
				<div className="flex space-x-6 sm:justify-center">
					<div className="flex items-center self-start justify-center text-2xl font-semibold bg-oneCard-darkBlue text-oneCard-lightGray rounded-2xl w-14 h-14">
						<h3>1</h3>
					</div>
					<div className="flex flex-col space-y-4">
						<h2 className="self-start text-lg font-medium text-oneCard-darkBlue">
							Commander votre carte
						</h2>
						<motion.img
							initial={{ scale: 0.6 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.3 }}
							src={card}
							alt="one card pro"
							className="self-center w-52"
						/>
					</div>
				</div>
				<div className="flex space-x-6 sm:justify-center">
					<div className="flex items-center self-start justify-center text-2xl font-semibold bg-oneCard-darkBlue text-oneCard-lightGray rounded-2xl w-14 h-14">
						<h3>2</h3>
					</div>
					<div className="flex flex-col self-center space-y-4">
						<h2 className="self-start text-lg font-medium text-oneCard-darkBlue">
							Choisir le design votre <br /> carte digitale et enregistrer{" "}
							<br />
							vos informations.
						</h2>
						<motion.img
							initial={{ scale: 0.6 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.3 }}
							src={mockup}
							alt="one card pro"
							className="self-center object-contain w-32 h-60"
						/>
					</div>
				</div>
				<div className="flex space-x-6 sm:justify-center">
					<div className="flex items-center self-start justify-center text-2xl font-semibold bg-oneCard-darkBlue text-oneCard-lightGray rounded-2xl w-14 h-14">
						<h3>3</h3>
					</div>
					<div className="flex flex-col space-y-4">
						<h2 className="self-start text-lg font-medium text-oneCard-darkBlue">
							Partagez votre carte.
						</h2>
						<motion.img
							initial={{ scale: 0.6 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.3 }}
							src={mockup2}
							alt="one card pro"
							className="self-center object-contain w-60 h-60"
						/>
					</div>
				</div>
			</div>
		</div>
  )
}

export default HomeHowItWorks