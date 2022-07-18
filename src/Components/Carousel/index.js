import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

export default function TrendingTopics() {
    return(
    <div className='container'>
        <div className="title_wrapper">
            <div className="soonimg">
                <img src="../../images/cs.png" alt="coming soon image" />
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
                <img src="images/1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/3.jpg" alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
    );
}
