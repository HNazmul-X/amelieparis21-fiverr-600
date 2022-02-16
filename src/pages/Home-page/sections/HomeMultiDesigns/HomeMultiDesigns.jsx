import React from "react";
import slide1 from "../../../../assets/images/screen1.4bbe20625557a4bc9794.png";
import slide2 from "../../../../assets/images/screen2.51f15bf080c960fa554b.png";
import slide3 from "../../../../assets/images/slide3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

const datas = [slide1, slide2, slide3];
function HomeMultiDesigns() {
  return (
    <section className="home-multi-designs-section">
      <article className="container">
        <div className="wrapper">
          <h3>Multi Designs</h3>
          <div className="my-swiper-wrapper">
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
              className="mySwiper"
            >
              <SwiperSlide className="my-slide">
                <img src={slide1} alt="one card pro" className="my-slide-img" />
              </SwiperSlide>
              <SwiperSlide className="my-slide">
                <img src={slide2} alt="one card pro" className="my-slide-img" />
              </SwiperSlide>
              <SwiperSlide className="my-slide">
                <img src={slide3} alt="one card pro" className="my-slide-img" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomeMultiDesigns;
