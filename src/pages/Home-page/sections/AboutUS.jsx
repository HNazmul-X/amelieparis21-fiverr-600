import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import about from "../../../assets/images/about.png";
import { Controller, Thumbs  } from 'swiper';
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';
import { InlineIcon } from '@iconify/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const AboutUS = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div id="about_area">
            <div className="container">
                <div className="aboutTop">
                    <img src={about} alt="" />
                    <h2>What people Says About us</h2>
                </div>

                <Swiper 
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    modules={[Controller, Thumbs]} 
                    controller={{ control: controlledSwiper, swiper: thumbsSwiper }}
                    onSwiper={(setControlledSwiper, setThumbsSwiper)}
                    watchSlidesProgress
                    parallax={true}
                    autoplay={5000}
                    speed={800}
                    autoplayDisableOnInteraction={false}
                    cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true}
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