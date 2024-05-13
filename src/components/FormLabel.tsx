import { Center, VStack, Box } from "@chakra-ui/react";

interface Props {
  title: string;
  message: string;
}

const FormLabel = ({ title, message }: Props) => {
  return (
    <Center>
      <VStack>
        <Box fontSize="42px" marginBottom={2} marginTop={10}>
          <label>{title}</label>
        </Box>
        <Box marginBottom={10} textColor="gray">
          <p>{message}</p>
        </Box>
      </VStack>
    </Center>
  );
};

export default FormLabel;
