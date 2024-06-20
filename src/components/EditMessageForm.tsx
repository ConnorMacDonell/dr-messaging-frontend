import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Select,
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLabel from "./FormLabel";
import { EditMessageObject } from "../entities/Message";
import { useToast } from "@chakra-ui/react";
import useMessages from "../hooks/useMessages";
import AuthToken from "../entities/AuthToken";
import messageService from "../services/messageService";

interface Props {
  token: AuthToken;
  userId: string;
}

const EditMessageForm = ({ token, userId }: Props) => {
  //message query
  const { data, error } = useMessages(userId, token);
  if (error) {
    console.log("SendMessageForm error");
    console.log(error);
    return null;
  }

  //hooks
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { register, handleSubmit } = useForm<EditMessageObject>();
  const [selectedMessage, setSelectedMessage] = useState({
    _id: "",
    messageBody: "",
    ownerId: "",
    category: "",
  });

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement> | string) => {
    const value = typeof event === "string" ? event : event.target.value;
    setInputValue(value);
  };

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const message = data?.find((message) => message._id === event.target.value);
    if (!message) {
      console.log(event.target.value);
      throw "Selected category has no associated message.";
    }
    setSelectedMessage(message);
    onInputChange(message.messageBody);
  };

  const onSubmit: SubmitHandler<EditMessageObject> = async (d) => {
    try {
      setIsLoading(true);
      await messageService.patch(selectedMessage._id, d, token);
      setIsLoading(false);

      toast({
        title: "Message saved",
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
        title: "Message edit failed",
        description: description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await messageService.delete(selectedMessage._id, token);
      setIsLoading(false);
      toast({
        title: "Message saved",
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
        duration: 5000,
        isClosable: true,
      });
    }
  };

  //componenet
  return (
    <>
      <AbsoluteCenter>
        <Box
          width="50vw"
          height="66vh"
          borderRadius="md"
          paddingLeft={5}
          paddingRight={5}
          boxShadow="md"
          bgColor="#FCFCFC">
          <VStack width="100%" height="100%" display="flex" flexFlow="column">
            <Box width="100%" height="100%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel
                  title="Edit Messages"
                  message="Select and edit messages"
                />
                <Select
                  width="100%"
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
                <Box height="100%" display="flex" flexBasis="colum">
                  <Textarea
                    {...register("messageBody")}
                    placeholder="Edit your messages here."
                    value={inputValue}
                    onChange={onInputChange}
                    disabled={selectedMessage.messageBody === "" ? true : false}
                    flex="1"
                    marginBottom={3}></Textarea>
                </Box>
                <Center>
                  {selectedMessage.messageBody === "" && (
                    <Box>
                      <Button
                        borderRadius="md"
                        borderWidth={0}
                        bg="gray.100"
                        textColor="white"
                        marginRight={5}
                        marginBottom={7}
                        _hover={{ bg: "gray.100" }}
                        cursor="not-allowed"
                        disabled>
                        Save
                      </Button>
                      <Button
                        borderRadius="md"
                        borderWidth={0}
                        bg="gray.100"
                        textColor="white"
                        marginBottom={7}
                        _hover={{ bg: "gray.100" }}
                        cursor="not-allowed"
                        disabled>
                        Delete
                      </Button>
                    </Box>
                  )}
                  {selectedMessage.messageBody !== "" && (
                    <Box>
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
                        marginRight={5}
                        marginBottom={7}
                        textColor="White">
                        {isLoading ? <Spinner /> : "Save"}
                      </Button>
                      <Button
                        type="button"
                        borderRadius="md"
                        borderWidth={0}
                        bg="red"
                        _hover={{
                          bg: "white",
                          textColor: "black",
                          borderColor: "red",
                          borderWidth: "1px",
                        }}
                        variant="ghost"
                        marginBottom={7}
                        textColor="White"
                        onClick={onDelete}>
                        {isLoading ? <Spinner /> : "Delete"}
                      </Button>
                    </Box>
                  )}
                </Center>
              </form>
            </Box>
          </VStack>
        </Box>
      </AbsoluteCenter>
    </>
  );
};

export default EditMessageForm;
