import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import star from "../../../../assets/images/star.png";
import sliderImg from "../../../../assets/images/Group 1279.png";
import watch from "../../../../assets/images/watch.png";
// import portrait from "../../../../assets/images/portrait.png";
import { Controller, Thumbs  } from 'swiper';
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"

import './SubHome.css';

import About from './About';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

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


const HomePage = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div>
            {/*  */}
            <div id='whyOneCart'>
            
                <div className="container">
                    <div className="oneCart_top">
                        <img src={star} alt="" />
                        <h2>Why One Card</h2>
                    </div>
                    <Swiper 
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        modules={[Controller, Thumbs]} 
                        controller={{ control: controlledSwiper, swiper: thumbsSwiper }}
                        onSwiper={(setControlledSwiper, setThumbsSwiper)}
                        watchSlidesProgress
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

            {/*  */}
            {/* <div id="refference_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="refference_content">
                                <h2>Some thing Text World Be here</h2>
                                <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                
                                <button className='btn refferenceBtn'>Download Refference File</button>
                            </div>
                        </div>

                        <div className="col-md-4 offset-md-1">
                            <div className="refference_img">
                                <img src={portrait} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default HomePage;