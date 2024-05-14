import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
  sidebar: ReactElement;
}

const SidebarContainer = ({ children, sidebar }: Props) => {
  return (
    <Grid templateAreas={`'sidebar main'`} templateColumns="auto 1fr">
      <GridItem area="sidebar" as="aside" w="full" p={0}>
        <Box
          pos="sticky"
          top={0}
          w={{ base: 0, md: "15vw" }}
          borderRight="1px solid"
          borderColor="gray.100"
          p={{ base: 0, md: 2 }}
          paddingTop={8}
          height="100vh"
          overflow="auto"
          css={{
            "&::-webkit-scrollbar": {
              height: "var(--chakra-sizes-1)",
              width: "var(--chakra-sizes-1)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "var(--chakra-colors-gray-400)",
            },
          }}>
          {sidebar}
        </Box>
      </GridItem>
      <GridItem as="main" area="main" p={{ base: 6, md: 8 }}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default SidebarContainer;
