import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import EasyPay from "../../../public/epay.svg";
import { routes } from "../utils/routes";
import FaceBook from "../../../public/icons/fb.svg";
import Twitter from "../../../public/icons/tt.svg";
import Linkedin from "../../../public/icons/li.svg";
import Call from "../../../public/icons/call.svg";
import Location from "../../../public/icons/location.svg";
import Mail from "../../../public/icons/mail.svg";
const Footer = ({ route }) => {
  return (
    <section className="px-40 py-4 flex justify-center items-center flex-col bg-[#1C1C1C] w-full">
      <div className="flex flex-col justify-center items-center py-8 border-b-2 border-solid border-[#262626] w-full">
        <Image
          src={EasyPay}
          sizes="20px"
          width={80}
          height={50}
          objectFit="contain"
          alt="Easy Pay"
        />

        <ul className="flex gap-6 my-4">
          {routes.map((rnam) => {
            const { id, rname } = rnam;
            return <li key={id}>{rname}</li>;
          })}
        </ul>
      </div>

      <div className="flex justify-center gap-6 items-center py-8 border-b-2 border-solid border-[#262626] w-full">
        <Button
          startContent={
            <Image src={Mail} width={15} height={15} objectFit="contain" />
          }
          className="flex gap-2"
        >
          badrufuadalabi@gmail.com
        </Button>
        <Button
          startContent={
            <Image src={Call} width={15} height={15} objectFit="contain" />
          }
          className="flex gap-2"
        >
          +2348086877024
        </Button>
        <Button
          startContent={
            <Image src={Location} width={15} height={15} objectFit="contain" />
          }
          className="flex gap-2"
        >
          Lagos, Nigeria
        </Button>
      </div>

      <div className=" bg-[#1A1A1A] border-[#262626] border-solid border-2 rounded-[50px] p-[20px]  flex justify-between items-center h-[45px] w-full my-10">
        <div className="flex items-center gap-2">
          <Button isIconOnly radius="full" className="bg-[#FF3200] p-2">
            <Image src={FaceBook} width={15} height={15} />
          </Button>
          <Button isIconOnly radius="full" className="bg-[#FF3200] p-2">
            <Image src={Twitter} width={15} height={15} />
          </Button>
          <Button isIconOnly radius="full" className="bg-[#FF3200] p-2">
            <Image src={Linkedin} width={15} height={15} />
          </Button>
        </div>

        <p className="text-[#B3B3B3]">Your Bank All Rights Reserved</p>

        <div className="flex gap-3 items-center">
          <p className="text-[#B3B3B3] text-[18px]">Privacy Policy</p>
          <div className="h-5 w-[1px] bg-[#B3B3B3]"></div>
          <p className="text-[#B3B3B3] text-[18px]">Terms of Services</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
