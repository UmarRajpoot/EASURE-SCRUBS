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
        direction={"column"}
        alignItems={"center"}
        // justifyContent={"center"}
        flex={1}
      >
        <Box w={"28"} h={"28"}>
          <Image src={image} />
        </Box>
        <Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text textAlign={"center"} noOfLines={"2"} w={["40", "80"]}>
            {desc}
          </Text>
        </Box>
      </Stack>
    );
  };

  return (
    <Box p={"20"} bgColor={"gray.200"}>
      <Stack direction={["column", "column", "column", "row"]}>
        {FeatureItems.map((feature, index) => {
          return (
            <FeatureItem
              image={feature.image}
              title={feature.title.toUpperCase()}
              desc={feature.desc}
              key={index}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Features;
