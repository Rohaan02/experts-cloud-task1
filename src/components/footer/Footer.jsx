import React from "react";

import bgImage from "../../assets/OurMenuBgImage/OurMenuSection.jpg";
import logoImage from "../../assets/Logo.png";

import fbIcon from "../../assets/SushiFoodPhilosophy/SocialMediaIcons/facebookLogo.png";
import ytIcon from "../../assets/SushiFoodPhilosophy/SocialMediaIcons/youtubeLogo.png";
import xIcon from "../../assets/SushiFoodPhilosophy/SocialMediaIcons/twitterLogo.png";
import instaIcon from "../../assets/SushiFoodPhilosophy/SocialMediaIcons/instagramLogo.png";

import cellIcon from "../../assets/Footer/cellIcon.png";
import emailIcon from "../../assets/Footer/emailIcon.png";
import locationIcon from "../../assets/Footer/locationIcon.png";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-auto text-white py-8 px-6 md:px-[100px] lg:px-[230px] flex flex-col justify-center items-center gap-10 font-monda"
      >
        <div className="flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img src={locationIcon} alt="location icon" />
            <span className="text-center md:text-left">
              12 Rue de la Fontaine, Vannes, 56000, France
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img src={cellIcon} alt="phone icon" />
            <span className="text-center md:text-left">+36968-343-49-41</span>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img src={emailIcon} alt="email icon" />
            <span className="text-center md:text-left">
              reservations@restaurant.com
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-[#A5886D]">Monday - Thursday: 9am - 10pm</p>
            <p className="text-[#A5886D]">Friday - Saturday: 10am - 11pm</p>
            <p className="text-[#A5886D]">Monday: 11am - 9pm</p>
          </div>

          <div className="flex justify-center">
            <img src={logoImage} alt="Renaissance Logo" className="w-24" />
          </div>

          <div className="flex justify-center space-x-4">
            <img src={xIcon} alt="Twitter Icon" className="w-5 h-5" />
            <img src={fbIcon} alt="Facebook Icon" className="w-5 h-5" />
            <img src={instaIcon} alt="Instagram Icon" className="w-5 h-5" />
            <img src={ytIcon} alt="Youtube Icon" className="w-5 h-5" />
          </div>
        </div>
      </footer>

      <div className="bg-[#181818] h-[88px] text-white flex justify-center items-center">
        <p className="text-base font-normal text-center">
          © 2023 <span className="text-[#A5886D]">Renaissance</span>. Designed
          by <span className="text-[#A5886D]">EffeThemes</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
