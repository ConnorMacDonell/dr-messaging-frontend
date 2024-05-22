import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Input,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLabel from "./FormLabel";
import { SendMessageObject } from "../entities/Message";
import { useToast } from "@chakra-ui/react";
import messageService from "../services/messageService";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<SendMessageObject>();
  const toast = useToast();

  const onSubmit: SubmitHandler<SendMessageObject> = async (d) => {
    try {
      setIsLoading(true);
      await messageService.post(d);
      setIsLoading(false);

      toast({
        title: "Message sent",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      setIsLoading(false);
      const description =
        error.code === "ERR_NETWORK"
          ? "Network error, please try again later."
          : error?.response?.data?.error;
      toast({
        title: "Message failed",
        description: description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
                title="Send Message"
                message="Please enter recipients and message"
              />
              <Input
                {...register("recipients", {
                  required: "Recipients are required.",
                })}
                placeholder="1(408)***-****, 1(408)***-****, ..."
                type="string"
                variant="filled"
                borderRadius={4}
                marginBottom={3}
                autoFocus></Input>
              <Input
                {...register("message", {
                  required: "Message is required.",
                })}
                placeholder="Hello, my name is Dr. Jones I will..."
                type="string"
                variant="filled"
                borderRadius={4}
                marginBottom={3}
                pr="4.5rem"></Input>
              <Center>
                <VStack>
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
                    {isLoading ? <Spinner /> : "Send Message"}
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
