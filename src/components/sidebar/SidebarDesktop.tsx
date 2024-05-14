import { SidebarItem, SidebarItemProps } from "../../entities/SidebarItem";
import { Flex, Grid, GridItem, Icon, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SidebarDesktop = ({ sidebarItems }: SidebarItemProps) => {
  const sidebarItemsDesktop = (item: SidebarItem, index: number) => (
    <GridItem key={index}>
      <Link
        display="block"
        as={NavLink}
        to={item.linkTo}
        _focus={{ bg: "#1A2933" }}
        _hover={{ bg: "#1A2933", color: "white" }}
        _activeLink={{ bg: "#1A2933", color: "white" }}
        w="full"
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
    </GridItem>
  );
  return (
    <Grid width="100%" height="100%" gap={3}>
      {sidebarItems.map((item, index) => sidebarItemsDesktop(item, index))}
    </Grid>
  );
};

export default SidebarDesktop;
