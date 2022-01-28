import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const WorkSectionSlider = ({ sliderData, handleChange, handleDecrease }) => {
  return (
    <div id="work-slider">
      <Swiper
        navigation={true}
        onSlideNextTransitionStart={() => handleChange()}
        onSlidePrevTransitionStart={() => handleDecrease()}
        className="mySwiper"
      >
        {sliderData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slider-content">
                <div className="slider-left-content">
                  <div className="slider-image-content">
                    <div className="slider-image-section">
                      <div className="slider-img">
                        <img src={item.img} alt="work-slider" />
                      </div>
                      <div className="slider_image_number">
                        <p>
                          <span>{index + 1}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-right-content">
                  <div className="slider-text-content">
                    <p>{item.description}</p>
                  </div>
                  {/* <div className="slider-controller-btn">
                    <button id="leftBtn" className="prevBtn">
                      <Icon icon="la:arrow-left" style={{ fontSize: "45px" }} />
                    </button>
                    <button id="rightBtn" className="nextBtn">
                      <Icon
                        icon="la:arrow-right"
                        style={{ fontSize: "45px" }}
                      />
                    </button>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSectionSlider;
