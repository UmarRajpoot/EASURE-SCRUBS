import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Features = () => {
  const FeatureItems = [
    {
      image: "/Images/Features/Artboard2.svg",
      title: "Comfort fit",
      desc: "Feel Free to wear and return any product within 60 days, no question asked.",
    },
    {
      image: "/Images/Features/Artboard1.svg",
      title: "Free Shipping",
      desc: "On all U.S over $50 or above",
    },
    {
      image: "/Images/Features/Artboard3.svg",
      title: "Quality Guaranteed",
      desc: "Quality in Every Thread Guaranteed",
    },
  ];

  const FeatureItem = ({ title, desc, image }) => {
    return (
      <Stack
        direction={["row"]}
        alignItems={"start"}
        justifyContent={"start"}
        p={"5"}
      >
        <Box w={["16"]} h={["16"]}>
          <Image src={image} />
        </Box>
        <Box pl={"3"}>
          <Text textAlign={["start"]} fontWeight={"bold"} fontSize={"xs"}>
            {title}
          </Text>
          <Text
            textAlign={["start"]}
            noOfLines={["", "2"]}
            w={["60"]}
            color={"gray.600"}
            fontSize={["xs"]}
          >
            {desc}
          </Text>
        </Box>
      </Stack>
    );
  };

  return (
    <Box
      // px={["7", "10"]}
      py={["7", "10"]}
      // bgColor={"gray.100"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack direction={["column", "column", "column", "row"]} spacing={"5"}>
        {FeatureItems.map((feature, index) => {
          return (
            <Box bgColor={"gray.300"} rounded={"xl"} mx={"5"}>
              <FeatureItem
                image={feature.image}
                title={feature.title.toUpperCase()}
                desc={feature.desc}
                key={index}
              />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Features;
