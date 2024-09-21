import React, { useState } from "react";

import HeroImage1 from "../../assets/HeroImages/Hero_1.jpg";
import HeroImage2 from "../../assets/HeroImages/Hero_2.jpg";
import HeroImage3 from "../../assets/HeroImages/Hero_3.jpg";

import leftSlideArrow from "../../assets/HeroImages/ArrowNavigationImages/Arrow-left-short.png";
import rightSlideArrow from "../../assets/HeroImages/ArrowNavigationImages/Arrow-right-short.png";

import darkDiamond from "../../assets/DiamondIcon/Brown Diamond Icon.png";
import lightDiamond from "../../assets/DiamondIcon/White Diamond Icon.png";

import Header from "../header/Header";

const heroImages = [HeroImage1, HeroImage2, HeroImage3];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftArrowClick = () => {
    const newIndex =
      currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const handleRightArrowClick = () => {
    const newIndex =
      currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div
      id="hero1"
      style={{
        backgroundImage: `url(${heroImages[currentImageIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
      className="lg:h-[879px] flex flex-col -bottom-12 md:h-[600px] sm:h-[450px]"
    >
      <Header />
      <div className="flex justify-center">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-full px-4 md:px-12">
          <h1 className="font-normal text-white text-8xl leading-[96px] font-cookie md:text-6xl md:leading-[72px] sm:text-4xl sm:leading-[48px]">
            Experience the Art of Sushi
          </h1>
          <h2 className="text-[#C3AF9D] font-monda font-bold text-[31px] leading-[40px] md:text-[24px] md:leading-[32px] sm:text-[20px] sm:leading-[28px] mt-4">
            “Unveiling the Artistry of Fresh and Exquisite Japanese Cuisine”
          </h2>
          <div className="flex justify-between px-[96px] mt-4 sm:px-[24px]">
            <img
              src={leftSlideArrow}
              alt="Left Arrow"
              className="mr-8 cursor-pointer w-[32.28px] h-[26.25px] sm:w-[24px] sm:h-[20px]"
              onClick={handleLeftArrowClick}
            />
            <img
              src={rightSlideArrow}
              alt="Right Arrow"
              className="ml-8 cursor-pointer w-[32.28px] h-[26.25px] sm:w-[24px] sm:h-[20px]"
              onClick={handleRightArrowClick}
            />
          </div>
          <button className="bg-gradient-to-b from-[#7B5638] to-[#CBBAAB] text-white font-bold h-[48px] px-[70px] rounded-tl-[150px] rounded-br-[150px] rounded-tr-none rounded-bl-none mt-6 sm:px-[40px] sm:h-[40px]">
            Read More
          </button>
        </div>
        <div className="absolute bottom-[174px] flex justify-center gap-4 sm:bottom-[100px]">
          <img
            src={currentImageIndex === 0 ? darkDiamond : lightDiamond}
            alt="Diamond 1"
            className="h-6 w-6 sm:h-4 sm:w-4"
          />
          <img
            src={currentImageIndex === 1 ? darkDiamond : lightDiamond}
            alt="Diamond 2"
            className="h-6 w-6 sm:h-4 sm:w-4"
          />
          <img
            src={currentImageIndex === 2 ? darkDiamond : lightDiamond}
            alt="Diamond 3"
            className="h-6 w-6 sm:h-4 sm:w-4"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
