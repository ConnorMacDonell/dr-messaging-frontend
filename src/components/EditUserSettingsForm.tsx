import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User, UserResponse } from "../entities/User";
import {
  Box,
  Button,
  Input,
  Spinner,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import userService from "../services/userService";
import AuthToken from "../entities/AuthToken";

interface Props {
  userData: UserResponse;
  token: AuthToken;
}

const EditUserSettingsForm = ({ userData, token }: Props) => {
  const firstName = userData.firstName;
  const lastName = userData.lastName;
  const email = userData.email;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<User>({
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
    },
  });

  const onSubmit: SubmitHandler<User> = async (d) => {
    try {
      setIsLoading(true);
      await userService.patch(userData._id, d, token);
      setIsLoading(false);

      toast({
        title: "Details edited successfully!",
        description: "Please log in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
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
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box borderRadius="md" width="50vw" marginTop={10}>
        <VStack width="66%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text marginBottom={1} fontWeight={600}>
              First Name:
            </Text>
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
              marginBottom={5}
              autoFocus></Input>
            <Text marginBottom={1} fontWeight={600}>
              Last Name:
            </Text>
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
            <Text marginBottom={1} fontWeight={600}>
              Email:
            </Text>
            <Input
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              type="email"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
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
              marginTop={7}
              width="20%">
              {isLoading ? <Spinner /> : "Save"}
            </Button>
          </form>
        </VStack>
      </Box>
    </>
  );
};

export default EditUserSettingsForm;
