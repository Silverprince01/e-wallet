import React from "react";
import Image from "next/image";
import TestProd from "@/app/components/TestProd";
import { products } from "../data";
const Products = () => {  

  return (
    <div>
      <TestProd header={"Products"} text={"Discover a range of comprehensive and customizable banking products at Easy Pay, designed to suit your unique financial needs and aspirations"} />
      <div className="flex justify-between items-center">
        {products.map(({ id, header, text, icon }) => (
          <section key={id} className={` p-5 ${id < 3 ? "border-r-solid border-r-2 border-r-[#262626]" : ""}`}>
            <div className="mx-auto mb-4 bg-[#FF32000D] w-[74px] h-[74px] rounded-full flex justify-center items-center">
              <div className="bg-[#FF320033] w-[55px] h-[55px] rounded-full flex justify-center items-center">
                <Image src={icon} width={30} height={30} alt="icon" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">

            <h3 className="text-white text-xl mt-2 mb-4 ">{header}</h3>
            <p className="text-[#B3B3B3] text-base font-light my-2 text-center">{text}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Products;
