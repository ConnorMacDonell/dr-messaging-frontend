import { SidebarItem, SidebarItemProps } from "../../entities/SidebarItem";
import {
  Flex,
  Grid,
  GridItem,
  Icon,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import useAuth from "../../routing/hooks/useAuth";

const SidebarDesktop = ({ sidebarItems }: SidebarItemProps) => {
  const { onLogout } = useAuth();
  const handleLogout = () => {
    onLogout();
  };
  const logoutLink = sidebarItems[sidebarItems.length - 1];
  const sidebarItemsDesktop = (item: SidebarItem, index: number) => (
    <ListItem key={index} width="100%">
      <Link
        display="block"
        as={NavLink}
        to={item.linkTo}
        onClick={item.label === "Logout" ? handleLogout : () => {}}
        marginTop={item.label === "Logout" ? "auto" : "0"}
        _focus={{ bg: "#1A2933" }}
        _hover={{ bg: "#1A2933", color: "white" }}
        _activeLink={{ bg: "#1A2933", color: "white" }}
        w="100%"
        borderRadius={3}
        padding={2}
        height="5vh">
        <Flex alignItems="center">
          <Icon boxSize={5} as={item.icon} marginRight={3} />
          <Text ml={2} fontSize="sm">
            {item.label}
          </Text>
        </Flex>
      </Link>
    </ListItem>
  );
  return (
    <Grid
      templateColumns="1fr"
      templateRows="1fr auto"
      width="100%"
      height="100%">
      <GridItem width="100%">
        <List width="100%" height="100%">
          {sidebarItems.map((item, index) => sidebarItemsDesktop(item, index))}
        </List>
      </GridItem>
      <GridItem width="100%">
        <Link
          display="block"
          as={NavLink}
          to={logoutLink.linkTo}
          onClick={logoutLink.label === "Logout" ? handleLogout : () => {}}
          marginTop={logoutLink.label === "Logout" ? "auto" : "0"}
          _focus={{ bg: "#1A2933" }}
          _hover={{ bg: "#1A2933", color: "white" }}
          _activeLink={{ bg: "#1A2933", color: "white" }}
          w="100%"
          borderRadius={3}
          padding={2}
          marginBottom="5vh"
          height="5vh">
          <Flex alignItems="center">
            <Icon boxSize={5} as={logoutLink.icon} marginRight={3} />
            <Text ml={2} fontSize="sm">
              {logoutLink.label}
            </Text>
          </Flex>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default SidebarDesktop;
