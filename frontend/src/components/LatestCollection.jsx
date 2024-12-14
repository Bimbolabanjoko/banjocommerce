import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import Title from "./Title";
import Productitem from "./Productitem";
import { useState } from "react";
import { useEffect } from "react";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10 animate-scroll-left">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"LISTING"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Luxurios 5-bedroom fully detached duplex in ikoyi, The interior
          feautures lavish finishes, includingworld class ammenenities
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
