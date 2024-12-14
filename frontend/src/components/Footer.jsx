import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" srcset="" className="mb-5 w-32" />

          <p className="w-full text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
            ab voluptatibus quod laborum autem! Reiciendis numquam eligendi esse
            aspernatur tempore error, cupiditate repudiandae fuga impedit velit
            at qui nesciunt?
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
