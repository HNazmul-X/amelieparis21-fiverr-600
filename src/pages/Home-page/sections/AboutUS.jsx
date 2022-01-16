import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import about from "../../../assets/images/about.png";
import { Controller, Thumbs  } from 'swiper';
import SwiperCore, {
    Navigation,Pagination,Autoplay
} from 'swiper';
import { InlineIcon } from '@iconify/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"

SwiperCore.use([Navigation,Pagination,Autoplay]);

const AboutUS = () => {

    return (
        <div id="about_area">
            <div className="container">
                <div className="aboutTop">
                    <img src={about} alt="" />
                    <h2>What people Says About us</h2>
                </div>

                <Swiper 
                    breakpoints={{
                        320: {
                            spaceBetween: 60,
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 60,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 150,
                        },
                        768: { 
                            slidesPerView: 2,
                            spaceBetween: 60,
                        },
                        980: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                      }}
                    onSlideChange={() => console.log('slide change')}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }} navigation={true} pagination={true}
                >
                    <SwiperSlide className='slider_cart'>
                        <div className="cartInfo">
                            <div><InlineIcon className='userIcon' icon={"carbon:user-avatar-filled-alt"} /></div>
                                
                            <div className="personalInfo">
                                <h6>Nam Janinah <span className='rating'>4.5</span></h6>

                                <div className="starIcon">
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-outlined"} />
                                </div>
                            </div>
                        </div>

                        <div className="cartText">
                            <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slider_cart'>
                        <div className="cartInfo">
                            <div><InlineIcon className='userIcon' icon={"carbon:user-avatar-filled-alt"} /></div>
                                
                            <div className="personalInfo">
                                <h6>Nam Janinah <span className='rating'>4.5</span></h6>

                                <div className="starIcon">
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-outlined"} />
                                </div>
                            </div>
                        </div>

                        <div className="cartText">
                            <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slider_cart'>
                        <div className="cartInfo">
                            <div><InlineIcon className='userIcon' icon={"carbon:user-avatar-filled-alt"} /></div>
                                
                            <div className="personalInfo">
                                <h6>Nam Janinah <span className='rating'>4.5</span></h6>

                                <div className="starIcon">
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-outlined"} />
                                </div>
                            </div>
                        </div>

                        <div className="cartText">
                            <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slider_cart'>
                        <div className="cartInfo">
                            <div><InlineIcon className='userIcon' icon={"carbon:user-avatar-filled-alt"} /></div>
                                
                            <div className="personalInfo">
                                <h6>Nam Janinah <span className='rating'>4.5</span></h6>

                                <div className="starIcon">
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-filled"} />
                                    <InlineIcon icon={"ant-design:star-outlined"} />
                                </div>
                            </div>
                        </div>

                        <div className="cartText">
                            <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default AboutUS;