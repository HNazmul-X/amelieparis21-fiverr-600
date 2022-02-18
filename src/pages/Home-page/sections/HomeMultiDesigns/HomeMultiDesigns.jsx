import React from "react";
import slide1 from "../../../../assets/images/screen1.4bbe20625557a4bc9794.png";
import slide2 from "../../../../assets/images/screen2.51f15bf080c960fa554b.png";
import slide3 from "../../../../assets/images/slide3.png";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

function HomeMultiDesigns() {
  return (
    <motion.div
    initial={{ scale: 0.8 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col w-full px-14 py-14 space-y-14 items-center bg-oneCard-lightGray"
  >
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-oneCard-darkBlue">
      Multi Designs
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
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation]}
      className="w-11/12 grid grid-cols-3"
    >
      <SwiperSlide className="flex items-center justify-center">
        <img src={slide1} alt="one card pro" className="w-7/12" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <img src={slide2} alt="one card pro" className="w-7/12" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <img src={slide3} alt="one card pro" className="w-7/12" />
      </SwiperSlide>
    </Swiper>
  </motion.div>
  );
}

export default HomeMultiDesigns;
