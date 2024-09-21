import React from "react";

import img1 from "../../assets/ImageGrid/GridRectangle.jpg";
import img2 from "../../assets/ImageGrid/GridRectangle (2).jpg";
import img3 from "../../assets/ImageGrid/GridRectangle (3).jpg";
import img4 from "../../assets/ImageGrid/GridRectangle (4).jpg";
import img5 from "../../assets/ImageGrid/GridRectangle (5).jpg";
import img6 from "../../assets/ImageGrid/GridRectangle (6).jpg";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4  my-[156.8px]">
      <div className="flex flex-col gap-4">
        <img
          src={img2}
          alt="Food 2"
          className="w-full lg:h-[490px] object-cover"
        />
        <img
          src={img6}
          alt="Food 6"
          className="w-full lg:h-[422px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <img
          src={img3}
          alt="Food 3"
          className="w-full lg:h-[676px] object-cover"
        />
        <img
          src={img5}
          alt="Food 5"
          className="w-full lg:h-[235.92px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <img
          src={img4}
          alt="Food 4"
          className="w-full lg:h-[591px] object-cover"
        />
        <img
          src={img1}
          alt="Food 1"
          className="w-full lg:h-[321px] object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
