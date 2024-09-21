import React from "react";

import filledstar from "../../assets/BestQualityService/5starfillIcons.png";
import sideImage from "../../assets/BestQualityService/QServiceSideImage.png";

function BestQualityService() {
  return (
    <div className="lg:wx-[230px]  lg:bg-[#181818] md:px-[130px] flex lg:flex-row md:flex-col md:justify-center md:items-center font-monda sm:px-[30px] sm:flex-col sm:justify-center sm:items-center">
      <img
        className="w-[50%] sm:w-[30%]"
        src={sideImage}
        alt="Best Quality Service Section Image"
      />
      <div className="w-[50%] sm:w-[30%] h-[106.18px] flex justify-center items-center bg-[#181818]">
        <div className="lg:h-[106.18px] w-[308px] flex flex-col justify-between sm:h-[60px]">
          <h1 className="lg:text-[25px] sm:text-[15px] leading-8 text-white font-bold text-center">
            Best Quality Service
          </h1>
          <div className="flex justify-between sm:justify-around">
            <img className="sm:w-[10%]" src={filledstar} alt="Filled Star" />
            <img className="sm:w-[10%]" src={filledstar} alt="Filled Star" />
            <img className="sm:w-[10%]" src={filledstar} alt="Filled Star" />
            <img className="sm:w-[10%]" src={filledstar} alt="Filled Star" />
            <img className="sm:w-[10%]" src={filledstar} alt="Filled Star" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestQualityService;
