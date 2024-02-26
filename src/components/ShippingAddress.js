import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Textarea,
  VStack,
  Select,
  Radio,
  FormLabel,
  RadioGroup,
  Text,
  Box,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BASEURL } from "../Config/URL";
import axios from "axios";

const ShippingAddress = ({
  setisStandardShipping,
  setClientSecret,
  GrandTotalShipPrice,
  GrandTotalPrice,
  setOrder_id,
}) => {
  const AuthState = useSelector((state) => state.Auths.users);
  const CartItems = useSelector((state) => state.CartOptions.CartItems);

  const [btnstate, setbtnState] = useState(true);

  useEffect(() => {
    if (CartItems.length !== 0) {
      setbtnState(false);
    } else {
      setbtnState(true);
    }
  }, [CartItems]);

  function validateField(value, field) {
    let error;
    if (!value) {
      error = `${field} is required`;
    }
    return error;
  }

  const addOrder = async (
    email,
    country,
    firstname,
    lastname,
    address,
    city,
    state,
    zipcode,
    phone,
    gender
  ) => {
    return await axios
      .post(`${BASEURL}/Order`, {
        email,
        country,
        firstname,
        lastname,
        address,
        city,
        state,
        zipcode,
        phone,
        orderItems: CartItems,
        subTotal: GrandTotalPrice,
        total: GrandTotalShipPrice,
        shippingCharges: GrandTotalShipPrice - GrandTotalPrice,
        gender: gender,
      })
      .then((resp) => {
        console.log(resp.data.response);
        localStorage.setItem("orderId", resp.data.response.order_id);
        // dispatch(ResetCart());
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setIsLoading(false);
      });
  };

  const [isLoading, setIsLoading] = useState(false);

  const getClientSecret = async (
    name,
    email,
    phone,
    address,
    country,
    city,
    state,
    postalCode,
    gender
  ) => {
    return await axios
      .post(BASEURL + "/create-payment-intent", {
        name,
        email,
        phone,
        address,
        country,
        city,
        state,
        postalCode,
        cartId: localStorage.getItem("cartId"),
        GrandTotalShipPrice: GrandTotalShipPrice,
        ShippingCharges: GrandTotalShipPrice - GrandTotalPrice,
        gender: gender,
      })
      .then((resp) => {
        console.log(resp.data);
        setIsLoading(false);
        const { clientSecrets } = resp.data;
        return setClientSecret(clientSecrets);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(gender);
        console.log("client error", error.response.data.error);
        // console.log(error);
      });
  };

  return (
    <Formik
      initialValues={{
        email: AuthState.length !== 0 ? AuthState.email : "",
        gender: "men",
        country: "Pakistan",
        firstname:
          AuthState.length !== 0 && AuthState.displayName !== null
            ? AuthState.displayName?.split(" ")[0]
            : "Umar",
        lastname:
          AuthState.length !== 0 && AuthState.displayName !== null
            ? AuthState.displayName?.split(" ")[1]
            : "Saleem",
        address: "Khewra",
        city: "Khewra",
        state: "Punjab",
        zipcode: "49060",
        phone: "03404960397",
        shippingWay: "standard",
      }}
      enableReinitialize
      onSubmit={async (values, actions) => {
        setIsLoading(true);

        await addOrder(
          values.email,
          values.country,
          values.firstname,
          values.lastname,
          values.address,
          values.city,
          values.state,
          values.zipcode,
          values.phone,
          values.gender
        );
        await getClientSecret(
          `${values.firstname} ${values.lastname}`,
          values.email,
          values.phone,
          values.address,
          values.country,
          values.city,
          values.state,
          values.zipcode,
          values.gender
        );
      }}
    >
      {(props) => (
        <Form>
          <VStack spacing={"5"}>
            <Box w={"full"}>
              <Text fontSize={"xl"} fontWeight={"medium"} textAlign={"left"}>
                Contact Information
              </Text>
            </Box>
            <Field
              name="email"
              validate={(value) => validateField(value, "email")}
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <Input {...field} placeholder="Email Address*" />

                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="gender"
              validate={(value) => validateField(value, "gender")}
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.gender && form.touched.gender}
                >
                  <RadioGroup {...field}>
                    <HStack>
                      <Field as={Radio} value="men">
                        Men
                      </Field>
                      <Field as={Radio} value="women">
                        Women
                      </Field>
                    </HStack>
                  </RadioGroup>

                  <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box w={"full"}>
              <Text fontSize={"xl"} fontWeight={"medium"} textAlign={"left"}>
                Shipping Detail
              </Text>
            </Box>
            <Field
              name="shippingWay"
              validate={(value) => validateField(value, "shippingWay")}
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.shippingWay && form.touched.shippingWay
                  }
                >
                  {/* <FormLabel>Shipping</FormLabel> */}
                  <RadioGroup
                    {...field}
                    onChange={(e) => {
                      if (e === "standard") {
                        setisStandardShipping(true);
                      } else {
                        setisStandardShipping(false);
                      }
                    }}
                  >
                    <HStack>
                      <Field as={Radio} value="standard">
                        Standard Shipping
                      </Field>
                      <Field as={Radio} value="express">
                        Express Shipping
                      </Field>
                    </HStack>
                  </RadioGroup>
                  <FormErrorMessage>{form.errors.shippingWay}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field
              name="country"
              validate={(value) => validateField(value, "country")}
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.country && form.touched.country}
                >
                  {/* <FormLabel>Country</FormLabel> */}
                  <Select {...field} placeholder="Country">
                    {/* <option>Azerbaijan</option>
                    <option>Belgium</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>India</option>
                    <option>Pakistan</option> */}
                    <option>United States</option>
                    {/* <option>United Kingdom</option> */}
                  </Select>
                  <FormErrorMessage>{form.errors.country}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <HStack w={"full"} alignItems={"flex-start"}>
              <Field
                name="firstname"
                validate={(value) => validateField(value, "first name")}
              >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.firstname && form.touched.firstname}
                  >
                    {/* <FormLabel>firstname</FormLabel> */}
                    <Input {...field} placeholder="First name" />
                    <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field
                name="lastname"
                validate={(value) => validateField(value, "last name")}
              >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.lastname && form.touched.lastname}
                  >
                    {/* <FormLabel>lastname</FormLabel> */}
                    <Input {...field} placeholder="Last name" />
                    <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
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
                  isInvalid={form.errors.address && form.touched.address}
                >
                  {/* <FormLabel>address</FormLabel> */}
                  <Textarea {...field} placeholder="Address" />
                  <FormErrorMessage>{form.errors.address}</FormErrorMessage>
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
                  >
                    {/* <FormLabel>city</FormLabel> */}
                    <Input {...field} placeholder="City" />
                    <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field
                name="state"
                validate={(value) => validateField(value, "state")}
              >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.state && form.touched.state}
                  >
                    {/* <FormLabel>state</FormLabel> */}
                    <Input {...field} placeholder="State" />
                    <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field
                name="zipcode"
                validate={(value) => validateField(value, "zipcode")}
              >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.zipcode && form.touched.zipcode}
                  >
                    {/* <FormLabel>zipcode</FormLabel> */}
                    <Input {...field} placeholder="Zip Code" />
                    <FormErrorMessage>{form.errors.zipcode}</FormErrorMessage>
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
                >
                  {/* <FormLabel>phone</FormLabel> */}
                  <Input {...field} placeholder="Phone" />
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
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
              bgColor={"black"}
              color={"white"}
              _hover={{
                bgColor: "gray.900",
              }}
              rounded={"md"}
              fontSize={["xs", "sm"]}
              fontWeight={"medium"}
              p={["5", "8"]}
              isLoading={isLoading}
              loadingText={"Submitting.."}
              type="submit"
              isDisabled={btnstate}
            >
              Continue to payment
            </Button>
          </HStack>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingAddress;
