import { Box, Button, Center, Input, Spinner, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../entities/User";
import usersService from "../services/usersService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import FormLabel from "./FormLabel";

const CreateUserForm = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<User>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<User> = async (d) => {
    try {
      setIsLoading(true);
      await usersService.post(d);
      setIsLoading(false);

      toast({
        title: "Signup successful!",
        description: "Please log in",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error: any) {
      setIsLoading(false);
      const description =
        error.code === "ERR_NETWORK"
          ? "Network error, please try again later."
          : error?.response?.data?.error;
      toast({
        title: "Edit failed",
        description: description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Center>
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
                  message="Please enter new account details"
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
                    {isLoading ? <Spinner /> : "Sign Up"}
                  </Button>
                </Center>
              </form>
            </VStack>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default CreateUserForm;
