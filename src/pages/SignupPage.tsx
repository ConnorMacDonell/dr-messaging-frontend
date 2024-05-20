import { Box } from "@chakra-ui/react";
import CreateUserForm from "../components/CreateUserForm";

const SignupPage = () => {
  return (
    <>
      <Box height="100vh" width="100vw">
        <CreateUserForm />
      </Box>
    </>
  );
};

export default SignupPage;
