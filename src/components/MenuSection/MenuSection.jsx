import React, { useState, useEffect } from "react";
import axios from "axios";

import bgImage from "../../assets/OurMenuBgImage/OurMenuSection.jpg";
import divider from "../../assets/OurMenuBgImage/SectionDivider.png";
import headingCentralUnderline from "../../assets/OurMenuBgImage/HeadingCentralUnderline.png";

function MenuSection() {
  const [menuItems, setMenuItems] = useState([]);

  // Fetching the Menu list from the database "luxuryRestaurant"'s table "menu"
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/menu")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="items-center my-[156.8px] font-monda"
    >
      <div className="px-[230px] py-14">
        <div className="text-center pb-14">
          <h2 className="text-[#B7A08A] text-[39px] leading-[48px] font-bold font-monda">
            Our Menu
          </h2>
          <img
            className="mx-auto block pt-5 pb-10"
            src={headingCentralUnderline}
            alt="Heading Central Underline"
          />
          <p className="text-base text-white font-normal font-monda">
            Our menu showcases a diverse selection of sushi creations, expertly
            crafted by our skilled sushi chefs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center text-white pb-2">
              <span className="text-2xl font-bold">
                {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
              </span>
              <div className="w-full pl-2">
                <div className="flex items-center w-full justify-between ">
                  <span className="text-[20px] leading-8 font-normal">
                    {item.itemName}
                  </span>
                  <div className="flex-grow mx-2 border-[#B7A08A] border-t h-[5px] border-b"></div>
                  <span className="text-base font-normal">
                    ${item.itemPrice.toFixed(2)}
                  </span>
                </div>
                <div className="text-[13px] leading-4 font-normal">
                  {item.itemDescription}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-14">
          <button className="items-center bg-gradient-to-b from-[#7B5638] to-[#CBBAAB] text-white font-bold w-[174px] h-[44px] rounded-tl-[150px] rounded-br-[150px] rounded-tr-none rounded-bl-none mt-6">
            Discover More
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${divider})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[62.75px]"
      ></div>
    </div>
  );
}

export default MenuSection;
