import React, { useState } from "react";
import { HeroSliderData } from "../../../data/HeroSliderData";
import slideHeaderImage from "../../../assets/images/Group 1271.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);

const HeroSlider = () => {
  const [sliderData, setSliderData] = useState(HeroSliderData);
  return (
    <div className="hero-slider">
      <div className="slideHeaderIcon">
        <img
          className="slideHeaderIconImage"
          src={slideHeaderImage}
          alt="slideHeaderImage"
          width="162px"
          height="162px"
          object-fit="cover"
        />
        <h2>join the One Card pro community</h2>
      </div>
      <div id="customSwiper">
        <div className="hero-slider__container">
          <div className="swipe-slider">
            <div className="swipe-slide">
              <Swiper
                breakpoints={{
                  // when window width is <= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                  },
                  // when window width is <= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 150,
                  },

                  // when window width is <= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 140,
                  },

                  // when window width is <= 768px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                  },
                }}
                slidesPerView={3}
                spaceBetween={100}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                {sliderData.map((slider, index) => (
                  <SwiperSlide key={index}>
                    {({ isNext }) => (
                      <div className={`${isNext && "active-slide"} slide-item`}>
                        <div className="slide-item__image">
                          <img src={slider.img} alt="slider" />
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
                ;
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
