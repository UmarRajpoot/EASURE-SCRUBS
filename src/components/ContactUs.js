import {
  Box,
  Stack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ContactUs = () => {
  return (
    <Box
      w={"full"}
      display={"flex"}
      //   justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      h={"100vh"}
    >
      <Box w={["95%", "60%"]} my={"10"}>
        <Text textAlign={"center"} fontSize={"24"} mb={"5"}>
          ContactUs
        </Text>
        <Stack spacing={"5"}>
          <Stack direction={["column", "row"]}>
            <FormControl>
              <Input type="text" placeholder="Name" />
            </FormControl>
            <FormControl>
              <Input type="email" placeholder="Email" />
            </FormControl>
          </Stack>
          <FormControl>
            <Input type="phone" placeholder="Phone" />
          </FormControl>
          <FormControl>
            <Textarea type="phone" placeholder="Your Message" />
          </FormControl>
        </Stack>
      </Box>
      <Button colorScheme="blue">Send Message</Button>
    </Box>
  );
};

export default ContactUs;
