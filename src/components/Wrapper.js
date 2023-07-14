import React from "react";
import NavBarComp from "./NavbarComp";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full h-full ">
      <NavBarComp />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
