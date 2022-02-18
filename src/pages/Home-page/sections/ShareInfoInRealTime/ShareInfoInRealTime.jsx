import React from 'react'
import shareImg from "../../../../assets/images/socialmedia.4c1e1569b9aff9371e19.jpg";
import { motion } from "framer-motion";

function ShareInfoInRealTime() {
  return (
    <div className="flex flex-col lg:flex-row w-full px-14 py-14 items-center justify-center space-y-6 lg:space-y-0 lg:space-x-16 bg-oneCard-white">
			<motion.img
				initial={{ scale: 0.6 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.5 }}
				src={shareImg}
				alt="one card pro"
				className="sm:w-[70%] md:w-2/6 rounded-2xl shadow-lg"
			/>
			<motion.div
				initial={{ scale: 0.6 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.5 }}
				className="flex flex-col lg:w-2/5 space-y-4"
			>
				<div className="flex flex-col text-oneCard-darkBlue space-y-6">
					<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-oneCard-darkBlue">
						Partagez vos informations en temps réel.
					</h3>
					<h5 className="text-base sm:text-lg md:text-xl font-normal text-oneCard-darkBlue flex flex-col space-y-3">
						<span>
							Le partage d'informations est instantané avec One Card Pro. Il
							suffit de toucher l'écran du terminal mobile pour établir la
							connexion.
						</span>
						<span>L'échange de données est fait automatiquement.</span>
					</h5>
				</div>
			</motion.div>
		</div>
  )
}

export default ShareInfoInRealTime