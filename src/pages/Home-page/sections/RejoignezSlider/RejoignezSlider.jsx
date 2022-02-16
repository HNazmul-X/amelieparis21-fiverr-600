import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSliderData } from "../../../../data/HeroSliderData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function RejoignezSlider() {
  return (
    <section className="rejoigne-slider">
      <article className="container">
        <h3>Rejoignez la communauté One Card pro</h3>
        <div className="my-slider-wrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay: 1500,
              }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {HeroSliderData.map((data, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={data.img} alt="slider" className="slider-img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </section>
  );
}

export default RejoignezSlider;
