import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Input,
  Select,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLabel from "./FormLabel";
import { SendMessageObject } from "../entities/Message";
import { useToast } from "@chakra-ui/react";
import messageService from "../services/messageService";
import useMessages from "../hooks/useMessages";
import AuthToken from "../entities/AuthToken";

interface Props {
  token: AuthToken;
  userId: string;
}

const SendMessageForm = ({ token, userId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<SendMessageObject>();
  const { data, error } = useMessages(userId, token);
  if (error) {
    console.log("SendMessageForm error");
    console.log(error);
    return null;
  }

  const [selectedMessage, setMessage] = useState({
    _id: "",
    messageBody: "",
    ownerId: "",
    category: "",
  });
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const message = data?.find(
      (message) => message.category === event.target.value
    );
    if (!message) throw "Selected category has no associated message.";
    setMessage(message);
  };

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
          width="50vw"
          borderRadius="md"
          paddingLeft={5}
          paddingRight={5}
          boxShadow="md"
          bgColor="#FCFCFC">
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
                variant="outline"
                borderRadius={4}
                marginBottom={3}
                autoFocus></Input>
              <Select
                {...register("messageCategory", {
                  required: "Category is required.",
                })}
                variant="outline"
                borderRadius={4}
                marginBottom={3}
                value={selectedMessage._id}
                onChange={onSelectChange}>
                <option disabled key="placeholder" value="">
                  Select patient procedure category
                </option>
                {data?.map((message) => (
                  <option key={message._id} value={message.category}>
                    {message.category}
                  </option>
                ))}
              </Select>
              <Box
                minHeight={10}
                color="gray.100"
                border="1px"
                padding={2}
                borderRadius={4}
                marginBottom={3}>
                {<Text textColor="gray">{selectedMessage?.messageBody}</Text>}
              </Box>
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

export default SendMessageForm;
