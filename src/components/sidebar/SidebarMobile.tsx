import { SidebarItem, SidebarItemProps } from "../../entities/SidebarItem";
import {
  Box,
  Grid,
  GridItem,
  IconButton,
  List,
  ListItem,
  Tooltip,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SidebarMobileMode = ({ sidebarItems }: SidebarItemProps) => {
  const sidebarItemsMobile = (
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
    <Grid
      templateColumns="1fr"
      templateRows="1fr auto"
      width="100%"
      height="100%">
      <GridItem width="100%">
        <List width="100%" height="100%">
          {sidebarItems[0].map((item, index) =>
            sidebarItemsMobile(item, index)
          )}
        </List>
      </GridItem>
      <GridItem width="100%">
        <Box height="0.5px" bg="gray.400" borderRadius={5}></Box>
        <List width="100%" height="100%">
          {sidebarItems[1].map((item, index) =>
            sidebarItemsMobile(item, index)
          )}
        </List>
      </GridItem>
    </Grid>
  );
};

export default SidebarMobileMode;
