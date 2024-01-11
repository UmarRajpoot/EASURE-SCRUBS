import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box bgColor={"black"} p={"2"}>
      <Text
        textAlign={"center"}
        textColor={"white"}
        fontSize={"xs"}
        fontWeight={"bold"}
      >
        FREE SHIPPING FOR $50+ ORDERS AND FREE RETURNS
      </Text>
    </Box>
  );
};

export default Banner;
