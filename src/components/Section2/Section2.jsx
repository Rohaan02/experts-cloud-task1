import React from "react";
import sushiImage from "../../assets/Section2Images/SushiBoxImage.jpg";
import sashimiImage from "../../assets/Section2Images/SashimiBoxImage.jpg";
import hosomakiImage from "../../assets/Section2Images/HosomakiBoxImage.jpg";

function Section2() {
  const arr = [
    {
      title: "Sushi",
      img: sushiImage,
    },
    {
      title: "Sashimi",
      img: sashimiImage,
    },
    {
      title: "Hosomaki",
      img: hosomakiImage,
    },
  ];

  return (
    <div className="flex lg:flex-row lg:justify-around px-[50px] lg:px-[175px] md:items-center md:gap-4 md:flex-col md:justify-center ">
      {arr.map((item, index) => (
        <div key={index} className="mb-4 md:mb-0">
          <div
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              backgroundPosition: "center",
            }}
            className="border-[#A5886D] border-[5px] lg:w-[299px] lg:h-[473px] flex items-end md:w-[200px] md:h-[280px]"
          >
            <div className="absolute bottom-[25px] w-full h-[70px] flex justify-center items-center">
              <h3 className="bg-[#A5886D] text-xl leading-[32px] font-bold text-white text-center h-[47px] w-full flex justify-center items-center">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section2;
