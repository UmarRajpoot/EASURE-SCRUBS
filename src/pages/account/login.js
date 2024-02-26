import React, { useState } from "react";
import Text from "../../components/Text";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { BASEURL } from "../../Config/URL";
import { useDispatch } from "react-redux";
import { AddUser } from "../../Store/Auth/actions";

import LoginSideImage from "../../assets/black3.jpeg";
import NewsLetter from "../../components/NewsLetter";

import { FirebaseApp } from "../../components/Firebase/Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { CheckIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  function validateName(value, field) {
    let error;
    if (!value) {
      error = `${field} is required.`;
    }
    return error;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorAlert, setErrorAlert] = useState("");
  const [successAlert, setSuccessAlert] = useState("");

  const AlertComp = ({ message }) => {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  };
  const SuccessAlertComp = ({ message }) => {
    return (
      <Alert status="success">
        <CheckIcon mx={"2"} />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  };

  const loginUser = async (email, password) => {
    // return await axios
    //   .post(`${BASEURL}/login`, {
    //     email: email,
    //     password: password,
    //   })
    //   .then((resp) => {
    //     // console.log(resp.data);
    //     dispatch(AddUser(resp.data.response));
    //     navigate(-1);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const auth = getAuth(FirebaseApp);
    await signInWithEmailAndPassword(auth, email, password)
      .then((getuser) => {
        setErrorAlert("");
        setSuccessAlert("Authenticated.");
        dispatch(AddUser(getuser.user));
        navigate(-1);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          return setErrorAlert("Email and Password is Incorrect.");
        } else if (error.code === "auth/invalid-email") {
          return setErrorAlert("Invalid Email");
        }
        setErrorAlert(error.code);
      });
  };

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
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {errorAlert !== "" && <AlertComp message={errorAlert} />}
      {successAlert !== "" && <SuccessAlertComp message={successAlert} />}
      <div className="container md:px-6 md:mx-auto flex mb-20">
        <div className="mt-6 md:w-1/2 hidden  md:flex justify-end">
          <Image src={LoginSideImage} h={"500px"} />
        </div>
        <div className="mt-6 w-full md:w-1/2 justify-center items-center">
          <div className="px-10 flex flex-col  justify-end">
            <div className="flex flex-col items-center ">
              <h2 className="text-3xl my-4">Welcome To EASURE!</h2>
              {/* <h2 className="text-md my-4 ">Welcome to EASURE</h2> */}
            </div>
            <div>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values, actions) => {
                  await loginUser(values.email, values.password)
                    .then(() => {
                      actions.setSubmitting(false);
                    })
                    .catch((error) => {
                      actions.setSubmitting(false);
                    });
                }}
              >
                {(props) => (
                  <Form>
                    <VStack>
                      <Field
                        name="email"
                        validate={(value) => validateName(value, "email")}
                      >
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                            isRequired
                          >
                            <Input
                              {...field}
                              placeholder="Email"
                              autoComplete="on"
                            />
                            <FormErrorMessage>
                              {form.errors.email}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field
                        name="password"
                        validate={(value) => validateName(value, "password")}
                      >
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.password && form.touched.password
                            }
                            isRequired
                          >
                            {/* <Input {...field} placeholder="password" /> */}
                            <InputGroup size="md">
                              <Input
                                {...field}
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                autoComplete="on"
                              />
                              <InputRightElement width="4.5rem">
                                <Button
                                  h="1.75rem"
                                  size="sm"
                                  onClick={handleClick}
                                >
                                  {show ? "Hide" : "Show"}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>
                              {form.errors.password}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <div className="flex items-center w-full justify-between">
                        <Text text={"Forget your password?"} />
                        {/* <Text text={"Show Password"} /> */}
                      </div>
                    </VStack>
                    <HStack
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"flex-end"}
                      mb={"3"}
                    >
                      <Button
                        mt={4}
                        bgColor={"gray.900"}
                        color={"white"}
                        _hover={{
                          bgColor: "gray.600",
                        }}
                        isLoading={props.isSubmitting}
                        type="submit"
                        w={"full"}
                      >
                        Login
                      </Button>
                    </HStack>
                  </Form>
                )}
              </Formik>
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
              <div className="my-10">
                <hr />
              </div>
              <div>
                <h3 className="text-xl font-medium text-center">
                  New to EASURE?
                </h3>
                <Link to={"/register"} replace={true}>
                  <h3 className="text-md text-center my-4 hover:cursor-pointer">
                    Create an account
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <NewsLetter /> */}
    </>
  );
};

export default Login;
