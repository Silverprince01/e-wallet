import React, { useRef } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

import { carouselData } from "../utils/carousel";
import Comm from "../../../public/icons/comment.png";

export const Carousel = () => {
  const swiperRef = useRef(null);
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  // };
  return (
    <section>
      <div className="my-20">
        <h3 className="text-4xl font-semibold mb-4">
          Our <span className="text-[#FF3200]">Testimonial</span>
        </h3>
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg">
              Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial
              journey
            </p>
          </div>
          <div className="bg-[#1C1C1C] border-[#262626] border-solid border-2 rounded-[50px] p-[15px] flex items-center justify-between w-[30%]">
            <Button radius="full" size="lg" className="bg-[#FF3200] px-6 py-2 text-white text-sm rounded-full hover:border-[#FF3200] hover:border-solid hover:border-[1px] hover:bg-transparent">
              For Individuals
            </Button>
            <Button radius="full" size="lg" className="border-[#FF3200] border-solid border-[1px] px-6 py-2 text-[#FF3200] text-sm rounded-full">
              For Businesses
            </Button>
          </div>
        </div>
      </div>
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
