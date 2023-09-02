import React from "react";

const button = ({ label, staticbutton, styles, onClick }) => {
  return (
    <div
      className={`h-full flex items-center justify-end md:mr-10  hover:cursor-pointer `}
      onClick={onClick}
    >
      {staticbutton ? (
        <a
          // href=""
          className="hero-button text-gray-600 underline underline-offset-8 text-xs md:text-lg px-3 md:px-5 py-2.5 flex transition-colors ease-in-out duration-500"
        >
          {label}
        </a>
      ) : (
        <a
          // href=""
          className={`hero-button text-gray-400 font-semibold hover:text-gray-100 text-xs md:text-lg hover:bg-black px-3 md:px-5 py-2.5 flex transition-colors ease-in-out duration-500 ${styles}`}
        >
          {label}
        </a>
      )}
    </div>
  );
};

export default button;
