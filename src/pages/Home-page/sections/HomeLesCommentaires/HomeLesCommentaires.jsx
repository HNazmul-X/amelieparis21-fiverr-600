import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import ReviewCard from './ReviewCard';
import { HomeLesCommentairesData } from './../../../../data/HomeLesCommentairesData';
import { motion } from "framer-motion";


function HomeLesCommentaires() {
  return (
    <motion.section className="home-les-commentaires" initial={{ x: "100%" }}
	whileInView={{ x: 0 }}
	transition={{ duration: 0.1 }}>
      <article className="container">
        <h3>Les commentaires de nos clients</h3>
        <div className="my-slider-wrapper">
        <Swiper
				spaceBetween={30}
				autoplay={{
					delay: 100000,
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
				
				modules={[Autoplay]}
				className="grid w-full grid-cols-3"
			>
				{
                    HomeLesCommentairesData.map((data, index) => <SwiperSlide key={index} className="my-single-slider">                    
					<ReviewCard
					data={data}	
					/>
				</SwiperSlide> ) 
                }
				
			</Swiper>
        </div>
      </article>
    </motion.section>
  );
}

export default HomeLesCommentaires;
