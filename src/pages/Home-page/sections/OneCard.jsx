import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard,Autoplay
} from 'swiper';

import star from "../../../assets/images/star.png";
import sliderImg from "../../../assets/images/Group 1279.png";
import watch from "../../../assets/images/watch.png";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"


SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard,Autoplay]);

const sliderInfo = [
    {
        img: watch,
        title: "SIMPLE AND FAST",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas laudantium odio necessitatibus?"
    },
    {
        img: watch,
        title: "SIMPLE AND FAST",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas laudantium odio necessitatibus?"
    },
    {
        img: watch,
        title: "SIMPLE AND FAST",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas laudantium odio necessitatibus?"
    },
    {
        img: watch,
        title: "SIMPLE AND FAST",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas laudantium odio necessitatibus?"
    },
];

const OneCard = () => {

    return (
        <div id='whyOneCart'>
            <div className="container">
                <div className="oneCart_top">
                    <img src={star} alt="" />
                    <h2>Why One Card</h2>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <Swiper 
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            }}
                             navigation={true} pagination={true} keyboard={true}
                        >
                            <SwiperSlide className="oneCart_slider">
                                {
                                    sliderInfo.map(info => 
                                        <div className="content_area">
                                            <img src={info.img} alt="" />

                                            <div>
                                                <h5>{info.title}</h5>
                                                <p>{info.description}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </SwiperSlide>
                            <SwiperSlide className="oneCart_slider">
                                {
                                    sliderInfo.map(info => 
                                        <div className="content_area">
                                            <img src={info.img} alt="" />

                                            <div>
                                                <h5>{info.title}</h5>
                                                <p>{info.description}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </SwiperSlide>
                            <SwiperSlide className="oneCart_slider">
                                {
                                    sliderInfo.map(info => 
                                        <div className="content_area">
                                            <img src={info.img} alt="" />

                                            <div>
                                                <h5>{info.title}</h5>
                                                <p>{info.description}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="col-md-6">
                        <div className="image_area">
                            <img src={sliderImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneCard;