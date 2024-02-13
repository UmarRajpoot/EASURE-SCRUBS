import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

import HomeImage from "../assets/home/Wine-min.png";
import { HStack, Text } from "@chakra-ui/react";

// bg-[#eeeeef]

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <section className="hero-section ">
        <div
          className={`flex flex-col h-80 md:h-96 lg:h-screen bg-cover bg-no-repeat bg-center relative items-center justify-center `}
          style={{
            backgroundImage: `url(${HomeImage})`,
          }}
        >
          <div>
            <Text
              fontSize={["5xl", "8xl"]}
              color={"white"}
              fontWeight={"medium"}
              mt={"5"}
              letterSpacing={"wider"}
            >
              WINE
            </Text>
          </div>
          <HStack spacing={["10", "40"]} my={["3", "6"]}>
            <Link to={"/viewall/scrubs/men"}>
              <Text
                bgColor={"white"}
                px={["5", "10"]}
                py={"3"}
                fontWeight={"semibold"}
                _hover={{
                  bgColor: "black",
                  color: "white",
                }}
              >
                Shop Men →
              </Text>
            </Link>
            <Link to={"/viewall/scrubs/women"}>
              <Text
                bgColor={"white"}
                px={["5", "10"]}
                py={"3"}
                fontWeight={"semibold"}
                _hover={{
                  bgColor: "black",
                  color: "white",
                }}
              >
                Shop Women →
              </Text>
              {/* <Button label={"Shop Women →"} /> */}
            </Link>
          </HStack>
          <div>
            <Text fontSize={["2xl", "4xl"]} color={"white"}>
              MAGIC OF THREADS
            </Text>
          </div>
          {/* <div
            // className={`w-full md:w-1/2 h-full bg-contain bg-left bg-no-repeat hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-2xl cursor-pointer`}
            className={`w-full md:w-1/2`}
            // style={{ backgroundImage: `url(${WomenImage})` }}
          >
           
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
