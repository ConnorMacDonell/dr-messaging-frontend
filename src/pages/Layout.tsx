import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarProvider from "../providers/SideBarProvider";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import useAuth from "../routing/hooks/useAuth";

const Layout = () => {
  const { userId } = useAuth();

  return (
    <>
      {userId && (
        <SidebarProvider>
          <SidebarContainer sidebar={<Sidebar />}>
            <Box padding={5}>
              <Outlet></Outlet>
            </Box>
          </SidebarContainer>
        </SidebarProvider>
      )}
      {!userId && (
        <>
          <Grid height="100vh" width="100vw" templateRows="1fr auto">
            <GridItem height="12vh" width="100vw">
              <NavBar />{" "}
            </GridItem>
            <GridItem height="88vh" width="100vw">
              <Outlet></Outlet>
            </GridItem>
          </Grid>
        </>
      )}
    </>
  );
};

export default Layout;
