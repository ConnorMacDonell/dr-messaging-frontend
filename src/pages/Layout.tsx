import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
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
          <Box height="100vh">
            <NavBar />{" "}
            <Box padding={5}>
              <Outlet></Outlet>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Layout;
