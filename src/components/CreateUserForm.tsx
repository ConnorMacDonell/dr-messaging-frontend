// src/components/CreateUserForm.tsx
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Input,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../entities/User";
import FormLabel from "./FormLabel";

interface Props {
  onFormSubmit: (data: User) => void;
}

const CreateUserForm = ({ onFormSubmit }: Props) => {
  const { register, handleSubmit } = useForm<User>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<User> = (data) => {
    // Store the form data and move to next step
    onFormSubmit(data);
  };

  return (
    <>
      <AbsoluteCenter>
        <Box
          borderRadius="md"
          borderWidth={1}
          borderColor="black"
          width="50vw"
          boxShadow="10px 5px 5px gray">
          <Center>
            <VStack width="66%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel
                  title="Welcome!"
                  message="Please enter your account details"
                />
                <Input
                  {...register("firstName", {
                    required: "First name is required",
                    maxLength: {
                      value: 20,
                      message: "Name cannot exceed 20 characters",
                    },
                  })}
                  placeholder="First Name"
                  variant="filled"
                  borderRadius={4}
                  marginBottom={3}
                  autoFocus></Input>
                <Input
                  {...register("lastName", {
                    required: "Last name is required.",
                    maxLength: {
                      value: 20,
                      message: "Name cannot exceed 20 characters",
                    },
                  })}
                  placeholder="Last Name"
                  variant="filled"
                  borderRadius={4}
                  marginBottom={3}></Input>
                <Input
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  type="email"
                  variant="filled"
                  borderRadius={4}
                  marginBottom={3}></Input>
                <Input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    maxLength: {
                      value: 42,
                      message: "Password cannot exceed 42 characters",
                    },
                  })}
                  placeholder="Password"
                  type="password"
                  variant="filled"
                  borderRadius={4}
                  marginBottom={3}></Input>
                <Center>
                  <Button
                    type="submit"
                    borderRadius="md"
                    borderWidth={0}
                    bg="#000080"
                    textColor="white"
                    _hover={{
                      bg: "white",
                      textColor: "black",
                      borderWidth: "1px",
                    }}
                    variant="ghost"
                    marginBottom={10}
                    marginTop={7}
                    width="33%">
                    Continue to Plans
                  </Button>
                </Center>
              </form>
            </VStack>
          </Center>
        </Box>
      </AbsoluteCenter>
    </>
  );
};

export default CreateUserForm;
