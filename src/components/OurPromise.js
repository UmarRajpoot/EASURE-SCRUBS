import React from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import OurPromise from "../assets/OurPromise/ourpromise.png";

const OurPromice = () => {
  const navigate = useNavigate();

  const Strip = ({ image, title }) => {
    return (
      <>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={"5"}
        >
          <img src={image} width={80} height={80} />
          <Text>{title}</Text>
        </Box>
        <Divider />
      </>
    );
  };

  return (
    <HStack>
      <Box>
        <img src={OurPromise} width={"100%"} height={"100%"} />
      </Box>
      <Box w={"50%"}>
        <Box>
          <Text>TECHNOLOGY WITH</Text>
          <Text>EASURE-SCRUBS</Text>
        </Box>
        <Box>
          <Strip
            image={"/Images/OurPromiseAni/ANTI-WRINKLE.gif"}
            title={"ANTI-WRINKLE"}
          />
          <Strip
            image={"/Images/OurPromiseAni/ANTI-MICROBIAL FINISH - PEWT.gif"}
            title={"ANTI-MICROBIAL FINISH"}
          />
          <Strip
            image={"/Images/OurPromiseAni/EXTREMELY SOFT - PEWT.gif"}
            title={"EXTREMELY SOFT"}
          />
          <Strip
            image={"/Images/OurPromiseAni/4-WAY STRETCH - PEWT.gif"}
            title={"4-WAY STRETCH"}
          />
          <Strip
            image={"/Images/OurPromiseAni/FADE RESISTANCE-PEWT.gif"}
            title={"FADE RESISTANCE"}
          />
        </Box>
      </Box>
    </HStack>
  );
};

export default OurPromice;
