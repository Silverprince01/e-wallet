import { images } from "../../../public";
import Image from "next/image";
import { Hero, Products, Usecase } from "./components";
// import Hero from "./components/hero";
// import Products from "./components/products";

export default function Landing() {
  return (
    <main className="relative px-[5%]">
      <Image src={images.BgShano} className="absolute top-[10%] right-0" width={500} height={500} alt="Easy Pay" />
      <Hero />
      <Products />
      <Usecase/>
    </main>
  );
}
