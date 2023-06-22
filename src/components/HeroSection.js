import React from "react";
import MensImage from "../assets/Kamal0729.jpg";
import WomenImage from "../assets/Kamal0633.jpg";

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <section className="hero-section bg-[#eeeeef] pt-5">
        <div className="container mx-auto flex flex-row h-80 md:h-96 lg:h-screen">
          <div
            className="w-full md:w-1/2 h-full bg-contain bg-right bg-no-repeat hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-2xl"
            style={{
              backgroundImage: `url(${MensImage})`,
            }}
          >
            <div className="h-full flex items-center justify-end md:mr-10">
              <a
                href=""
                className="hero-button text-gray-400 hover:text-gray-100 text-xs md:text-lg hover:bg-black px-3 md:px-5 py-2.5 flex  transition-colors ease-in-out duration-500"
              >
                Shop Men →
              </a>
            </div>
          </div>
          <div
            className={`w-full md:w-1/2 h-full bg-contain bg-left bg-no-repeat hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-2xl`}
            style={{ backgroundImage: `url(${WomenImage})` }}
          >
            <div className="h-full flex items-center md:ml-10">
              <a
                href=""
                className="hero-button text-gray-400 hover:text-gray-100  text-xs md:text-lg hover:bg-black px-3 md:px-5 py-2.5 flex transition-colors ease-in-out duration-500"
              >
                Shop Women →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
