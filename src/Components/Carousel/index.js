import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProfilePageCard2 from '../ProfilePageCards2';
import "./styles.css";

export default function TrendingTopics() {

    const soonImg = require('../../images/soon.png');
    const img1 = require('../../images/1.png');
    const img2 = require('../../images/2.png');
    const img3 = require('../../images/3.jpg');

    return(
        <div className="container-fluid">
    <div className='container'>
        <div className="title_wrapper">
            <div className="soonimg">
                <img src={soonImg} alt="coming soon image" />
            </div>
            <div className="title_">
                <span>Coming Soon</span>Swiper Slider
            </div>
        </div>
        <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
    </div>
    );
}
