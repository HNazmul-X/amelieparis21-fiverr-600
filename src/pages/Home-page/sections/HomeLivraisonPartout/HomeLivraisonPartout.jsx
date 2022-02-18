import React from "react";
import img2 from "../../../../assets/images/supportagent.c22613de369dc0f2f460b144551b5b7c.svg";
import img1 from "../../../../assets/images/deliverbox.ed4417f8b3a77cdeb719bf870ed80cd8 (1).svg";
import img3 from "../../../../assets/images/payment.b0e9a4ca11c2fa5e20aee26c3aee628e.svg";
import { motion } from "framer-motion";

function HomeLivraisonPartout() {
  return (
    <motion.div
			initial={{ scale: 0.6 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.3 }}
			className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full px-14 py-14 items-center justify-center bg-oneCard-white gap-10"
		>
			<div className="flex flex-col items-center space-y-4">
				<div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-3 bg-oneCard-yellow bg-opacity-10 rounded-2xl sm:rounded-3xl">
					<img src={img1} alt="one card pro" />
				</div>
				<h5 className="text-base text-center sm:text-lg md:text-xl  text-oneCard-darkBlue">
					Livraison partout
					<br />
					au maroc
				</h5>
			</div>

			<div className="flex flex-col items-center space-y-4">
				<div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-4 bg-oneCard-blue bg-opacity-10 rounded-2xl sm:rounded-3xl text-oneCard-blue text-2xl space-y-4">
					<img src={img2} alt="one card pro" />
				</div>
				<div className="text-base sm:text-lg md:text-xl text-oneCard-darkBlue flex flex-col text-center">
					<h2 className="">
						Service clientèle
						<br />
						Disponible 7 jours/7
					</h2>
				</div>
			</div>
			<div className="flex flex-col items-center space-y-4">
				<div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-4 bg-oneCard-pink bg-opacity-10 rounded-2xl sm:rounded-3xl text-oneCard-blue text-2xl space-y-4">
					<img src={img3} alt="one card pro" />
				</div>
				<h3 className="text-base sm:text-lg text-center md:text-xl text-oneCard-darkBlue">
					Paiement sécurisé :<br />
					par carte où par virement bancaire
				</h3>
			</div>
		</motion.div>
  );
}

export default HomeLivraisonPartout;
