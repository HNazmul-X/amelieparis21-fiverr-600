import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Thumbs  } from 'swiper';
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
import "./customSlider.css";


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
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div id='whyOneCart'>
            <div className="container">
                <div className="oneCart_top">
                    <img src={star} alt="" />
                    <h2>Why One Card</h2>
                </div>

                <Swiper 
                    spaceBetween={50}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    modules={[Controller, Thumbs]} 
                    controller={{ control: controlledSwiper, swiper: thumbsSwiper }}
                    onSwiper={(setControlledSwiper, setThumbsSwiper)}
                    watchSlidesProgress
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true}
                >
                    <SwiperSlide className="oneCart_slider">
                        <div className="row">
                            <div className="col-md-6">
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
                            </div>

                            <div className="col-md-6">
                                <div className="image_area">
                                    <img src={sliderImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="oneCart_slider">
                        <div className="row">
                            <div className="col-md-6">
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
                            </div>

                            <div className="col-md-6">
                                <div className="image_area">
                                    <img src={sliderImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="oneCart_slider">
                        <div className="row">
                            <div className="col-md-6">
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
                            </div>

                            <div className="col-md-6">
                                <div className="image_area">
                                    <img src={sliderImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OneCard;