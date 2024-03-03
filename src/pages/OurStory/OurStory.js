import React from "react";
import OurStory5 from "../../assets/OurStory/OurStory5-min.jpg";
import ModelPhoto from "../../assets/OurStory/Modelphoto-min.png";
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const OurStory = () => {
  return (
    <div className="">
      <div
        className={`flex flex-col h-60 md:h-96 lg:h-screen bg-contain md:bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${OurStory5})`,
        }}
      ></div>
      <div className="flex items-center justify-center my-20">
        <Text
          textAlign={"center"}
          w={["80%", "50%"]}
          fontSize={"xl"}
          lineHeight={"8"}
        >
          Designed by dentists, we understand the importance of comfort and
          style in our daily work attire. That's why we created EASURE Scrubs.
          Our team understands the unique needs of healthcare professionals like
          you. We believe that your work attire should not only meet the highest
          standards of quality but also reflect your personal style and provide
          unmatched comfort throughout your demanding day
        </Text>
      </div>

      <Stack
        spacing={"10"}
        direction={["column", "row"]}
        className="flex flex-col md:flex-row items-center justify-center my-40"
      >
        <Box w={"80"} h={"80"}>
          <img
            src={ModelPhoto}
            width={"100%"}
            height={"100%"}
            alt="modelphoto"
          />
        </Box>
        <Box w={["70%", "40%"]}>
          <Text fontWeight={"bold"} fontSize={"3xl"} mt={"10"} mb={"5"}>
            OUR MISSION
          </Text>
          <Text textAlign={["left"]} fontSize={"lg"} lineHeight={"8"}>
            At EASURE Scrubs, we bring modern and innovative technology
            solutions to the forefront of our designs. We are committed to
            revolutionizing healthcare fashion. EASURE Scrubs is more than just
            a brand; it's a commitment to providing healthcare professionals
            with the highest quality, stylish, and comfortable scrubs. We don’t
            just offer quality products; we also strive to empower
            underprivileged individuals by equipping them with the resources
            needed to enhance their lives and contribute to their families and
            communities
          </Text>
        </Box>
      </Stack>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box w={["80%", "60%"]}>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            muted
            playing
            url={
              "https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/women%20final%20reneder.mp4?alt=media&token=b63eb885-9650-416b-a7c9-d112caa06f47"
            }
          />
        </Box>
      </Box>
      <VStack className="flex flex-col items-center justify-center my-32">
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          FABRIC INNOVATION
        </Text>
        <Text
          w={["80%", "50%"]}
          textAlign={["left", "center"]}
          fontSize={"lg"}
          lineHeight={"8"}
        >
          EASURE Scrubs revolutionizes healthcare fashion. Our scrubs are
          designed with modern technology for unparalleled comfort during long
          shifts. Our scrubs are crafted with anti-wrinkle properties, ensuring
          that you always look polished and professional, no matter how busy
          your schedule gets. We also prioritize your safety and well-being. Our
          scrubs feature anti-microbial properties, providing an extra layer of
          protection against harmful bacteria and germs. We also know that
          durability is essential. Our fade-resistant fabric ensures that your
          scrubs maintain their vibrant color and appearance, wash after wash.
          EASURE Scrubs is more than just a brand; it's a commitment to
          providing healthcare professionals with the highest quality, stylish,
          and comfortable scrubs. Join us in elevating your work attire to new
          heights. Experience the perfect blend of quality, style, and comfort
          with EASURE Scrubs. Your patients deserve the best, and so do you.
        </Text>
      </VStack>
    </div>
  );
};

export default OurStory;
