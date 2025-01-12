"use client";
import Auth from "./components/Auth";
import { Carousel } from "./components/Carousel";
// import Carousel from "./Components/Carousel";
export default function Home() {
  return (
    <main className="px-40">
      <Auth />
      <Carousel />
    </main>
  );
}
