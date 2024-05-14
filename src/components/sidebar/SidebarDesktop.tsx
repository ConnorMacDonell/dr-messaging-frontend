import { SidebarItem, SidebarItemProps } from "../../entities/SidebarItem";
import { Flex, Icon, Link, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SidebarDesktop = ({ sidebarItems }: SidebarItemProps) => {
  const sidebarItemsDesktop = (item: SidebarItem, index: number) => (
    <ListItem key={index}>
      <Link
        display="block"
        as={NavLink}
        to={item.linkTo}
        _focus={{ bg: "gray.100" }}
        _hover={{
          bg: "gray.200",
        }}
        _activeLink={{ bg: "orange.500", color: "white" }}
        w="full"
        borderRadius="md">
        <Flex alignItems="center">
          <Icon boxSize="5" as={item.icon} />
          <Text ml={2}>{item.label}</Text>
        </Flex>
      </Link>
    </ListItem>
  );
  return (
    <List spacing={3}>
      {sidebarItems.map((item, index) => sidebarItemsDesktop(item, index))}
    </List>
  );
};

export default SidebarDesktop;
