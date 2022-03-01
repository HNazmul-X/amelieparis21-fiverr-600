import React from "react";
import manwithcard from "../../../../assets/images/manwithcard.418c8d5a39d60d8b153a.png";
import { motion } from "framer-motion";

function ManWithCard() {
  return (
    <motion.div className="flex flex-col lg:flex-row w-full px-14 py-14 items-center justify-center space-y-6 lg:space-y-0 lg:space-x-16 bg-oneCard-white">
			<motion.img
				initial={{ scale: 0.9 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.3 }}
				src={manwithcard}
				alt="one card pro"
				className="md:w-4/5 lg:w-2/5 rounded-2xl shadow-lg"
			/>
			<motion.div
				initial={{ x: "100%" }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.3 }}
				className="flex flex-col lg:w-2/5 space-y-4"
			>
				<div className="flex flex-col text-oneCard-darkBlue space-y-2">
					<h4 className="text-xl font-bold">TOUJOURS AVEC VOUS
</h4>
					<h6 className="text-base sm:text-lg font-normal text-oneCard-darkBlue">
					Vous n'aurez plus peur d'oublier vos cartes de visites, One Card Pro est toujours prêt à l'emploi.

					</h6>
				</div>
				<div className="flex flex-col text-oneCard-darkBlue space-y-2">
					<h4 className="text-xl font-bold">ÉCONOMISEZ DE L'ARGENT</h4>
					<h6 className="text-base sm:text-lg font-normal text-oneCard-darkBlue">
					Arrêtez d'acheter des milliers de cartes de visite qui finissent à la poubelle.
					</h6>
				</div>
				<div className="flex flex-col text-oneCard-darkBlue space-y-2">
					<h4 className="text-xl font-bold">INTERACTIVITÉ </h4>
					<h6 className="text-base sm:text-lg font-normal text-oneCard-darkBlue">
					Échangez et enregistrez vos coordonnées en quelques secondes.
					</h6>
				</div>
			</motion.div>
		</motion.div>
  )
}

export default ManWithCard