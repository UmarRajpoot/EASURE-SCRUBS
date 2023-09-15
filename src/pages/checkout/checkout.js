import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
// import { Select } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { BASEURL } from "../../Config/URL";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItems from "../../components/Checkout/CheckoutItems";
import { ResetCart } from "../../Store/Cart/actions";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {
  const CartItems = useSelector((state) => state.CartOptions.CartItems);
  const GrandTotalPrice = useSelector((state) => state.CartOptions.GrandTotal);

  const dispatch = useDispatch();

  function validateField(value, field) {
    let error;
    if (!value) {
      error = `${field} is required`;
    }
    return error;
  }

  const addOrder = async (
    country,
    firstname,
    lastname,
    address,
    city,
    state,
    zipcode,
    phone
  ) => {
    return await axios
      .post(`${BASEURL}/Order`, {
        country,
        firstname,
        lastname,
        address,
        city,
        state,
        zipcode,
        phone,
        orderItems: CartItems,
      })
      .then((resp) => {
        // console.log(resp.data);
        dispatch(ResetCart());
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const navigate = useNavigate();

  const AuthState = useSelector((state) => state.Auths.users);

  return (
    <PayPalScriptProvider>
      <Box px={"2.5"} minH={"full"} pb={"28"}>
        <section className="pt-5 px-6 md:px-0">
          <div className="container mx-auto flex flex-col md:flex-row  md:h-96 lg:h-screen justify-center">
            <div className="w-full md:w-1/2 ">
              <Heading>ENSURE</Heading>
              <Box>
                {/* <Text fontSize={"lg"} textAlign={"center"}>
                  Payment Options
                </Text> */}

                {/* <Box my={"1"} p={"5"}>
                  <PayPalButtons
                    style={{ layout: "horizontal", shape: "rect" }}
                    // createOrder={createOrder}
                    // onApprove={onApprove}
                  />
                </Box> */}
              </Box>
              <hr />
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text size={"md"} py={"3"} fontSize={"xl"}>
                  Shipping address
                </Text>
                {AuthState.length !== 0 ? (
                  <Text display={"flex"} flexDirection={["column", "row"]}>
                    <Text mr={"2"}>Login as </Text>
                    <Text color={"teal"} fontSize={"md"} fontWeight={"medium"}>
                      {AuthState.firstname}-{AuthState.lastname}
                    </Text>
                  </Text>
                ) : (
                  <Text display={"flex"} flexDirection={["column", "row"]}>
                    <Text mr={"2"}>Have an account?</Text>
                    <Text
                      color={"blue"}
                      fontSize={"md"}
                      fontWeight={"medium"}
                      cursor={"pointer"}
                      onClick={() => navigate("/account/login")}
                    >
                      Login
                    </Text>
                  </Text>
                )}
              </Box>
              <Formik
                initialValues={{
                  country: "",
                  firstname: AuthState.length !== 0 ? AuthState.firstname : "",
                  lastname: AuthState.length !== 0 ? AuthState.lastname : "",
                  address: "",
                  city: "",
                  state: "",
                  zipcode: "",
                  phone: "",
                }}
                onSubmit={async (values, actions) => {
                  await addOrder(
                    values.country,
                    values.firstname,
                    values.lastname,
                    values.address,
                    values.city,
                    values.state,
                    values.zipcode,
                    values.phone
                  )
                    .then((resp) => {
                      actions.setSubmitting(false);
                      actions.resetForm();
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
                        name="country"
                        validate={(value) => validateField(value, "country")}
                      >
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.country && form.touched.country
                            }
                            isRequired
                          >
                            {/* <FormLabel>Country</FormLabel> */}
                            <Select {...field} placeholder="Country">
                              <option>Azerbaijan</option>
                              <option>Belgium</option>
                              <option>France</option>
                              <option>Germany</option>
                              <option>Italy</option>
                              <option>India</option>
                              <option>Pakistan</option>
                              <option>United States</option>
                              <option>United Kingdom</option>
                            </Select>
                            <FormErrorMessage>
                              {form.errors.country}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <HStack w={"full"} alignItems={"flex-start"}>
                        <Field
                          name="firstname"
                          validate={(value) =>
                            validateField(value, "first name")
                          }
                        >
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                form.errors.firstname && form.touched.firstname
                              }
                              isRequired
                            >
                              {/* <FormLabel>firstname</FormLabel> */}
                              <Input {...field} placeholder="First name" />
                              <FormErrorMessage>
                                {form.errors.firstname}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field
                          name="lastname"
                          validate={(value) =>
                            validateField(value, "last name")
                          }
                        >
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                form.errors.lastname && form.touched.lastname
                              }
                              isRequired
                            >
                              {/* <FormLabel>lastname</FormLabel> */}
                              <Input {...field} placeholder="Last name" />
                              <FormErrorMessage>
                                {form.errors.lastname}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </HStack>
                      <Field
                        name="address"
                        validate={(value) => validateField(value, "address")}
                      >
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.address && form.touched.address
                            }
                            isRequired
                          >
                            {/* <FormLabel>address</FormLabel> */}
                            <Textarea {...field} placeholder="Address" />
                            <FormErrorMessage>
                              {form.errors.address}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <HStack alignItems={"flex-start"}>
                        <Field
                          name="city"
                          validate={(value) => validateField(value, "city")}
                        >
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={form.errors.city && form.touched.city}
                              isRequired
                            >
                              {/* <FormLabel>city</FormLabel> */}
                              <Input {...field} placeholder="City" />
                              <FormErrorMessage>
                                {form.errors.city}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field
                          name="state"
                          validate={(value) => validateField(value, "state")}
                        >
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                form.errors.state && form.touched.state
                              }
                              isRequired
                            >
                              {/* <FormLabel>state</FormLabel> */}
                              <Input {...field} placeholder="State" />
                              <FormErrorMessage>
                                {form.errors.state}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field
                          name="zipcode"
                          validate={(value) => validateField(value, "zipcode")}
                        >
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                form.errors.zipcode && form.touched.zipcode
                              }
                              isRequired
                            >
                              {/* <FormLabel>zipcode</FormLabel> */}
                              <Input {...field} placeholder="Zip Code" />
                              <FormErrorMessage>
                                {form.errors.zipcode}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </HStack>
                      <Field
                        name="phone"
                        validate={(value) => validateField(value, "phone")}
                      >
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.phone && form.touched.phone}
                            isRequired
                          >
                            {/* <FormLabel>phone</FormLabel> */}
                            <Input {...field} placeholder="Phone" />
                            <FormErrorMessage>
                              {form.errors.phone}
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
                        colorScheme="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                        isDisabled={CartItems.length === 0 && true}
                      >
                        Continue to Shipping
                      </Button>
                    </HStack>
                  </Form>
                )}
              </Formik>
            </div>
            <div className={`w-full md:w-2/5 md:px-4 pt-3 md:pt-0 `}>
              <h2 className="text-xl py-5">Items</h2>
              <Box>
                {CartItems.map((item, index) => {
                  return (
                    <CheckoutItems
                      key={index}
                      productName={item.productname}
                      productimage={item.productimage}
                      productsize={item.productsize}
                      productcolor={item.productcolor}
                      productPrice={item.productPrice}
                      count={item.count}
                    />
                  );
                })}
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                p={"3"}
              >
                <Text>Subtotal</Text>
                <Text fontWeight={"bold"}>${GrandTotalPrice}.00</Text>
              </Box>
              <hr />
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                p={"3"}
              >
                <Text>Total</Text>
                <Box display={"flex"} alignItems={"center"}>
                  <Text>USD</Text>
                  <Text fontSize={"2xl"} fontWeight={"medium"} pl={"2"}>
                    {GrandTotalPrice}.00
                  </Text>
                </Box>
              </Box>
            </div>
          </div>
        </section>
      </Box>
    </PayPalScriptProvider>
  );
};

export default Checkout;
