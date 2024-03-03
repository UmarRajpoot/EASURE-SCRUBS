import React from "react";
import MenHeader from "../../assets/FitGuide/MEN-min.png";
import WomenHeader from "../../assets/FitGuide/WOMEN-min.png";
import MenCloth from "../../assets/FitGuide/Cloth-mem.png";
import WomenCloth from "../../assets/FitGuide/Cloth-women.jpg";
import {
  Box,
  Stack,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";

const Fitguide = () => {
  const params = useParams();

  // Table Data
  const TableData = [
    [
      {
        name: "SIZES",
      },
      {
        name: "XS",
      },
      {
        name: "S",
      },
      {
        name: "M",
      },
      {
        name: "L",
      },
      {
        name: "XL",
      },
      {
        name: "2XL",
      },
      {
        name: "3XL",
      },
    ],
    [
      {
        name: "CHEST",
      },
      {
        name: "32-34",
      },
      {
        name: "35-37",
      },
      {
        name: "38-40",
      },
      {
        name: "42-44",
      },
      {
        name: "46-48",
      },
      {
        name: "50-52",
      },
      {
        name: "54-56",
      },
    ],
    [
      {
        name: "WAIST",
      },
      {
        name: "25-27",
      },
      {
        name: "28-30",
      },
      {
        name: "31-33",
      },
      {
        name: "35-37",
      },
      {
        name: "39-41",
      },
      {
        name: "43-45",
      },
      {
        name: "47-49",
      },
    ],
    [
      {
        name: "HIP",
      },
      {
        name: "32-34",
      },
      {
        name: "35-37",
      },
      {
        name: "38-40",
      },
      {
        name: "42-44",
      },
      {
        name: "46-48",
      },
      {
        name: "50-52",
      },
      {
        name: "54-56",
      },
    ],
  ];

  return (
    <div>
      <img
        src={params.category === "men" ? MenHeader : WomenHeader}
        width={"100%"}
        height={"100%"}
      />
      <Box bgColor={"gray.300"} p={["2.5", "5"]}>
        <Text
          fontSize={["lg", "xl"]}
          textAlign={"center"}
          fontWeight={"medium"}
        >
          {params.category === "men" ? "MEN'S" : "WOMEN'S"} FIT GUIDE
        </Text>
      </Box>
      <Stack direction={["column", "row"]} my={"5"} mx={"5"}>
        <Box>
          <img
            src={params.category === "men" ? MenCloth : WomenCloth}
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box w={["100%", "40%"]} p={"10"} mt={"10"}>
          <Stack spacing={"8"}>
            <Text
              fontSize={"2xl"}
              fontWeight={"bold"}
              color={params.category === "men" ? "black" : "#721853"}
            >
              HOW TO MEASURE
            </Text>
            <Text color={params.category === "men" ? "black" : "#721853"}>
              Please take the measurement around your chest, just beneath your
              arms, capturing the fullest part of your bust.
            </Text>
            <Text color={params.category === "men" ? "black" : "#721853"}>
              Wrap the tape measure around your waist, ensuring it encircles the
              slimmest part without applying too much tension.
            </Text>
            <Text color={params.category === "men" ? "black" : "#721853"}>
              Take the measurement around the widest part of your hips with your
              feet together.
            </Text>
            <Text color={params.category === "men" ? "black" : "#721853"}>
              Find the distance from the seam in the crotch to the bottom of the
              leg, measuring along the inside of the pant.
            </Text>
          </Stack>
        </Box>
      </Stack>
      <Box
        bgColor={params.category === "men" ? "black" : "#721853"}
        p={"2"}
        mx={"5"}
      >
        <Text fontSize={"md"} textAlign={"center"} color={"white"}>
          {params.category === "men" ? "MEN'S " : "WOMEN'S"} SIZE CHART
        </Text>
      </Box>
      <Box mx={"5"}>
        <TableContainer>
          <Table variant="simple" border={"1px"}>
            {/* <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead> */}
            <Tbody>
              {TableData.map((tableRow) => {
                return (
                  <Tr border={"2px"} h={["10", "20"]}>
                    {tableRow.map((tableCol) => {
                      return (
                        <Td
                          border={"2px"}
                          textAlign={"center"}
                          color={
                            params.category === "men" ? "black" : "#721853"
                          }
                          fontSize={["sm", "md"]}
                        >
                          {tableCol.name}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      {params.category === "men" ? (
        <Box>
          <Box
            bgColor={params.category === "men" ? "black" : "#721853"}
            p={"2"}
            mx={"5"}
          >
            <Text fontSize={"md"} textAlign={"center"} color={"white"}>
              MEN'S INSEAM LENGTHS
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={["xs", "md"]}>
              REGULAR: 31"
            </Text>
            <Text fontWeight={"bold"} fontSize={["xs", "md"]}>
              TALL: 33"
            </Text>
          </Box>
        </Box>
      ) : (
        <Box mt={"5"}>
          <Box
            bgColor={params.category === "men" ? "black" : "#721853"}
            p={"2"}
            mx={"5"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Text fontSize={["xs", "md"]} textAlign={"center"} color={"white"}>
              WOMEN'S HEIGHT
            </Text>
            <Text fontSize={["xs", "md"]} textAlign={"center"} color={"white"}>
              MISSES INSEAM LENGTHS
            </Text>
          </Box>
          <Box
            mx={"5"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Box>
              <Text
                fontWeight={"medium"}
                color={params.category === "men" ? "black" : "#721853"}
                fontSize={["xs", "md"]}
              >
                Regular: 5'4 1/2" to 5'7"
              </Text>
              <Text
                fontWeight={"medium"}
                color={params.category === "men" ? "black" : "#721853"}
                fontSize={["xs", "md"]}
              >
                Petite: 5'4 and under
              </Text>
              <Text
                fontWeight={"medium"}
                color={params.category === "men" ? "black" : "#721853"}
                fontSize={["xs", "md"]}
              >
                Tall: 5"9" to 5'11"
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight={"medium"}
                color={params.category === "men" ? "black" : "#721853"}
                fontSize={["xs", "md"]}
              >
                Regular: 30-31*
              </Text>
              <Text
                fontWeight={"medium"}
                color={params.category === "men" ? "black" : "#721853"}
                fontSize={["xs", "md"]}
              >
                Petite: 28-29*
              </Text>
              <Text
                fontWeight={"medium"}
                color={params.category === "men" ? "black" : "#721853"}
                fontSize={["xs", "md"]}
              >
                Tall: 32 1/2-33 1/2*
              </Text>
            </Box>
          </Box>
        </Box>
      )}
      <Stack direction={["column", "row"]} my={["5", "20"]}>
        <Box w={["100%", "50%"]} p={"10"}>
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            mb={"5"}
            color={params.category === "men" ? "black" : "#721853"}
          >
            Designed to Move with you
          </Text>
          <Text
            fontSize={"md"}
            color={params.category === "men" ? "black" : "#721853"}
          >
            Our advanced technology uses body metrics and physiological data to
            empower healthcare pros, facilitating seamless care in bustling
            hospitals or calm patient settings. Paired with our four-way stretch
            fabric for effortless movement and comfort, we prioritize
            flexibility so you can perform at your peak, unrestricted by your
            uniform.
          </Text>
        </Box>
        <Box w={["100%", "50%"]}>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            muted
            playing
            url={
              params.category === "men"
                ? "https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/male%20final%20render.mp4?alt=media&token=a98f2fec-9815-46e6-8b71-8c945907c9ec"
                : "https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/women%20final%20reneder.mp4?alt=media&token=b63eb885-9650-416b-a7c9-d112caa06f47"
            }
          />
        </Box>
      </Stack>
    </div>
  );
};

export default Fitguide;
