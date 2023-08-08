import React, { useState } from "react";
import Text from "../../components/Text";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { BASEURL } from "../../Config/URL";
import { useDispatch } from "react-redux";
import { AddUser } from "../../Store/Auth/actions";

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

  const loginUser = async (email, password) => {
    return await axios
      .post(`${BASEURL}/login`, {
        email: email,
        password: password,
      })
      .then((resp) => {
        // console.log(resp.data);
        dispatch(AddUser(resp.data.response));
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container md:px-6 md:mx-auto flex flex-col items-center justify-center h-screen">
      <div className="mt-6 md:w-1/2">
        <div className="flex flex-col ">
          <div className="flex flex-col text-center">
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
                          {/* <Input {...field} placeholder="password" /> */}
                          <InputGroup size="md">
                            <Input
                              {...field}
                              pr="4.5rem"
                              type={show ? "text" : "password"}
                              placeholder="Password"
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

            <div className="my-10">
              <hr />
            </div>
            <div>
              <h3 className="text-xl font-bold text-center">New to EASURE?</h3>
              <Link to={"/account/register"} replace={true}>
                <h3 className="text-md text-center my-4 hover:cursor-pointer">
                  Create an account
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
