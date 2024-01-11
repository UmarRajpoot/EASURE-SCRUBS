import React from "react";
import HeroSection from "../components/HeroSection";
import ShopByColor from "../components/ShopByColor";
import ShopWomen from "../components/ShopWomen";
import MensShop from "../components/MensShop";
import OurPromise from "../components/OurPromise";
import NewsLetter from "../components/NewsLetter";
import ModelBanner from "../components/Model/ModelBanner";
import Features from "../components/Features";

const index = () => {
  return (
    <div>
      <HeroSection />
      <ShopByColor />
      <Features />
      <ShopWomen />
      <MensShop />
      <OurPromise />
      <NewsLetter />
      <ModelBanner />
    </div>
  );
};

export default index;
