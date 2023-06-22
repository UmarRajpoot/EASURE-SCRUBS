import React from "react";
import Mens1 from "../assets/Kamal0729.jpg";
import Mens2 from "../assets/Kamal0605.jpg";

const MensTrending = () => {
  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Mens Trending
      </h3>
      <div className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl ">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Mens1})`,
            }}
          ></div>
        </div>
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Mens2})`,
            }}
          ></div>
        </div>
        <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl">
          <div
            className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Mens1})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MensTrending;
