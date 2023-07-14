import React from "react";

import BlackZoom from "../assets/Kamal0363.jpg";
import BlueZoom from "../assets/Kamal0623.jpg";
import SealZoom from "../assets/Kamal0614.jpg";
import { Link } from "react-router-dom";
import { ProductData } from "./Date/ProductData";

const ShopByColor = () => {
  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Shop By Color
      </h3>
      <div className="flex  overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        {ProductData.map((shBC) => {
          return (
            <Link to={`/collections/${shBC.Color.split(" ").join("-")}`}>
              <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer ">
                <div
                  className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${shBC.ColorsImage})`,
                  }}
                ></div>
                <h5 className="text-gray-800 text-sm md:text-md font-semibold mt-2">
                  {shBC.Color}
                </h5>
              </div>
            </Link>
          );
        })}
        {/* <Link to={`/collections/blue-scrubs-mens`}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer ">
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
        </Link> */}
        {/* <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer ">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${SealZoom})`,
            }}
          ></div>
          <h5 className=" text-gray-800 text-sm md:text-md font-semibold mt-2">
            SEAL BLUE
          </h5>
        </div> */}
      </div>
    </div>
  );
};

export default ShopByColor;
