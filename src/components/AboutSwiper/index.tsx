import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PersonnalDetails from "../PersonnalDetails";
import Cedrick from "../Cedrick";
import Duler from "../Duler";
import "Swiper/css";
import "Swiper/css/navigation";
import "swiper/bundle";
import "swiper/css/scrollbar";
import "swiper/css/pagination";


const AboutSwiper = () => {
  return (
    <div>
      <Swiper
        spaceBetween={2}
        className="flex items-center justify-center w-[45rem] h-[30rem]"
        // modules={[Navigation, Pagination, Scrollbar, Ally]}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><PersonnalDetails></PersonnalDetails></SwiperSlide>
        <SwiperSlide><Cedrick></Cedrick></SwiperSlide>
        <SwiperSlide><Duler></Duler></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default AboutSwiper;
