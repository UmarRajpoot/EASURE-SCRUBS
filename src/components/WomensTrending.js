import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Config/URL";
import { Image } from "@chakra-ui/react";

const WomensTrending = () => {
  const [womenTrend, setWomenTrend] = useState([]);

  const getWomensProduct = async () => {
    return await axios
      .get(`${BASEURL}/Product`)
      .then((resp) => {
        // console.log(resp.data);

        setWomenTrend(resp.data.response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    getWomensProduct();
  }, []);

  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Womens Trending
      </h3>
      <div className="flex overflow-x-auto  overflow-y-hidden no-scrollbar w-full">
        {womenTrend?.map((WTrend, index) => {
          if (WTrend.parentcategory === "WOMEN") {
            if (WTrend.trend === true) {
              // console.log(WTrend.displayImage);
              return (
                <Link
                  to={`/products/${WTrend.productname.toLowerCase()}/women`}
                  key={index.toString()}
                >
                  <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
                    <div className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center">
                      <Image
                        src={WTrend.productimage && WTrend.productimage[0]}
                        // onLoad={() => console.log("loading")}
                      />
                      <div className="p-2 text-base font-bold text-gray-500 ">
                        <h1>
                          {WTrend.personname && WTrend?.personname[0]}
                          {WTrend.personname &&
                            WTrend?.personname?.slice(1).toLowerCase()}
                          -
                          {WTrend.varientname &&
                            WTrend?.varientname?.toLowerCase()}
                          -{WTrend.typename && WTrend?.typename?.toLowerCase()}-
                          {WTrend.typestylename && WTrend?.typestylename[0]}
                          {WTrend.typestylename &&
                            WTrend?.typestylename?.slice(1).toLowerCase()}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          }
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
