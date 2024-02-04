import React from "react";
import NavBarComp from "./NavbarComp";
import Footer from "./Footer";
import Banner from "./Banner/Banner";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }) => {
  const location = useLocation();
  return (
    <div className="w-full h-full">
      {location.pathname !== "/checkout" && (
        <Box>
          <Banner />
          <NavBarComp />
        </Box>
      )}
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
