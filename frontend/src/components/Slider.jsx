import React from "react";
// import "./slider.css"; // Custom styles for smooth infinite scroll
import imgOne from "../assets/frontend_assets/house1.png";
import imgTwo from "../assets/frontend_assets/house2.png";
import imgThree from "../assets/frontend_assets/house3.png";
import imgFour from "../assets/frontend_assets/house4.png";
import imgFive from "../assets/frontend_assets/house5.png";
import imgSix from "../assets/frontend_assets/house6.png";

const Slider = () => {
  const images = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, ,];

  return (
    <div className="overflow-hidden relative mt-8">
      <div className="flex whitespace-nowrap animate-scroll">
        {images.map((image, index) => (
          <div key={index} className="w-64 h-60 mx-2 flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
        {images.map((image, index) => (
          <div
            key={index + images.length}
            className="w-64 h-60 mx-2 flex-shrink-0"
          >
            <img
              src={image}
              alt={`Slide duplicate ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
