import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Input,
  Select,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLabel from "./FormLabel";
import { SendMessageObject } from "../entities/Message";
import { useToast } from "@chakra-ui/react";
import useMessages from "../hooks/useMessages";
import AuthToken from "../entities/AuthToken";
import messageService from "../services/messageService";

interface Props {
  token: AuthToken;
  userId: string;
}

const EditMessageForm = ({ token, userId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
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

  const onInputChange = (event: ChangeEvent<HTMLInputElement> | string) => {
    const value = typeof event === "string" ? event : event.target.value;
    setInputValue(value);
  };

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const message = data?.find((message) => message._id === event.target.value);
    if (!message) throw "Selected category has no associated message.";
    setMessage(message);
    onInputChange(message.messageBody);
  };

  const toast = useToast();

  const onSubmit: SubmitHandler<SendMessageObject> = async (d) => {
    try {
      setIsLoading(true);
      console.log(d);
      await messageService.patch(selectedMessage._id, d, token);
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
                title="Edit Message"
                message="Please enter recipients and message"
              />
              <Select
                {...register("messageId", {
                  required: "Id is required.",
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
                  <option key={message.category} value={message._id}>
                    {message.category}
                  </option>
                ))}
              </Select>
              <Input
                placeholder="Edit your messages here."
                value={inputValue}
                onChange={onInputChange}
                disabled={selectedMessage.messageBody === "" ? true : false}
                marginBottom={3}></Input>
              <Center>
                <VStack>
                  {selectedMessage.messageBody === "" && (
                    <Button
                      borderRadius="md"
                      borderWidth={0}
                      bg="gray.100"
                      textColor="white"
                      marginBottom={7}
                      _hover={{ bg: "gray.100" }}
                      cursor="not-allowed"
                      disabled>
                      Save
                    </Button>
                  )}
                  {selectedMessage.messageBody !== "" && (
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
                      {isLoading ? <Spinner /> : "Save"}
                    </Button>
                  )}
                </VStack>
              </Center>
            </form>
          </VStack>
        </Box>
      </AbsoluteCenter>
    </>
  );
};

export default EditMessageForm;
