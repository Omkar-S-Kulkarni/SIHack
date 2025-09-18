import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import header2 from "./header-2.svg";
import image from "./image.svg";
import minister from "./minister.png";
import vector22 from "./vector-2-2.svg";

export default MainPage = () => {
  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1440px] h-[1209px] relative">
        <div className="absolute w-[1440px] h-[400px] top-36 left-0 border border-solid border-[#260404] bg-[url(/tribals-1.png)] bg-cover bg-[50%_50%]" />

        <div className="absolute w-[703px] h-[400px] top-[581px] left-4 bg-[#747171]" />

        <img
          className="absolute w-px h-[526px] top-[568px] left-[766px]"
          alt="Vector"
          src={vector22}
        />

        <img
          className="absolute w-[1440px] h-[100px] top-11 left-0"
          alt="Header"
          src={header2}
        />

        <Header
          className="!absolute !left-0 !top-0"
          frameClassName="bg-[url(/vector-3.svg)]"
          img="vector-1-2.svg"
          rectangleClassName="!border-[unset]"
          vector="vector-2-4.svg"
        />
        <img
          className="absolute w-[1440px] h-px top-[563px] left-0 object-cover"
          alt="Vector"
          src={image}
        />

        <img
          className="absolute w-[276px] h-[351px] top-[630px] left-[1145px] aspect-[0.79] object-cover"
          alt="Minister"
          src={minister}
        />

        <div className="absolute h-[43px] top-[580px] left-[800px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[26px] tracking-[0] leading-[42.9px] whitespace-nowrap">
          ABOUT THE MINISTRY
        </div>

        <p className="absolute w-[354px] h-[212px] top-[707px] left-[784px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[33.0px]">
          The Ministry was set up in 1999 after the bifurcation of Ministry of
          Social Justice and Empowerment with the objective of providing more
          focused approach on the integrated socio-economic development of the
          Scheduled Tribes (STs), the most underprivileged of the Indian
          Society, in a coordinated and planned manner.
        </p>

        <Footer
          className="!absolute !left-0 !top-[1101px]"
          headerVector="vector-2-5.svg"
        />
      </div>
    </div>
  );
};
