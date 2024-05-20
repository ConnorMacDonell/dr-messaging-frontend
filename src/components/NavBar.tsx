import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import logo from "../assets/skull.jpg";
import { Link, Navigate } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack width="100vw" justify="space-between" padding={5}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" borderRadius={2} />
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
