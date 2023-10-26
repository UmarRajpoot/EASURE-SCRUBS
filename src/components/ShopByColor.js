import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Config/URL";

const ShopByColor = () => {
  const [allColors, setAllColors] = useState([]);

  const getallColors = async () => {
    return await axios
      .get(`${BASEURL}/Colors`)
      .then((resp) => {
        setAllColors(resp.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getallColors();
  }, []);

  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Shop By Color
      </h3>
      <div className="flex  overflow-x-auto overflow-y-hidden no-scrollbar w-full">
        {allColors.map((shBC, index) => {
          return (
            <Link
              to={`/collection/${shBC.name.toLowerCase()}-${shBC.colorType.toLowerCase()}-women`}
              key={index.toString()}
            >
              <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer ">
                <div
                  className=" h-96 w-80 rounded-lg bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${shBC.photo})`,
                  }}
                ></div>
                <h5 className="text-gray-800 text-sm md:text-md font-semibold mt-2">
                  {shBC.name}
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
