// ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mainimg from "../assets/main.png"; // Adjust this path based on your file structure

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      navigation={false}
      className="w-full mx-auto"
    >
      <SwiperSlide>
        <img src={mainimg} alt="Main Slide 1" className="w-full h-auto object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mainimg} alt="Main Slide 2" className="w-full h-auto object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mainimg} alt="Main Slide 3" className="w-full h-auto object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
