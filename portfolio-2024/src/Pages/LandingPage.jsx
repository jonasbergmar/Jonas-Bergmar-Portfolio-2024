import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Hero from "../Components/Hero";
import CtaButton from "../Components/CtaButtons";
import ImageSlider from "../Components/ImageSlider";

const LandingPage = () => {
  const images = [
    "src/Assets/Bild 01.png",
    "src/Assets/Bild 02.png",
    "src/Assets/Bild 03.png",
    "src/Assets/Bild 04.png",
  ];

  return (
    <div className="max-w-[1120px] flex flex-col w-full gap-16 ">
      <div>
        <div className="items-start text-2xl flex flex-col overflow-hidden gap-4 z-10 lg:flex-row">
          <Hero />
        </div>
        <div className="ctaContainer overflow-visible flex mt-4 gap-4">
          <CtaButton />
        </div>
      </div>
      <div className="imageSliderContainer flex flex-col items-left justify-center gap-4">
        <div className="flex flex-col gap-4">
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
