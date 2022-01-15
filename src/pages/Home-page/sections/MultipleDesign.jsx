import React from "react";
import icon from "../../../assets/images/icon3.png";
import profile1 from "../../../assets/images/Group_1282.png";
import profile2 from "../../../assets/images/Group_1281.png";
import profile3 from "../../../assets/images/Group_1280.png";
import { InlineIcon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

function MultipleDesign() {
  return (
    <section className="multiple-design-section">
      <div className="top-icon-area">
        <img src={icon} alt="" />
      </div>
      <div className="content-wrapper">
        <article className="container">
          <div className="left-round"></div>
          <div className="full-rounded"></div>
          <div className="right-rounded"></div>

          <div>
            <h3>Multiple Design</h3>
          </div>
          <div className="image-area">
            <div className="img-wrapper">
              <img src={profile1} alt="" />
            </div>
            <div className="img-wrapper">
              <img src={profile2} alt="" />
            </div>
            <div className="img-wrapper">
              <img src={profile3} alt="" />
            </div>
          </div>
          <div className="slider-area">
            <Swiper
              centeredSlides={true}
              slidesPerView={1} spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={profile1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={profile2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={profile3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="icon-wrapper">
            <span className="icon">
              <InlineIcon icon="clarity:cursor-hand-click-line" />
            </span>
            <span className="icon">
              <InlineIcon icon="akar-icons:pencil" />
            </span>
            <span className="icon">
              <InlineIcon icon="clarity:cursor-hand-click-line" />
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default MultipleDesign;
