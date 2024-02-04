import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Textarea,
  VStack,
  Select,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BASEURL } from "../Config/URL";
import axios from "axios";

const ShippingAddress = () => {
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
        // dispatch(ResetCart());
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Formik
      initialValues={{
        country: "",
        firstname:
          AuthState.length !== 0 ? AuthState.displayName?.split(" ")[0] : "",
        lastname:
          AuthState.length !== 0 ? AuthState.displayName?.split(" ")[1] : "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        phone: "",
      }}
      enableReinitialize
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
                  isInvalid={form.errors.country && form.touched.country}
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
                    isRequired
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
                    isRequired
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
                  isRequired
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
                    isRequired
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
                    isRequired
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
                    isRequired
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
                  isRequired
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
              isLoading={props.isSubmitting}
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
