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
} from "@chakra-ui/react";
import { useState } from "react";
import { UserCredentials } from "../entities/User";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLabel from "./FormLabel";
import useAuth from "../routing/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<UserCredentials>();
  const handleClickShowButton = () => setShow(!show);
  const { onLogin } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserCredentials> = async (d) => {
    setIsLoading(true);
    await onLogin(d);
    navigate("/dashboard");
    setIsLoading(false);
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
                    bg="#000080"
                    _hover={{
                      bg: "white",
                      textColor: "black",
                      borderWidth: "1px",
                    }}
                    variant="ghost"
                    marginBottom={10}
                    textColor="White">
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
