import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Axios from "axios";

const SignUpModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const signUpButton = (values) => {
    Axios.post(process.env.REACT_APP_API_URL + "/users/sign-up", values)
      .then((response) => {
        toast({
          title: `${response.data.message}`,
          description: "We've created your account for you.",
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: `${error.response.data.message}`,
          description: "Please use another e-mail.",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Invalid email").required("E-mail address is required."),
    }),
    onSubmit: (values, actions) => {
      signUpButton(values);
      actions.resetForm();
    },
  });

  return (
    <>
      <Button bg="#80b918" size="md" onClick={onOpen}>
        Sign up and start
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={formik.handleSubmit}>
          <ModalContent bg="#243447" color="#ffffff">
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel>Email address</FormLabel>
                <Input name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                <FormHelperText placeholder="email">We'll never share your email.</FormHelperText>
                <FormHelperText>
                  Already have an account?{" "}
                  <Button colorScheme="teal" variant="link">
                    Sign In
                  </Button>
                </FormHelperText>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" className="w-full" bg="#80b918">
                Sign Up
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default SignUpModal;
