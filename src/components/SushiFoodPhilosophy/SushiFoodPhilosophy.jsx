import React from "react";

import sushiFoodPhilosophy from "../../assets/SushiFoodPhilosophy/SushiFoodPhilosophy.png";
import underline from "../../assets/SushiFoodPhilosophy/HeadingLeftUnderline.png";

import fbIcon from "../../assets/SushiFoodPhilosophy/SocialMediaIcons/facebookLogo.png";
import ytIcon from "../../assets/SushiFoodPhilosophy/SocialMediaIcons/youtubeLogo.png";
import xIcon from "../../assets/SushiFoodPhilosophy/SocialMediaIcons/twitterLogo.png";
import instaIcon from "../../assets/SushiFoodPhilosophy/SocialMediaIcons/instagramLogo.png";

function SushiFoodPhilosophy() {
  return (
    <div className="h-[584.39px] flex px-[185px] justify-around gap-[51px] my-[156.8px] lg:flex-row md:flex-col">
      <div className="lg:w-[50%] md:w-[100%] flex justify-center items-center">
        <div className="h-[324px] w-[466px]">
          <h1 className="text-[#A5886D] text-[31px] loading-[40px] font-bold">
            Sushi Food Philosophy
          </h1>
          <img
            className="w-[237.89px] h-[15px] mt-3"
            src={underline}
            alt="Heading Underline"
          />
          <p className="text-white mt-8">
            Welcome to our exquisite world of sushi, where our culinary artisans
            embrace a food philosophy that transcends taste and elevates the
            dining experience to new heights.
            <br />
            <br />
            At Renaissance, we believe that sushi is an art form, an expression
            of craftsmanship and sophistication that delights the senses and
            transports you to a realm of culinary bliss.
          </p>
          <div className="flex justify-center mt-8">
            <div className="h-[21px] flex justify-between w-[196px]">
              <img src={xIcon} alt="Twitter Icon" />
              <img src={fbIcon} alt="Facebook Icon" />
              <img src={instaIcon} alt="Instagram Icon" />
              <img src={ytIcon} alt="Youtube Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] md:w-[100%] flex lg:pr-[46px] justify-end items-end md:items-center md:justify-center">
        <img
          className="md:w-[50%]"
          src={sushiFoodPhilosophy}
          alt="Sushi Food Philosophy"
        />
      </div>
    </div>
  );
}

export default SushiFoodPhilosophy;
