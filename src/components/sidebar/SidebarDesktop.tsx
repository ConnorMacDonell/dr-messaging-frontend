import { SidebarItem, SidebarItemProps } from "../../entities/SidebarItem";
import { Flex, Icon, Link, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import useAuth from "../../routing/hooks/useAuth";

const SidebarDesktop = ({ sidebarItems }: SidebarItemProps) => {
  const { onLogout } = useAuth();
  const handleLogout = () => {
    onLogout();
  };
  const sidebarItemsDesktop = (item: SidebarItem, index: number) => (
    <ListItem key={index}>
      <Link
        display="block"
        as={NavLink}
        to={item.linkTo}
        onClick={item.label === "Logout" ? handleLogout : () => {}}
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
    <List>
      {sidebarItems.map((item, index) => sidebarItemsDesktop(item, index))}
    </List>
  );
};

export default SidebarDesktop;
