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
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { BASEURL } from "../Config/URL";

const ReviewModel = ({ isOpen, onClose, productID }) => {
  const AddReview = async (title, desc, xproductID) => {
    return await axios
      .post(`${BASEURL}/Review`, {
        title: title,
        desc: desc,
        productID: xproductID,
      })
      .then((resp) => {
        // console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function validateName(value, field) {
    let error;
    if (!value) {
      error = `${field} is required`;
    }
    return error;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Write a Review</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ title: "", desc: "" }}
            onSubmit={async (values, actions) => {
              await AddReview(values.title, values.desc, productID)
                .then((resp) => {
                  actions.setSubmitting(false);
                  onClose();
                })
                .catch((error) => {
                  actions.setSubmitting(false);
                  //   onClose();
                });
            }}
          >
            {(props) => (
              <Form>
                <VStack>
                  <Field
                    name="title"
                    validate={(value) => validateName(value, "Review Title")}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.title && form.touched.title}
                        isRequired
                      >
                        <FormLabel>Review title</FormLabel>
                        <Input {...field} placeholder="Review title" />
                        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field
                    name="desc"
                    validate={(value) =>
                      validateName(value, "Review Description")
                    }
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.desc && form.touched.desc}
                        isRequired
                      >
                        <FormLabel>Review Description</FormLabel>
                        <Textarea {...field} placeholder="Review description" />
                        <FormErrorMessage>{form.errors.desc}</FormErrorMessage>
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
                    Add Review
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

export default ReviewModel;
