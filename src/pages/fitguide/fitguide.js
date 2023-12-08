import React from "react";
import MenHeader from "../../assets/FitGuide/MEN-min.png";
import WomenHeader from "../../assets/FitGuide/WOMEN-min.png";
import Cloth from "../../assets/FitGuide/Cloth-mem.png";
import {
  Box,
  Stack,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  HStack,
} from "@chakra-ui/react";
import ReactPlayer from "react-player/lazy";
import { Link, useParams } from "react-router-dom";

const Fitguide = () => {
  const params = useParams();
  return (
    <div>
      <HStack
        bgColor={"gray.100"}
        p={["2.5", "5"]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link to={"/fitguide/men"}>
          <Text
            fontSize={["lg", "xl"]}
            textAlign={"center"}
            fontWeight={"medium"}
            color={params.category === "men" && "blue.600"}
          >
            MEN
          </Text>
        </Link>
        <Link to={"/fitguide/women"}>
          <Text
            fontSize={["lg", "xl"]}
            textAlign={"center"}
            fontWeight={"medium"}
            color={params.category === "women" && "blue.600"}
          >
            WOMEN
          </Text>
        </Link>
      </HStack>
      <img
        src={params.category === "men" ? MenHeader : WomenHeader}
        width={"100%"}
        height={"100%"}
      />
      <Box bgColor={"gray.300"} p={["2.5", "5"]}>
        <Text fontSize={["lg", "xl"]} textAlign={"center"}>
          {params.category === "men" ? "MEN'S" : "WOMEN's"} FIT GUIDE
        </Text>
      </Box>
      <Stack direction={["column", "row"]} my={"5"} mx={"5"}>
        <Box>
          <img src={Cloth} width={"100%"} height={"100%"} />
        </Box>
        <Box w={["100%", "40%"]} p={"10"} mt={"10"}>
          <Stack spacing={"10"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              HOW TO MEASURE
            </Text>
            <Text>
              Please take the measurement around your chest, just beneath your
              arms, capturing the fullest part of your bust.
            </Text>
            <Text>
              Wrap the tape measure around your waist, ensuring it encircles the
              slimmest part without applying too much tension.
            </Text>
            <Text>
              Take the measurement around the widest part of your hips with your
              feet together.
            </Text>
            <Text>
              Find the distance from the seam in the crotch to the bottom of the
              leg, measuring along the inside of the pant.
            </Text>
          </Stack>
        </Box>
      </Stack>
      <Box bgColor={"gray.800"} p={"2"} mx={"5"}>
        <Text fontSize={"md"} textAlign={"center"} color={"white"}>
          MEN'S SIZE CHART
        </Text>
      </Box>
      <Box mx={"5"}>
        <TableContainer>
          <Table variant="simple">
            {/* <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead> */}
            <Tbody>
              <Tr>
                <Td>SIZES</Td>
                <Td>XS</Td>
                <Td>S</Td>
                <Td>M</Td>
                <Td>L</Td>
                <Td>XL</Td>
                <Td>2XL</Td>
                <Td>3XL</Td>
              </Tr>
              <Tr>
                <Td>CHEST</Td>
                <Td>32-34</Td>
                <Td>35-37</Td>
                <Td>38-40</Td>
                <Td>42-44</Td>
                <Td>46-48</Td>
                <Td>50-52</Td>
                <Td>54-56</Td>
              </Tr>
              <Tr>
                <Td>WAIST</Td>
                <Td>25-27</Td>
                <Td>28-30</Td>
                <Td>31-33</Td>
                <Td>35-37</Td>
                <Td>39-41</Td>
                <Td>43-45</Td>
                <Td>47-49</Td>
              </Tr>
              <Tr>
                <Td>HIP</Td>
                <Td>32-34</Td>
                <Td>35-37</Td>
                <Td>38-40</Td>
                <Td>42-44</Td>
                <Td>46-48</Td>
                <Td>50-52</Td>
                <Td>54-56</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box bgColor={"gray.800"} p={"2"} mx={"5"}>
        <Text fontSize={"md"} textAlign={"center"} color={"white"}>
          MEN'S INSEAM LENGTHS
        </Text>
      </Box>
      <Box textAlign={"center"}>
        <Text fontWeight={"bold"}>REGULAR: 31"</Text>
        <Text fontWeight={"bold"}>TALL: 33"</Text>
      </Box>
      <Stack direction={["column", "row"]} my={["5", "20"]}>
        <Box w={["100%", "50%"]} p={"10"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} mb={"5"}>
            Designed to Move with you
          </Text>
          <Text fontSize={"md"}>
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
            playing
            url="https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/male%20final%20render%20(1).mp4?alt=media&token=a447c1f0-9fc9-41c0-9523-4e4b6f249f49"
          />
        </Box>
      </Stack>
    </div>
  );
};

export default Fitguide;
