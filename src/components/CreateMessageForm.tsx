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
import { CreateMessageObject } from "../entities/Message";
import { useToast } from "@chakra-ui/react";
import messageService from "../services/messageService";
import AuthToken from "../entities/AuthToken";

interface Props {
  userId: string;
  token: AuthToken;
}

const CreateMessageForm = ({ userId, token }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<CreateMessageObject>();
  const toast = useToast();

  const onSubmit: SubmitHandler<CreateMessageObject> = async (d) => {
    try {
      setIsLoading(true);
      await messageService.post(d, token);
      setIsLoading(false);

      toast({
        title: "Message created",
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
          width="50vw"
          paddingLeft={5}
          paddingRight={5}
          boxShadow="md"
          bgColor="#FCFCFC">
          <VStack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel
                title="Create Message"
                message="Please enter category and message"
              />
              <Input
                {...register("category", {
                  required: "Category is required.",
                })}
                placeholder="Gastro, Cataract, Ortho..."
                type="string"
                variant="filled"
                borderRadius={4}
                marginBottom={3}
                autoFocus></Input>
              <Input
                {...register("messageBody", {
                  required: "Message body is required.",
                })}
                placeholder="Hello, my name is Dr. Jones I will..."
                type="string"
                variant="filled"
                borderRadius={4}
                marginBottom={3}
                pr="4.5rem"></Input>
              <Input
                {...register("ownerId", { value: userId })}
                type="hidden"></Input>
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
                    {isLoading ? <Spinner /> : "Create Message"}
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

export default CreateMessageForm;
