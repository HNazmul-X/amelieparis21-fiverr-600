import React from "react";
import { motion } from "framer-motion";
function HomeVideoExplainer() {
  return (
    <div className="flex flex-col w-full px-14 py-14 items-center justify-center space-y-8 bg-oneCard-lightGray">
			<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-oneCard-darkBlue">
				Vidéo explicative
			</h3>
			<motion.div
				initial={{ scale: 0.6 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.3 }}
				className="w-full relative h-52 md:h-80"
			>
				<iframe
					src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
					frameBorder="0"
					title="one card pro"
					className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden"
					allow="fullscreen; picture-in-picture"
					allowFullScreen
				></iframe>
			</motion.div>
		</div>
  );
}

export default HomeVideoExplainer;
