import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import FabricBox from "../../components/Fabrics/FabricBox";

const Fabric = () => {
  const [currentFabric, _] = useState(Math.floor(Math.random() * 6));

  const fabrics = [
    {
      fabric_Name: "BLACK",
      fabricImage: "/Images/FabricsBg/Black.png",
      pri_Color: "#444444",
      fabricAnimation: [
        "/Images/FabrAnimations/ANTI-WRINKLE.gif",
        "/Images/FabrAnimations/Black/Anti-Microbial Finish - Black.gif",
        "/Images/FabrAnimations/Black/4-WAY STRETCH - BLACK.gif",
        "/Images/FabrAnimations/EXTREMELY SOFT.gif",
        "/Images/FabrAnimations/FADE RESISTANCE.gif",
      ],
    },
    {
      fabric_Name: "CEIL BLUE",
      fabricImage: "/Images/FabricsBg/Ceil-Blue.png",
      pri_Color: "#83A6CC",
      fabricAnimation: [
        "/Images/FabrAnimations/ANTI-WRINKLE.gif",
        "/Images/FabrAnimations/Ceil-Blue/Anti-Microbial Finish - Ceil Blue.gif",
        "/Images/FabrAnimations/Ceil-Blue/4-WAY STRETCH - CEIL BLUE.gif",
        "/Images/FabrAnimations/EXTREMELY SOFT.gif",
        "/Images/FabrAnimations/FADE RESISTANCE.gif",
      ],
    },
    {
      fabric_Name: "NAVY BLUE",
      fabricImage: "/Images/FabricsBg/Navy-Blue.png",
      pri_Color: "#081D48",
      fabricAnimation: [
        "/Images/FabrAnimations/ANTI-WRINKLE.gif",
        "/Images/FabrAnimations/Navy-Blue/Anti-Microbial Finish - NAVY BLUE.gif",
        "/Images/FabrAnimations/Navy-Blue/4-WAY STRETCH - NAVY BLUE.gif",
        "/Images/FabrAnimations/EXTREMELY SOFT.gif",
        "/Images/FabrAnimations/FADE RESISTANCE.gif",
      ],
    },
    {
      fabric_Name: "PEWT",
      fabricImage: "/Images/FabricsBg/Pewt.png",
      pri_Color: "#465775",
      fabricAnimation: [
        "/Images/FabrAnimations/ANTI-WRINKLE.gif",
        "/Images/FabrAnimations/pewt/Anti-Microbial Finish - PEWT.gif",
        "/Images/FabrAnimations/pewt/4-WAY STRETCH - pewt.gif",
        "/Images/FabrAnimations/EXTREMELY SOFT.gif",
        "/Images/FabrAnimations/FADE RESISTANCE.gif",
      ],
    },
    {
      fabric_Name: "ROYAL BLUE",
      fabricImage: "/Images/FabricsBg/Royal-Blue.png",
      pri_Color: "#2D65D6",
      fabricAnimation: [
        "/Images/FabrAnimations/ANTI-WRINKLE.gif",
        "/Images/FabrAnimations/Royal-Blue/Anti-Microbial Finish - Royal Blue.gif",
        "/Images/FabrAnimations/Royal-Blue/4-WAY STRETCH - ROYAL BLUE.gif",
        "/Images/FabrAnimations/EXTREMELY SOFT.gif",
        "/Images/FabrAnimations/FADE RESISTANCE.gif",
      ],
    },
    {
      fabric_Name: "WINE",
      fabricImage: "/Images/FabricsBg/Wine.png",
      pri_Color: "#913A71",
      fabricAnimation: [
        "/Images/FabrAnimations/ANTI-WRINKLE.gif",
        "/Images/FabrAnimations/Wine/Anti-Microbial Finish - Wine.gif",
        "/Images/FabrAnimations/Wine/4-WAY STRETCH - WINE.gif",
        "/Images/FabrAnimations/EXTREMELY SOFT.gif",
        "/Images/FabrAnimations/FADE RESISTANCE.gif",
      ],
    },
  ];

  return (
    <Box>
      <Box position={"relative"}>
        <Text
          position={"absolute"}
          color={"white"}
          w={"full"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          fontSize={["md", "5xl"]}
          fontWeight={"bold"}
        >
          FABRIC TECHNOLOGY
        </Text>
        <Text
          fontSize={["md", "5xl"]}
          fontWeight={"bold"}
          color={"white"}
          position={"absolute"}
          w={"full"}
          height={"100%"}
          alignItems={"end"}
          display={"flex"}
          p={"2.5"}
        >
          {fabrics[currentFabric].fabric_Name}
        </Text>
        <Image
          src={fabrics[currentFabric].fabricImage}
          width={"100%"}
          height={["200px", "100%"]}
        />
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={["md", "xl"]} p={"8"} fontWeight={"bold"}>
          EXPLORE OUR FABRICS
        </Text>
      </Box>
      {/* First Row */}
      <HStack spacing={0}>
        <FabricBox
          image={"/Images/FabrBoxBg/ANTI-WRINKLE.png"}
          pri_Color={fabrics[currentFabric].pri_Color}
          title={"ANTI-WRINKLE"}
          desc={
            "The stuff is manufactured to restraint the formation of any fold or crease. This feature makes it remain afresh and reckless."
          }
          fabricAnimation={fabrics[currentFabric].fabricAnimation[0]}
        />
        <FabricBox
          image={"/Images/FabrBoxBg/anti-mic-copy.png"}
          title={"ANTI-MICROBIAL FINISH"}
          desc={
            "This advanced fabric is designed to withstand bacterial and fungal infections. This futuristic feature helps in protecting customers from infection and spread of certain diseases."
          }
          fabricAnimation={fabrics[currentFabric].fabricAnimation[1]}
        />
      </HStack>
      {/* Second Row */}
      <HStack spacing={0}>
        <FabricBox
          image={"/Images/FabrBoxBg/4-way-stretch.png"}
          title={"4-WAY STRETCH"}
          desc={
            "It has the ability to expand when subjected to physical force, such as stretching or pulling, and then return to their original shape and size when the force is released."
          }
          fabricAnimation={fabrics[currentFabric].fabricAnimation[2]}
        />
        <FabricBox
          image={"/Images/FabrBoxBg/EXTREMELY-SOFT.png"}
          title={"EXTREMELY SOFT"}
          pri_Color={fabrics[currentFabric].pri_Color}
          desc={
            "The stuff is so soft that it provides both luxury and comfort. It doesn’t last strong or hard impressions on skin."
          }
          fabricAnimation={fabrics[currentFabric].fabricAnimation[3]}
        />
      </HStack>
      {/* Third Row */}
      <HStack spacing={0}>
        <FabricBox
          image={"/Images/FabrBoxBg/FADE-RESISTANCE.png"}
          pri_Color={fabrics[currentFabric].pri_Color}
          title={"FADE RESISTANCE"}
          desc={
            "Despite of using for a long period, this incredible substance remains unfaded and preserved."
          }
          fabricAnimation={fabrics[currentFabric].fabricAnimation[4]}
        />
        <FabricBox
          image={"/Images/FabrBoxBg/SHOP-NOW.png"}
          title={"EASURESCRUBS"}
          desc={
            "products provide you excellent comfort and luxurious qualities, enhancing your social and living experiences."
          }
          shopBtn={true}
          shopbtnColor={fabrics[currentFabric].pri_Color}
        />
      </HStack>
    </Box>
  );
};

export default Fabric;
