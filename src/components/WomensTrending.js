import React from "react";

import Women1 from "../assets/Kamal0332.jpg";
import Women2 from "../assets/Kamal0626.jpg";
import Women3 from "../assets/Kamal0527.jpg";

const WomensTrending = () => {
  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Womens Trending
      </h3>
      <div className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl ">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Women1})`,
            }}
          ></div>
        </div>
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Women2})`,
            }}
          ></div>
        </div>
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Women3})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WomensTrending;
