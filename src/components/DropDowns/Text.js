import React from "react";

const Text = ({ text }) => {
  return (
    <h3 className={`textDropDown group pb-1`}>
      {text}
      <span
        className={`w-0 group-hover:w-full h-0.5 bg-gray-600 absolute bottom-0 left-0 transition-all ease-in-out duration-200 `}
      ></span>
    </h3>
  );
};

export default Text;
