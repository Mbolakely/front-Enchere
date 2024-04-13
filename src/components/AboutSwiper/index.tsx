import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PersonnalDetails from "../PersonnalDetails";
import "Swiper/css";
import "Swiper/css/navigation";
import "swiper/bundle";
import "swiper/css/scrollbar";
import "swiper/css/pagination"

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
        <SwiperSlide className=''><PersonnalDetails></PersonnalDetails></SwiperSlide>
        <SwiperSlide className='bg-red-500 flex justify-center items-center'>Slide 2</SwiperSlide>
        <SwiperSlide className='bg-red-500 flex justify-center items-center'>Slide 3</SwiperSlide>

      </Swiper>
    </div>
  );
};

export default AboutSwiper;
