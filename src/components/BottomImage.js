import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const BottomImage = () => {
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        p={["10", "20"]}
        w={"full"}
        h={"full"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Text
          fontSize={["xl", "4xl"]}
          color={"white"}
          fontWeight={["bold", "medium"]}
          w={["52", "full"]}
        >
          CHALLENGES MOLD THE JOURNEY,
        </Text>
        <Text
          fontSize={["xl", "4xl"]}
          color={"white"}
          fontWeight={["bold", "medium"]}
          w={["52", "full"]}
        >
          REVEALING HOPE'S TRUE ESSENCE
        </Text>
      </Box>
      <Image
        src={"/Images/BottomImagefull.png"}
        w={"full"}
        h={["full", "80vh"]}
        display={"flex"}
      />
    </Box>
  );
};

export default BottomImage;
