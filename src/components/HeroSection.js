import React from "react";
import MensImage from "../assets/Kamal0729-min.jpg";
import WomenImage from "../assets/Kamal0633-min.jpg";
import Button from "./button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <section className="hero-section bg-[#eeeeef] pt-5">
        <div className="container mx-auto flex flex-row h-80 md:h-96 lg:h-screen">
          <div
            className="w-full md:w-1/2 h-full bg-contain bg-right bg-no-repeat hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-2xl cursor-pointer"
            style={{
              backgroundImage: `url(${MensImage})`,
            }}
          >
            <Link to={"/collection/black-scrubs-men"}>
              <Button label={"Shop Men →"} />
            </Link>
          </div>
          <div
            className={`w-full md:w-1/2 h-full bg-contain bg-left bg-no-repeat hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-2xl cursor-pointer`}
            style={{ backgroundImage: `url(${WomenImage})` }}
          >
            <Link to={"/collection/navy-blue-scrubs-women"}>
              <div className="h-full flex items-center md:ml-10">
                <Button label={"Shop Women →"} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
