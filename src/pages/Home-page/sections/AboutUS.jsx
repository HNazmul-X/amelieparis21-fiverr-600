import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import about from "../../../assets/images/about.png";
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
    const handlePopUp = (value) => {
        if (value === "true") {
            swal("Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti distinctio excepturi odio id quos vitae nam saepe aliquam quae! Praesentium, iure laboriosam? Itaque dolor, possimus tempore et illum aperiam facere voluptas accusantium unde, illo distinctio nisi. Quos minus ut voluptatibus? Deleniti, nam deserunt atque quod tempore facilis hic eius voluptatibus, odio doloremque accusamus omnis veniam magnam labore? Reiciendis adipisci doloremque tempore, aliquam exercitationem optio fugiat voluptatum minus odit beatae cupiditate impedit. Illum aut perferendis sunt odio culpa? Eveniet excepturi ut atque, quisquam asperiores ex qui nobis aperiam distinctio inventore nihil minima? Fugiat rem aliquam alias amet harum deserunt eveniet!")
        }
    }


    return (
        <div id="about_area">
            <div className="container">
                <div className="aboutTop">
                    <img src={about} alt="" />
                    <h2>What people Says About us</h2>
                </div>

                <div>
                    <Swiper 
                        breakpoints={{
                            // when window width is <= 320px
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 150,
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
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            }
                          }}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        navigation={true} pagination={true}
                        style={{padding: "0 10px"}}
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
                                <p>
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa.... 
                                    <span onClick={() => handlePopUp("true")}>See More</span>

                                    
                                </p>
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
        </div>
    );
};

export default AboutUS;