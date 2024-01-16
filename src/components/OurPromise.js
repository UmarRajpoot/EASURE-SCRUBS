import React from "react";
import { Box, Divider, Image, Stack, Text } from "@chakra-ui/react";
import OurPromise from "../assets/OurPromise/main page.png";

const OurPromice = () => {
  const Strip = ({ image, title }) => {
    return (
      <>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={"5"}
          // w={["80px", "150px"]}
          // h={["80px", "150px"]}
        >
          <Image src={image} width={[20, 28]} height={[20, 28]} />
          <Text>{title}</Text>
        </Box>
        <Divider />
      </>
    );
  };

  return (
    <Stack direction={["column", "row"]} bgColor={"#c4c9d1"}>
      <Box>
        <img src={OurPromise} width={"100%"} height={"100%"} />
      </Box>
      <Box w={["full", "50%"]}>
        <Box p={"5"}>
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
    </Stack>
  );
};

export default OurPromice;
