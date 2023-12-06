import React from "react";

const button = ({ label, staticbutton, styles, onClick }) => {
  return (
    <div
      className={`h-full flex items-center justify-end md:mr-10  `}
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
          className={`hero-button bg-white text-black font-semibold text-xs md:text-sm cursor-pointer hover:bg-black hover:text-white px-4 md:px-10 py-3 flex transition-colors ease-in-out duration-500 ${styles}`}
        >
          {label}
        </a>
      )}
    </div>
  );
};

export default button;
