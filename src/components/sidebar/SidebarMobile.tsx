import { SidebarItem, SidebarItemProps } from "../../entities/SidebarItem";
import { IconButton, List, ListItem, Tooltip } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SidebarMobileMode = ({ sidebarItems }: SidebarItemProps) => {
  const sideBarItemsMobileMode = (
    { icon: Icon, ...item }: SidebarItem,
    index: number
  ) => (
    <ListItem key={index}>
      <Tooltip label={item.label} placement="right">
        <IconButton
          key={index}
          as={NavLink}
          _focus={{ bg: "gray.100" }}
          _activeLink={{ boxShadow: "md", bg: "orange.500", color: "white" }}
          bg="transparent"
          aria-label={item.label}
          borderRadius="xl"
          icon={<Icon />}
          to={item.linkTo}
        />
      </Tooltip>
    </ListItem>
  );
  return (
    <List spacing={3}>
      {sidebarItems.map((item, index) => sideBarItemsMobileMode(item, index))}
    </List>
  );
};

export default SidebarMobileMode;
