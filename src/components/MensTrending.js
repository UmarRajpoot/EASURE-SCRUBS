import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../Config/URL";
import axios from "axios";
import { Image } from "@chakra-ui/react";

const MensTrending = () => {
  const [MensTrend, setMensTrend] = useState([]);

  const getMensTrending = async () => {
    return await axios
      .get(`${BASEURL}/Product`)
      .then((resp) => {
        // console.log(resp.data);
        setMensTrend(resp.data.response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    getMensTrending();
  }, []);
  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Mens Trending
      </h3>
      <div className="flex overflow-x-auto  overflow-y-hidden">
        {MensTrend.map((mensT, index) => {
          if (mensT.parentcategory === "MEN") {
            return (
              <Link
                to={`/products/${mensT.productname.toLowerCase()}/men`}
                key={index.toString()}
              >
                <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
                  <div className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center">
                    <Image
                      src={mensT.productimage && mensT.productimage[0]}
                      onLoad={() => console.log("loading")}
                    />
                  </div>
                </div>
              </Link>
            );
          }
        })}
        {/* <Link to={"/products/Lex-one-pocket-scrub-Top/mens"}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Mens2})`,
              }}
            ></div>
          </div>
        </Link>
        <Link>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Mens3})`,
              }}
            ></div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default MensTrending;
