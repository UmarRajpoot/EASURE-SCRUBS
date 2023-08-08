import React from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";

const OurPromice = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center py-10">
      <div className=",d:w-4/5">
        <img src={require("../assets/ourpromise.jpg")} />
      </div>
      <div className="flex flex-col mt-10 md:w-4/5 items-center ">
        <h4 className="text-3xl font-bold ">OUR PROMISE</h4>
        <h4 className="text-md w-2/3 text-center">
          Easure: Elevating Comfort and Confidence Through Expertly Crafted
          Scrubs. Experience the Perfect Blend of Style, Functionality, and
          Unmatched Quality, Tailored Just for You
        </h4>
        <div className="flex items-center py-5 ">
          <Button
            label={"Shop Women"}
            staticbutton={true}
            onClick={() => navigate("/collection/Black-scrubs-women")}
          />
          <Button
            label={"Shop Men"}
            staticbutton={true}
            onClick={() => navigate("/collection/Black-scrubs-men")}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPromice;
