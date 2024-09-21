import React from "react";

import headingCentralUnderline from "../../assets/OurMenuBgImage/HeadingCentralUnderline.png";
import bgImage from "../../assets/OurMenuBgImage/OurMenuSection.jpg";
import quoteImage from "../../assets/ClientFeedBack/quoteRight.png";
import leftImage from "../../assets/ClientFeedBack/LeftBG.png";
import rightImage from "../../assets/ClientFeedBack/RightBG.jpg";
import darkDiamond from "../../assets/DiamondIcon/Brown Diamond Icon.png";
import lightDiamond from "../../assets/DiamondIcon/White Diamond Icon.png";

function ClientFeedBack() {
  return (
    <div className="my-[156.8px] flex flex-col md:flex-row h-auto font-monda sm:justify-center sm:items-center">
      <img
        src={leftImage}
        alt="Left Image"
        className="w-full md:w-[35%] sm:w-[25%] object-cover"
      />
      <div
        style={{
          backgroundImage: `url(${rightImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="w-full md:w-[65%] sm:w-[75%] flex flex-col justify-around items-center sm:pb-12"
      >
        <div className="text-center p-4 md:p-0">
          <h2 className="text-[24px] md:text-[31px] sm:text-[12px] leading-10 text-[#A5886D]">
            Client Feedback
          </h2>
          <img
            className="mx-auto block pt-5 pb-10"
            src={headingCentralUnderline}
            alt="Heading Central Underline"
          />
          <p className="font-normal text-white px-4 sm:text-[8px]">
            In the realm of fine dining, trust is an invaluable currency, and we
            are humbled by the
            <br />
            unwavering trust bestowed upon us by our esteemed guests.
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="mx-4 md:mx-16 py-10 md:py-16 border-[#A5886D] border-[5px] flex flex-col justify-between items-center "
        >
          <img className="pb-5" src={quoteImage} alt="Quote Image" />
          <p className="leading-4 text-[#F2F2F2] text-center px-4 md:px-14 pb-3 sm:text-[8px]">
            I had the immense pleasure of indulging in a dining experience at
            your esteemed luxury restaurant, and I am compelled to express my
            deepest gratitude and admiration for the extraordinary journey I
            embarked upon. From the moment I stepped into the opulent
            surroundings, I knew I was in for an exceptional treat.
          </p>
          <div className="flex flex-col justify-between lg:h-[64px] sm:h-[30px] ">
            <p className="text-[#C3AF9D] sm:text-[8px]">
              Alexander Thompson - Customer
            </p>
            <div className="flex justify-center gap-2 md:gap-4">
              <img
                src={darkDiamond}
                alt="Diamond 1"
                className="lg:h-6 lg:w-6"
              />
              <img
                src={lightDiamond}
                alt="Diamond 2"
                className="lg:h-6 lg:w-6"
              />
              <img
                src={lightDiamond}
                alt="Diamond 2"
                className="lg:h-6 lg:w-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientFeedBack;
