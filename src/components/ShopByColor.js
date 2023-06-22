import React from "react";

import BlackZoom from "../assets/Kamal0363.jpg";
import BlueZoom from "../assets/Kamal0623.jpg";
import SealZoom from "../assets/Kamal0614.jpg";

const ShopByColor = () => {
  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Shop By Color
      </h3>
      <div className="flex  overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200  ">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${BlackZoom})`,
            }}
          ></div>
          <h5 className="text-gray-800 text-sm md:text-md font-semibold mt-2">
            BLACK
          </h5>
        </div>
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200  ">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${BlueZoom})`,
            }}
          ></div>
          <h5 className="text-gray-800 text-sm md:text-md font-semibold mt-2">
            BLUE
          </h5>
        </div>
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 ">
          {/* <div className="bg-[#485964] h-80 w-64 rounded-lg hover:drop-shadow-xl "></div> */}
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${SealZoom})`,
            }}
          ></div>
          <h5 className=" text-gray-800 text-sm md:text-md font-semibold mt-2">
            SEAL BLUE
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ShopByColor;
