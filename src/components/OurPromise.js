import React from "react";
import Button from "./button";

const OurPromice = () => {
  return (
    <div className=" flex items-center py-10">
      <div className="w-4/5">
        <img src={require("../assets/ourpromise.jpg")} />
      </div>
      <div className="flex flex-col w-4/5 items-center ">
        <h4 className="text-3xl font-bold ">OUR PROMISE</h4>
        <h4 className="text-md w-2/3 text-center">
          Boss-level styles that perform like you do. Business casual for
          healthcare is here — now in Oak and Willow.
        </h4>
        <div className="flex items-center py-5 ">
          <Button label={"Shop Women"} staticbutton={true} />
          <Button label={"Shop Men"} staticbutton={true} />
        </div>
      </div>
    </div>
  );
};

export default OurPromice;
