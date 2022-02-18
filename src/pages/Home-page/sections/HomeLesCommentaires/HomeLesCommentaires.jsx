import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { motion } from "framer-motion";
import face1 from "../../../../assets/images/tim.png";
import face2 from "../../../../assets/images/dowimg1.png";
import face3 from "../../../../assets/images/pinu.png";
import ReviewCard from './ReviewCard';


function HomeLesCommentaires() {
  return (
	<motion.div
	initial={{ x: "100%" }}
	whileInView={{ x: 0 }}
	transition={{ duration: 0.1 }}
	className="flex flex-col items-center w-full px-14 py-14 space-y-14 bg-oneCard-white"
>
	<h3 className="text-2xl font-bold sm:text-3xl md:text-4xl text-oneCard-darkBlue">
		Les commentaires de nos clients
	</h3>
	<Swiper
		spaceBetween={30}
		autoplay={{
			delay: 2500,
			disableOnInteraction: false,
		}}
		breakpoints={{
			340: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}}
		pagination={{
			clickable: true,
		}}
		modules={[Autoplay, Navigation]}
		className="grid w-full grid-cols-3"
	>
		<SwiperSlide className="">
			<ReviewCard
				name="Tim"
				review={5}
				desc="One card pro m'aide a étendre mon réseau professionnel. Cette carte numérique m'aide également à éliminer le gaspillage et à devoir commander des cartes en papier qui se perdent."
				img={face1}
			/>
		</SwiperSlide>
		<SwiperSlide className="">
			<ReviewCard
				name="Damien"
				review={4}
				desc="One card pro m'a permis d'avoir une carte qui se transmet facilement en un seul clic."
				img={face2}
			/>
		</SwiperSlide>
		<SwiperSlide className="">
			<ReviewCard
				name="Benjamin"
				review={4}
				desc="Cette carte est révolutionnaire merci merci je peux modifier et mettre à jour les informations gratuitement."
				img={face3}
			/>
		</SwiperSlide>
		<SwiperSlide className="">
			<ReviewCard
				name="Tim"
				review={5}
				desc="One card pro m'aide a étendre mon réseau professionnel. Cette carte numérique m'aide également à éliminer le gaspillage et à devoir commander des cartes en papier qui se perdent."
				img={face1}
			/>
		</SwiperSlide>
		<SwiperSlide className="">
			<ReviewCard
				name="Damien"
				review={4}
				desc="One card pro m'a permis d'avoir une carte qui se transmet facilement en un seul clic."
				img={face2}
			/>
		</SwiperSlide>
		<SwiperSlide className="">
			<ReviewCard
				name="Benjamin"
				review={4}
				desc="Cette carte est révolutionnaire merci merci je peux modifier et mettre à jour les informations gratuitement. "
				img={face3}
			/>
		</SwiperSlide>
	</Swiper>
</motion.div>
  );
}

export default HomeLesCommentaires;
