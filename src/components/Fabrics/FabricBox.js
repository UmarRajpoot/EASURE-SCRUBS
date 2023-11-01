import { Box, Text } from "@chakra-ui/react";
import React from "react";

const FabricBox = ({
  image,
  pri_Color,
  title,
  desc,
  fabricAnimation,
  shopBtn,
  shopbtnColor,
}) => {
  return (
    <Box
      width={"full"}
      height={"container.md"}
      bgPosition={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      overflow={"hidden"}
      bgImage={image}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        zIndex={"1"}
        w={"full"}
        height={"full"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {fabricAnimation && (
          <img src={fabricAnimation} width={200} height={200} />
        )}
        <Text
          fontSize={"2xl"}
          color={pri_Color && "gray.100"}
          fontWeight={"bold"}
          userSelect={"none"}
        >
          {title}
        </Text>
        <Text
          fontSize={"lg"}
          color={pri_Color && "gray.100"}
          textAlign={"center"}
          w={"50%"}
          lineHeight={"5"}
          mt={"2"}
          userSelect={"none"}
        >
          {desc}
        </Text>
        {shopBtn && (
          <Box
            bgColor={shopbtnColor}
            px={"10"}
            py={"2.5"}
            rounded={"full"}
            mt={"10"}
            _hover={{
              cursor: "pointer",
              opacity: "0.9",
            }}
          >
            <Text color={"white"} fontWeight={"bold"} userSelect={"none"}>
              SHOP NOW
            </Text>
          </Box>
        )}
      </Box>
      <Box
        bgColor={pri_Color || "gray.100"}
        width={"100%"}
        height={"100%"}
        opacity={"0.5"}
      ></Box>
    </Box>
  );
};

export default FabricBox;
