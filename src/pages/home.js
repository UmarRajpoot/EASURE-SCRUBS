import React from "react";
import HeroSection from "../components/HeroSection";
import ShopByColor from "../components/ShopByColor";
import ShopWomen from "../components/ShopWomen";
import MensShop from "../components/MensShop";
import OurPromise from "../components/OurPromise";
import NewsLetter from "../components/NewsLetter";

const index = () => {
  return (
    <div>
      <HeroSection />
      <ShopByColor />
      <ShopWomen />
      <MensShop />
      <OurPromise />
      <NewsLetter />
    </div>
  );
};

export default index;
