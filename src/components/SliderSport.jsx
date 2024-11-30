"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Alldata } from "./Alldata";
import Image from "next/image";

const IconSlider = () => {
  return (
    <div className="icon-slider">
      <Swiper
        loop={true}
        spaceBetween={20}
        speed={0.1}
        breakpoints={{
          320: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 9,
          },
        }}
      >
        {Alldata.slider.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image
              src={item.src}
              alt={item.alt}
              className="inline-block mx-2 size-16 rounded-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconSlider;
