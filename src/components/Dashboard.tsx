import {
  AbsoluteCenter,
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

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<UserCredentials>();
  const handleClickShowButton = () => setShow(!show);

  const onSubmit: SubmitHandler<UserCredentials> = async (d) => {
    setIsLoading(true);
    setIsLoading(false);
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
          <VStack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel
                title="Create Message"
                message="Please enter recipients and message"
              />
              <Input
                {...register("email", { required: "Email is required." })}
                placeholder="Email"
                type="email"
                variant="filled"
                borderRadius={4}
                marginBottom={3}
                autoFocus></Input>
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
                    marginBottom={7}
                    textColor="White">
                    {isLoading ? <Spinner /> : "Login"}
                  </Button>
                </VStack>
              </Center>
            </form>
          </VStack>
        </Box>
      </AbsoluteCenter>
    </>
  );
};

export default Dashboard;
