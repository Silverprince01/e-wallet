import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import EasyPay from "../../../public/epay.svg";
import { routes } from "../utils/routes";
const Header = ({ route }) => {
  return (
    <nav className="nav">
      <section className=" bg-[#1C1C1C] border-[#262626] border-solid border-2 rounded-[50px] p-[20px]  flex justify-between items-center h-[75px] w-full">
        {/* <div className="w-1/5"> */}
        <Image
          src={EasyPay}
          sizes="20px"
          width={80}
          height={50}
          objectFit="contain"
          alt="Easy Pay"
        />
        {/* </div> */}

        <ul className="flex items-center gap-6">
          {routes.map((rnam) => {
            const { id, rname } = rnam;
            return <li key={id}>{rname}</li>;
          })}
        </ul>

        <div className="flex gap-3">
          <Button
            radius="full"
            size="sm"
            className={`border-[#FF3200] border-solid border-[1px] px-6 py-2 text-[#FF3200] text-sm rounded-full`}
          >
            Sign Up
          </Button>
          <Button
            radius="full"
            size="sm"
            className={`bg-[#FF3200] px-6 py-2 text-white text-sm rounded-full hover:border-[#FF3200] hover:border-solid hover:border-[1px] hover:bg-transparent`}
          >
            Login
          </Button>
        </div>
      </section>
    </nav>
  );
};

export default Header;
