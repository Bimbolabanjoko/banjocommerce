import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import imgOne from "../assets/frontend_assets/jocole.png";

const Footer = () => {
  const images = [imgOne];
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={imgOne} alt="" srcset="" className="h-[100px] w-[100px] " />
          <p className="w-full text-gray">
            Banjo Reality is a leading property development cpmpany in africa.
            with a focus on luxury and affordability, Banjo real estate offers a
            range of properties from apartments to duplexes.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Lagacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>08173147130</li>
            <li>jocole@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center py-5 text-gray-700 text-sm">
          Copyright2024@banjocole.com -All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
