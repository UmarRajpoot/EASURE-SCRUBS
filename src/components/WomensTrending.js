import React, { useEffect, useState } from "react";

import Women1 from "../assets/Kamal0332.jpg";
import Women2 from "../assets/Kamal0626.jpg";
import Women3 from "../assets/Kamal0527.jpg";
import { Link } from "react-router-dom";
import { WomenTrending } from "../components/Date/ProductData";

const WomensTrending = () => {
  const [womenTrend, setWomenTrend] = useState([]);

  const getWomenTrending = () => {
    setWomenTrend(WomenTrending);
  };
  useEffect(() => {
    getWomenTrending();
  }, []);

  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Womens Trending
      </h3>
      <div className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        {womenTrend?.map((WTrend, index) => {
          return (
            <Link
              to={`/products/${WTrend.name.split(" ").join("-")}/womens`}
              key={index}
            >
              <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
                <div
                  className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${WTrend.productImage})`,
                  }}
                ></div>
              </div>
            </Link>
          );
        })}
        {/* <Link to={"/products/Bev-one-pocket-scrub-Top/women"}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Women2})`,
              }}
            ></div>
          </div>
        </Link>
        <Link to={"/products/Vincent-classic-scrub-and-Top/women"}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Women3})`,
              }}
            ></div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default WomensTrending;
