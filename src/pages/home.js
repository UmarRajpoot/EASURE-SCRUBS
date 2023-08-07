import React from "react";
import HeroSection from "../components/HeroSection";
import ShopByColor from "../components/ShopByColor";
import WomensTrending from "../components/WomensTrending";
import MensTrending from "../components/MensTrending";
import OurPromise from "../components/OurPromise";
import NewsLetter from "../components/NewsLetter";

const index = () => {
  return (
    <div>
      <HeroSection />
      <ShopByColor />
      <WomensTrending />
      <MensTrending />
      <OurPromise />
      <NewsLetter />
    </div>
  );
};

export default index;
