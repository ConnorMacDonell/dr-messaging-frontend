import {
  Box,
  Button,
  Center,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCredentials } from "../entities/User";
import { SubmitHandler, useForm } from "react-hook-form";
import authService from "../services/authService";
import AuthToken from "../entities/AuthToken";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { register, handleSubmit } = useForm<UserCredentials>();

  const onSubmit: SubmitHandler<UserCredentials> = async (d) => {
    try {
      setIsLoading(true);
      const response: AuthToken = await authService.post(d);
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      setIsLoading(false);

      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate(`/dashboard`);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Center>
        <Box width="33vw">
          Login
          <form onSubmit={handleSubmit(onSubmit)}>
            <label></label>
            <Input
              {...register("email", { required: "Email is required." })}
              placeholder="Email"
              type="email"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Input
              {...register("password", { required: "Password is required." })}
              placeholder="Password"
              type="password"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Button type="submit">{isLoading ? <Spinner /> : "Login"}</Button>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default LoginForm;
