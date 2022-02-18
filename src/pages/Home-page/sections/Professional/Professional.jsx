import React from 'react'
import { motion } from "framer-motion";
import profetionalImage from "../../../../assets/images/professional.1a5394a9c541aeacb807.jpg"

function Professional() {
  return (
    <motion.div className="flex flex-col lg:flex-row-reverse w-full px-14 py-14 items-center justify-center space-y-6 lg:space-y-0 lg:space-x-reverse lg:space-x-16  bg-oneCard-lightGray">
			<motion.img
				initial={{ scale: 0.6 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.5 }}
				src={profetionalImage}
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
						Le moyen professionnel pour établir de nouvelles relations
					</h3>
					<h5 className="text-base sm:text-lg md:text-xl font-normal text-oneCard-darkBlue flex flex-col space-y-3">
						One card pro c'est une solution pour diffuser votre carte de visite,
						vos services et vos produits en un seul clic , transmissible à
						l'infini par vos contacts. Compatible avec tous les smartphones
						modernes, Apple et Android.
					</h5>
				</div>
			</motion.div>
		</motion.div>
  )
}

export default Professional