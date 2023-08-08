import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASEURL } from "../../Config/URL";
import { AddUser } from "../../Store/Auth/actions";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async (firstname, lastname, email, password) => {
    return await axios
      .post(`${BASEURL}/register`, {
        firstname: firstname,
        lastname: lastname,
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
    <div className="container md:px-6 md:mx-auto flex flex-col items-center justify-center ">
      <div className="mt-6 md:w-1/2">
        <div className="px-10 flex flex-col items-center justify-center">
          <div className="flex flex-col text-center">
            <h2 className="text-4xl">Create your EASURE account</h2>
            <h2 className="text-md my-4 ">
              C'mon, everybody's doing it. Create an account to apply discount
              codes at checkout and get access to exclusive offers and
              promotions.
            </h2>
          </div>
          <div>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
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
                      Create
                    </Button>
                  </HStack>
                </Form>
              )}
            </Formik>
            <div className="my-6">
              <h3 className="text-md text-center">
                By clicking the button above, you agree to our Terms of Use and
                Privacy Policy.
              </h3>
            </div>
            <div className="my-10">
              <hr />
            </div>
            <div>
              <h3 className="text-xl font-bold text-center">
                Have an account?
              </h3>
              <Link to={"/account/login"} replace={true}>
                <h3 className="text-lg text-center my-4 hover:cursor-pointer underline">
                  Log In Here
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
