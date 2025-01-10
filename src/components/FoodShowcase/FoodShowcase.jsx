import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./foodShocass.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const FoodShowcase = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/19/3f/d3/193fd3adb3a10a4a31998bbec4ae2912.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/f0/e9/ec/f0e9ec675bb018f291c387e0e7e5cccf.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/c4/31/80/c431804d1cea31a49647cc654721f460.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/14/ce/aa/14ceaa47a51211fbc4e2d8661dca66ec.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/b5/a9/13/b5a9131831bdfa0aa1de94410acc579c.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/8d/2e/bd/8d2ebd22bda22ef98152e3428800b7b4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/50/b6/2f/50b62f74f91c94ff67151508ea090a19.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/38/82/d1/3882d1f7184b5907d0873d781ce136a9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/bd/ef/28/bdef2883e4188bc5a83a09fb9c025ea9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodShowcase;
