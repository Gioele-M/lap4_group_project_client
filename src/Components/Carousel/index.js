import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProfilePageCards2 from '../ProfilePageCards2';
import { useState } from 'react';
import { useSelector } from 'react-redux'


import "./styles.css";

export default function TrendingTopics() {

    const pStars= useSelector((state) => state.media.data.data[1].averageStars.currentRating)
    const pName= useSelector((state) => state.media.data.data[0].playlistName)
    const pOwner= useSelector((state) => state.media.data.data[0].playlistOwner)
    const pTheme= useSelector((state) => state.media.data.data[0].playlistTheme)
  

    const soonImg = require('../../images/soon.png');
    const img1 = require('../../images/1.png');
    const img2 = require('../../images/2.png');
    const img3 = require('../../images/3.jpg');

    const [cardInfo, setCardInfo] = useState ([
        
        { title: pName, owner: pOwner, stars: pStars, bgc:  pTheme},
        { title: pName, owner: pOwner, stars: pStars, bgc:  pTheme},
        { title: pName, owner: pOwner, stars: pStars, bgc:  pTheme}
        // Pass value with 1, 2,, 3
        // on click function whe clicked it will s
      ]);

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
           
            <ProfilePageCards2 data={cardInfo[0]} />
                
           
            </SwiperSlide>
            <SwiperSlide>
                {/* <img src={img2} alt="" /> */}
                {/* <ProfilePageCards2  /> */}
                <ProfilePageCards2 data={cardInfo[1]} />

            </SwiperSlide>
            <SwiperSlide>
                {/* <img src={img3} alt="" /> */}
                {/* <ProfilePageCards2  /> */}
                <ProfilePageCards2 data={cardInfo[2]} />

            </SwiperSlide>
            <SwiperSlide>
                {/* <img src={img3} alt="" /> */}
                {/* <ProfilePageCards2  /> */}
                <ProfilePageCards2 data={cardInfo[2]} />

            </SwiperSlide>
            <SwiperSlide>
                {/* <img src={img3} alt="" /> */}
                {/* <ProfilePageCards2  /> */}
                <ProfilePageCards2 data={cardInfo[2]} />

            </SwiperSlide>
            <SwiperSlide>
                {/* <img src={img3} alt="" /> */}
                {/* <ProfilePageCards2  /> */}
                <ProfilePageCards2 data={cardInfo[2]} />

            </SwiperSlide>

        </Swiper>
    </div>
    </div>
    );
}
