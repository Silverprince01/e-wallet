"use client";
import React, { useState } from "react";

import { Button } from "@nextui-org/react";
import { images } from "../../../../public";
import { verticalCarouselData } from "@/app/utils/carousel";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import "swiper/css";

const Hero = () => {
  return (
    <section className="py-10 flex justify-between items-start">
      <div className="w-1/2">
        <div className="bg-[#262626] p-6 rounded-full h-[44px] w-1/2 flex items-center gap-2">
          <Image src={images.TickIcon} className="" width={24} height={24} alt="Tick" />
          <p>No LLC Required , No Credit Check</p>
        </div>
        <div className="my-10">
          <h3 className="text-5xl">
            Welcome to Easy Pay Empowering Your <span className="text-[#FF3200]"> Financial Journey</span>{" "}
          </h3>
          <p className="mt-10 text-base">
            At Easy Pay, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized
            and innovative services that prioritize our customers' needs.
          </p>
        </div>
        <div className="">
          <Button radius="full" size="md" className="bg-[#FF3200] flex justify-center items-center  px-4 h-16 w-40">
            Open Account
          </Button>
        </div>
      </div>

      <div className="w-1/2 border-solid border-[#FF320033] rounded-md p-8">
        <h3>Your Transactions</h3>

        <div className="slider-container  overflow-y-hidden">
          <Carousel
            axis="vertical"
            centerMode={true}
            // autoPlay={true}
            // interval={2000}
            // infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            verticalSwipe="natural"
          >
            {verticalCarouselData.map((data) => (              
                <div key={data.id} className="bg-[#1C1C1C] rounded-md flex justify-between items-end py-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF3200] w-10 h-10 rounded-full flex justify-center items-center">
                      <Image src={images.Transact} width={20} height={20} alt="Transact"/>
                    </div>
                    <div className="">
                      <p>Transaction</p>
                      <p>{data.nam}</p>
                    </div>
                  </div>
                  <div className="">
                    <p>${data.amount}</p>
                  </div>
                </div>              
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
