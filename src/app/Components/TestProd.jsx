import React from "react";
import { Button } from "@nextui-org/react";
const TestProd = ({ header, text }) => {
  return (
    <div className="my-20">
      <h3 className="text-4xl font-semibold mb-4">
        Our <span className="text-[#FF3200]">{header}</span>
      </h3>
      <div className="flex justify-between items-center gap-4">
        <div>
          <p className="text-lg">{text}</p>
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
  );
};

export default TestProd;
