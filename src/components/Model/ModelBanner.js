import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Stack,
  Box,
  Text,
  Divider,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FirebaseApp } from "../Firebase/Firebase";
import { Link } from "react-router-dom";

const ModelBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let isApplied = true;
    if (isApplied) {
      let pop_status = localStorage.getItem("pop_status");
      if (!pop_status) {
        onOpen();
        localStorage.setItem("pop_status", 1);
      }
    }
    return () => {
      isApplied = false;
    };
  }, []);

  if (!isOpen) return null;

  const googleLogin = async () => {
    // Initialize Firebase Auth provider
    const provider = new GoogleAuthProvider();
    // whenever a user interacts with the provider, we force them to select an account
    provider.setCustomParameters({
      prompt: "select_account ",
    });
    const auth = getAuth(FirebaseApp);
    await signInWithPopup(auth, provider)
      .then((getuser) => {
        // console.log(getuser.user);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["xs", "4xl"]}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody m={0} p={0}>
          <Stack direction={["column", "row"]}>
            <Image src="/Images/Banner/Assest-1.png" />
            <Box
              w={"full"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Stack
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                spacing={"5"}
                w={"64"}
                pb={["10", "0"]}
              >
                <Image src="/Images/Logo/Assest-2.png" w={"40"} pt={"5"} />
                <Box>
                  <Text
                    textAlign={"center"}
                    fontSize={"4xl"}
                    fontWeight={"bold"}
                    color={"gray.400"}
                  >
                    GET 15% OFF
                  </Text>
                  <Text textAlign={"center"}>Sign up below to unlock</Text>
                </Box>
                <Stack
                  w={"full"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    w={"full"}
                    variant="outline"
                    leftIcon={<FcGoogle size={25} />}
                    fontSize={"sm"}
                    onClick={() => googleLogin()}
                  >
                    Sign in with Google
                  </Button>
                  {/* <Button
                    w={"full"}
                    variant="outline"
                    leftIcon={<BsFacebook size={25} color="blue" />}
                    fontSize={"sm"}
                  >
                    Sign in with Facebook
                  </Button> */}
                </Stack>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                >
                  <Divider flex={1} />
                  <Text p={"2"}>or sign up with</Text>
                  <Divider flex={1} />
                </Box>
                <RadioGroup>
                  <Stack direction="row">
                    <Radio value="1" fontWeight={"medium"}>
                      Women
                    </Radio>
                    <Radio value="2" fontWeight={"medium"}>
                      Men
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Stack w={"full"}>
                  <Link to={"/register"}>
                    <Box
                      bgColor={"gray.300"}
                      p={"2"}
                      w={"full"}
                      cursor={"pointer"}
                    >
                      <Text textAlign={"center"} fontWeight={"medium"}>
                        Email Address
                      </Text>
                    </Box>
                  </Link>
                  <Link to={"/register"}>
                    <Box
                      bgColor={"black"}
                      p={"2"}
                      w={"full"}
                      cursor={"pointer"}
                    >
                      <Text textAlign={"center"} color={"white"}>
                        Unlock Now
                      </Text>
                    </Box>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </ModalBody>

        {/* <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default ModelBanner;
