import { Inter, Lexend } from "next/font/google";
import "./globals.scss";
import { NextUIProviders } from "./Providers/NextUIProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Carousel } from "./components/Carousel";
const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Pay",
  description: "Easy Pay Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <NextUIProviders>
          <Header />

          {children}
          <div className="px-[5%]">
          <Carousel/>
          </div>
          <Footer />
        </NextUIProviders>
      </body>
    </html>
  );
}
