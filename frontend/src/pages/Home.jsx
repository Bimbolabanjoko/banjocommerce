import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellar from "../components/BestSellar";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <LatestCollection />
      <BestSellar />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
