import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { BASEURL } from "../../Config/URL";

const ReturnModel = ({ isOpen, onClose }) => {
  function validateName(value, field) {
    let error;
    if (!value) {
      error = `${field} is required`;
    }
    return error;
  }
  const addReturnRequest = async (orderId, zipcode, returnreason) => {
    console.log({ orderId, zipcode, returnreason });
    return await axios
      .post(`${BASEURL}/returns`, {
        orderId: orderId.toString(),
        zipcode: zipcode.toString(),
        returnreason: returnreason.toString(),
      })
      .then((resp) => {
        console.log(resp.data);
        // setAllReturns(resp.data.response);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error.response.data.error);
        // setIsLoading(false);
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="items-center justify-center flex">
          <span className="flex items-center self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Image src={"/Images/Logo/Assest-2Logo.png"} alt="logo" w={"10"} />{" "}
            EASURE
          </span>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ orderId: "", zipcode: "", returnreason: "" }}
            onSubmit={async (values, actions) => {
              await addReturnRequest(
                values.orderId,
                values.zipcode,
                values.returnreason
              )
                .then((resp) => {
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
                    name="orderId"
                    validate={(value) => validateName(value, "Order id")}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.orderId && form.touched.orderId}
                        isRequired
                      >
                        <FormLabel>Order id</FormLabel>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Order id"
                        />
                        <FormErrorMessage>
                          {form.errors.orderId}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field
                    name="zipcode"
                    validate={(value) =>
                      validateName(value, "Zip / Postal code")
                    }
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.zipcode && form.touched.zipcode}
                        isRequired
                      >
                        <FormLabel>Zip/postal code</FormLabel>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Zip/postal code"
                        />
                        <FormErrorMessage>
                          {form.errors.zipcode}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field
                    name="returnreason"
                    // validate={(value) =>
                    //   validateName(value, "Zip / Postal code")
                    // }
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.returnreason && form.touched.returnreason
                        }
                      >
                        <FormLabel>Return Reason (Optional)</FormLabel>
                        <Textarea
                          {...field}
                          type="text"
                          placeholder="Return reason"
                        />
                        <FormErrorMessage>
                          {form.errors.returnreason}
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
                    colorScheme="gray"
                    onClick={onClose}
                    type="button"
                  >
                    Close
                  </Button>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </HStack>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ReturnModel;
