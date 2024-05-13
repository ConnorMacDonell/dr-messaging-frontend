import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCredentials } from "../entities/User";
import { SubmitHandler, useForm } from "react-hook-form";
import authService from "../services/authService";
import AuthToken from "../entities/AuthToken";
import FormLabel from "./FormLabel";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { register, handleSubmit } = useForm<UserCredentials>();
  const handleClickShowButton = () => setShow(!show);

  const onSubmit: SubmitHandler<UserCredentials> = async (d) => {
    try {
      setIsLoading(true);
      const response: AuthToken = await authService.post(d);

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

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
        <Box
          borderRadius="md"
          borderWidth={1}
          borderColor="black"
          width="50vw"
          boxShadow="10px 5px 5px gray">
          <VStack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel
                title="Login"
                message="Please enter your email and password"
              />
              <Input
                {...register("email", { required: "Email is required." })}
                placeholder="Email"
                type="email"
                variant="filled"
                borderRadius={4}
                marginBottom={3}></Input>
              <InputGroup size="md">
                <Input
                  {...register("password", {
                    required: "Password is required.",
                  })}
                  placeholder="Password"
                  type={show ? "text" : "password"}
                  variant="filled"
                  borderRadius={4}
                  marginBottom={3}
                  pr="4.5rem"></Input>
                <InputRightElement>
                  <Button
                    h="1.75rem"
                    size="xs"
                    onClick={handleClickShowButton}
                    marginRight={1}
                    variant="ghost">
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Center>
                <VStack>
                  <Link textColor="gray">Forgot your password?</Link>
                  <Button
                    type="submit"
                    borderRadius="md"
                    borderWidth={0}
                    bg="cyan.600"
                    _hover={{ bg: "cyan.200" }}
                    variant="ghost"
                    marginBottom={10}>
                    {isLoading ? <Spinner /> : "Login"}
                  </Button>
                </VStack>
              </Center>
            </form>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default LoginForm;
