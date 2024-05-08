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
  useToast,
} from "@chakra-ui/react";
import logo from "../assets/skull.jpg";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    toast({
      title: "Logged out",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };
  return (
    <HStack width="100vw" justify="space-between" padding={5}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Box>
        <Menu>
          <MenuButton as={Button} colorScheme="blue">
            Profile
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        {!localStorage.getItem("access_token") && (
          <Link to="/login">
            <Button colorScheme="gray">Login</Button>
          </Link>
        )}
        {localStorage.getItem("access_token") && (
          <Button colorScheme="gray" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Box>
    </HStack>
  );
};

export default NavBar;
