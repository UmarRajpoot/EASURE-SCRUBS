import React, { useEffect, useState } from "react";
import Mens1 from "../assets/Kamal0729.jpg";
import Mens2 from "../assets/Kamal0605.jpg";
import Mens3 from "../assets/Kamal0433.jpg";
import { Link } from "react-router-dom";
import { MenTrending } from "../components/Date/ProductData";

const MensTrending = () => {
  const [MensTrend, setMensTrend] = useState([]);

  const getMensTrending = () => {
    setMensTrend(MenTrending);
  };
  useEffect(() => {
    getMensTrending();
  }, []);
  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Mens Trending
      </h3>
      <div className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        {MensTrend.map((mensT) => {
          return (
            <Link to={`/products/${mensT.name.split(" ").join("-")}/mens`}>
              <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
                <div
                  className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${mensT.productImage})`,
                  }}
                ></div>
              </div>
            </Link>
          );
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
