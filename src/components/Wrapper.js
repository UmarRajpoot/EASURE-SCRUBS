import React from "react";
import NavBarComp from "./NavbarComp";
import Footer from "./Footer";
import Banner from "./Banner/Banner";
import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Banner />
      <Box>
        <NavBarComp />
      </Box>
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
