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
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack width="100vw" justify="space-between" padding={5}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" borderRadius={2} />
      </Link>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            bg="#000080"
            textColor="white"
            _hover={{
              bg: "white",
              textColor: "black",
              borderWidth: "1px",
            }}>
            Profile
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <Link to="/dashboard">
                <MenuItem>Dashboard</MenuItem>
              </Link>
              <Link to="/user_settings">
                <MenuItem>Account Settings</MenuItem>
              </Link>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Link to="/login">
          <Button colorScheme="gray">Login</Button>
        </Link>
      </Box>
    </HStack>
  );
};

export default NavBar;
