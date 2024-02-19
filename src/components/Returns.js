import {
  Box,
  Button,
  Divider,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ReturnModel from "./ReturenModel/ReturnModel";

const Returns = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ReturnModel isOpen={isOpen} onClose={onClose} />
      <Box
        display={"flex"}
        alignItems={"center"}
        w={"full"}
        flexDirection={"column"}
        my={"20"}
      >
        <Stack spacing={"10"} w={"80%"}>
          <Text fontSize={"2xl"} textAlign={"center"}>
            Returns and Exchanges
          </Text>
          <Divider size={"lg"} />
          <Text fontSize={"md"} textAlign={"center"}>
            Send anything within 60 days that hinders your optimal performance
            for an exchange or a complete refund, as long as the scrubs are in
            their original, unworn, unwashed condition with all tags attached.
            simply print a shipping label and drop off at the carriers listed on
            the label.
          </Text>
          <Text fontSize={"md"} textAlign={"center"}>
            Please allow 6-8 days for your return or exchange to be processed.
            We will send you an email confirmation once your refund has been
            completed and /or exchange sent out. Once your refund is complete,
            please allow 3-5 business days for the amount to appear back on your
            original payment method.
          </Text>
          <Text fontSize={"md"} textAlign={"center"}>
            Feel free to reach out to us at info@easurescrubs.com if you have
            any questions!
          </Text>
          <Button
            w={"52"}
            bgColor={"black"}
            color={"white"}
            rounded={"none"}
            alignSelf={"center"}
            _hover={{
              bgColor: "gray.700",
            }}
            onClick={() => onOpen()}
          >
            Start your return
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Returns;
