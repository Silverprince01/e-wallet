import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Facebook from "../../../public/icons/fbPink.png";
import Google from "../../../public/icons/googlePink.png";
import Apple from "../../../public/icons/applePink.png";
import { Input } from "@nextui-org/react";

import { signup, login } from "../utils/auth";
const Auth = () => {
  const data = signup;
  return (
    <section className={`w-full h-full rounded-[30px]`}>
      <div className="bgImage px-20 py-10">
        <div className="relative flex flex-col justify-center">
          <div className="pb-16 flex justify-center items-center flex-col">
            <h3 className="text-[#FF3200] text-[40px] font-semibold mb-5">
              {data.header}
            </h3>
            <p className="text-[#BFBFBF] font-normal">{data.paragraph}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            {data.inputs.map((input) => (
              <input
                key={input.id}
                type={input.type}
                // className="bg-[red]"
                className="bg-[#1A1A1A] rounded-full border-solid border-3 p-4 border-[#7f7f81] w-full focus:outline-none"
                placeholder={input.text}
                // onFocus={}
                // endContent={
                //   input.type === "password" ? (
                //     <Image src={Eye} width={14} height={14} />
                //   ) : (
                //     ""
                //   )
                // }
              />
            ))}
          </div>

          <div className=" w-full flex flex-col justify-center items-center">
            <div className="w-[50%] my-10 ">
              <Button radius="full" className="bg-[#FF3200] w-full p-3 my-3">
                Login
              </Button>
              <Button
                radius="full"
                className=" bg-transparent border-solid border-[#FF3200] border-[1px] w-full p-3  my-3"
              >
                Sign Up
              </Button>

              <div className="flex justify-between items-center mt-4">
                <div className="w-1/3 bg-[#B3B3B3] h-[1px]"></div>
                <p className="text-[#B3B3B3]">Or continue with</p>
                <div className="w-1/3 bg-[#B3B3B3] h-[1px]"></div>
              </div>
            </div>
            <div className="w-[40%] flex justify-between items-center">
              <div className="bg-[#FF32000D] w-[74px] h-[74px] rounded-full flex justify-center items-center">
                <div className="bg-[#FF320033] w-[55px] h-[55px] rounded-full flex justify-center items-center">
                  <Image src={Google} width={30} height={30} />
                </div>
              </div>
              <div className="bg-[#FF32000D] w-[74px] h-[74px] rounded-full flex justify-center items-center">
                <div className="bg-[#FF320033] w-[55px] h-[55px] rounded-full flex justify-center items-center">
                  <Image src={Facebook} width={30} height={30} />
                </div>
              </div>
              <div className="bg-[#FF32000D] w-[74px] h-[74px] rounded-full flex justify-center items-center">
                <div className="bg-[#FF320033] w-[55px] h-[55px] rounded-full flex justify-center items-center">
                  <Image src={Apple} width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
