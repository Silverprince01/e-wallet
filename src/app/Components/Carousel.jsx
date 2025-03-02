"use client";
import React, { useRef } from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import TestProd from "./TestProd";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { carouselData } from "../utils/carousel";
import Comm from "../../../public/icons/comment.png";

export const Carousel = () => {
  const swiperRef = useRef(null);
  
  return (
    <section>
      <TestProd
        header={"Testimonial"}
        text={
          "Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
        }
      />
      <div className="slider-container">
        <Swiper
          modules={[Navigation]}
          centeredSlides={true}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mx-20"
        >
          {carouselData.map((carousel) => (
            <SwiperSlide>
              <div className=" relative p-5 h-full">
                <Image className="mx-auto" src={Comm} width={60} height={60} alt="comment" />
                <p className="text-center">{carousel.paragraph}</p>
                <p className="text-[#FF3200] text-center mt-20">{carousel.nam}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// export default Carousel;
