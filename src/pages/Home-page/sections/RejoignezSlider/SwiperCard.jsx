import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { HeroSliderData } from './../../../../data/HeroSliderData';

const SwiperCard = () => {
	return (
		<Swiper
			loop={true}
			spaceBetween={30}
			autoplay={{
				delay: 1500,
				speed: 1000,
				disableOnInteraction: false,
			}}
			breakpoints={{
				340: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			}}
			pagination={{
				clickable: true,
			}}
			modules={[Autoplay, Navigation]}
			className="w-full"
		>
            {
                HeroSliderData.map((data, index) => <SwiperSlide className="w-h-36 h-36">
				<img src={data.img} alt="one card pro" className="w-full h-full" />
			</SwiperSlide>)
            }
			{/* <SwiperSlide className="w-h-36 h-36">
				<img src={card1} alt="one card pro" className="w-full h-full" />
			</SwiperSlide>
			<SwiperSlide className="w-h-36 h-36">
				<img src={card2} alt="one card pro" className="w-full h-full" />
			</SwiperSlide>
			<SwiperSlide className="w-h-36 h-36">
				<img src={card3} alt="one card pro" className="w-full h-full" />
			</SwiperSlide>
			<SwiperSlide className="w-h-36 h-36">
				<img src={card4} alt="one card pro" className="w-full h-full" />
			</SwiperSlide>
			<SwiperSlide className="w-h-36 h-36">
				<img src={card5} alt="one card pro" className="w-full h-full" />
			</SwiperSlide>
			<SwiperSlide className="w-h-36 h-36">
				<img src={card6} alt="one card pro" className="w-full h-full" />
			</SwiperSlide>
			<SwiperSlide className="w-h-36 h-36">
				<img src={card7} alt="one card pro" className="w-full h-full" />
			</SwiperSlide>
			<SwiperSlide className="w-h-36 h-36">
				<img src={card8} alt="one card pro" className="w-full h-full" />
			</SwiperSlide> */}
		</Swiper>
	);
};

export default SwiperCard;
