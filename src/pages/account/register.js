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
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BASEURL } from "../../Config/URL";
import { AddUser } from "../../Store/Auth/actions";
import { useDispatch } from "react-redux";

import RegisterSideImage from "../../assets/black3.jpeg";
// import NewsLetter from "../../components/NewsLetter";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseApp } from "../../components/Firebase/Firebase";
import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  function validateName(value, field) {
    let error;
    if (!value) {
      error = `${field} is required.`;
    }
    return error;
  }
  const Navigate = useNavigate();
  const locations = useLocation();

  const [paramEmail, setParamEmail] = useState("");

  useEffect(() => {
    if (locations.search === "?email=undefined") {
      Navigate(`/register`);
    } else {
      const searchEmail = locations.search.split("=")[1];
      if (searchEmail !== undefined) {
        setParamEmail(searchEmail?.replace(",", "."));
      }
    }
  }, [locations.search]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorAlert, setErrorAlert] = useState("");

  const AlertComp = ({ message }) => {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  };

  const registerUser = async (firstname, lastname, email, password) => {
    // return await axios
    //   .post(`${BASEURL}/register`, {
    //     firstname: firstname,
    //     lastname: lastname,
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
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((getuser) => {
        updateProfile(auth.currentUser, {
          displayName: `${firstname} ${lastname}`,
        })
          .then(() => {
            setErrorAlert("");
            dispatch(AddUser(getuser.user));
            navigate(-1);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          return setErrorAlert("Your email already in use. you need to login.");
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
      prompt: "select_account",
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
      <div className="container md:px-6 md:mx-auto flex">
        <div className="mt-6 md:w-1/2 hidden md:flex justify-end">
          <Image src={RegisterSideImage} h={"500px"} />
        </div>
        <div className="mt-6 md:w-1/2 justify-center items-center">
          <div className="px-10 flex flex-col items-center justify-end">
            <div className="flex flex-col text-center">
              <h2 className="text-4xl">Create your EASURE account</h2>
              <h2 className="text-md my-4">
                C'mon, everybody's doing it. Create an account to apply discount
                codes at checkout and get access to exclusive offers and
                promotions.
              </h2>
            </div>
            <div>
              <Formik
                enableReinitialize
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: paramEmail !== "" ? paramEmail : "",
                  password: "",
                }}
                onSubmit={async (values, actions) => {
                  await registerUser(
                    values.firstname,
                    values.lastname,
                    values.email,
                    values.password
                  )
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
                        name="firstname"
                        validate={(value) => validateName(value, "First name")}
                      >
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.firstname && form.touched.firstname
                            }
                            isRequired
                          >
                            <Input {...field} placeholder="First name" />
                            <FormErrorMessage>
                              {form.errors.firstname}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field
                        name="lastname"
                        validate={(value) => validateName(value, "Last name")}
                      >
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.lastname && form.touched.lastname
                            }
                            isRequired
                          >
                            <Input {...field} placeholder="Last name" />
                            <FormErrorMessage>
                              {form.errors.lastname}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field
                        name="email"
                        validate={(value) => validateName(value, "email")}
                      >
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                            isRequired
                          >
                            <Input {...field} placeholder="Email" />
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
                            <InputGroup size="md">
                              <Input
                                {...field}
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                autoComplete="$"
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
                        Create Account
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
                  onClick={() => {}}
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
              <div className="my-6">
                <h3 className="text-md text-center">
                  By clicking the button above, you agree to our Terms of Use
                  and Privacy Policy.
                </h3>
              </div>
              <div className="my-10">
                <hr />
              </div>
              <div>
                <h3 className="text-xl font-medium text-center">
                  Have an account?
                </h3>
                <Link to={"/login"} replace={true}>
                  <h3 className="text-lg text-gray-600 text-center mb-14 my-2 hover:cursor-pointer underline">
                    Log In Here
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

export default Register;
