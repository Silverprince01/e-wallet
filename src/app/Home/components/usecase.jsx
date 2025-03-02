import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { images } from "../../../../public";
import { useCase1, useCase1Num, useCase2 } from "../data";
const Usecase = () => {
  return (
    <section className="mt-5">
      <div className="my-20">
        <h3 className="text-4xl font-semibold mb-4 text-[#FF3200]">Our Cases</h3>
        <p className="text-lg">At Easy Pay, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
      </div>

      <div className="flex items-center">
        <div className="bg-[#1C1C1C] p-12 relative rounded-3xl">
          <div className="absolute top-0 left-0 ">
            <Image src={images.BgShano3} width={220} height={220} alt="img" />
          </div>

          {/* gridview */}
          <div className="grid grid-cols-2 gap-10 relative z-10">
            {useCase1.map(({ id, icon, text }) => (
              <div key={id} className="p-7 bg-[#1A1A1A] border-solid border-2 border-[#262626] rounded-2xl">
                <div className="mx-auto mb-4 bg-[#FF32000D] w-[74px] h-[74px] rounded-full flex justify-center items-center">
                  <div className="bg-[#FF320033] w-[55px] h-[55px] rounded-full flex justify-center items-center">
                    <Image src={icon} width={30} height={30} alt="icon" />
                  </div>
                </div>
                <h3 className="text-center text-white text-xl mt-2 mb-4 ">{text}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="p-12">
          <div className="">
            <h3 className="text-xl font-semibold mb-2">For Individuals</h3>
            <p className="text-base font-normal">
              For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement
              planning, ensuring a financially secure future for our customers
            </p>
          </div>

          <div className="flex justify-between items-center">
            {useCase1Num.map(({ id, num, text }) => (
              <div key={id} className="">
                <h3 className="text-xl mb-2 text-[#FF3200]">{num}%</h3>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Button radius="full" size="md" className="bg-[#1C1C1C] border-solid border-2 border-[#262626] flex justify-center items-center  px-4 h-16 w-40">
              Show More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usecase;
