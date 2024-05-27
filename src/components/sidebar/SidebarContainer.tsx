import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
  sidebar: ReactElement;
}

const SidebarContainer = ({ children, sidebar }: Props) => {
  return (
    <Grid templateAreas={`'sidebar main'`} templateColumns="auto 1fr">
      <GridItem
        area="sidebar"
        as="aside"
        width="100%"
        height="100vh"
        bg="#0163A8"
        padding={0}>
        <Box
          pos="sticky"
          top={0}
          width={{ base: 0, md: "18vw" }}
          height={{ base: 0, md: "100%" }}
          padding={{ base: 0, md: 2 }}
          paddingTop={8}
          overflow="auto"
          textColor="white">
          {sidebar}
        </Box>
      </GridItem>
      <GridItem as="main" area="main" padding={{ base: 6, md: 8 }}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default SidebarContainer;
