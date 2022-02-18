import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSliderData } from "../../../../data/HeroSliderData";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCard from './SwiperCard';


function RejoignezSlider() {
  return (
    <motion.div
			initial={{ scale: 0.6 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col items-center w-full px-10 space-y-8 py-14 bg-oneCard-white"
		>
			<h3 className="text-2xl sm:text-3xl font-bold text-oneCard-darkBlue text-center">
				Rejoignez la communauté One Card pro
			</h3>
			<SwiperCard />
		</motion.div>
  );
}

export default RejoignezSlider;
