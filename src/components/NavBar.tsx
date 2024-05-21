import { Box, Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/hermes-staff.jpeg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack
      height="100%"
      width="100%"
      justify="space-between"
      padding={5}
      overflow="hidden">
      <Link to="/">
        <Image src={logo} boxSize="10%" objectFit="cover" borderRadius={2} />
      </Link>
      <Box>
        <Link to="/signup">
          <Button
            as={Button}
            bg="#000080"
            textColor="white"
            _hover={{
              bg: "white",
              textColor: "black",
              borderWidth: "1px",
            }}>
            Signup
          </Button>
        </Link>
        <Link to="/login">
          <Button colorScheme="gray">Login</Button>
        </Link>
      </Box>
    </HStack>
  );
};

export default NavBar;
