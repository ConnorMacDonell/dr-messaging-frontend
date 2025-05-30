import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarProvider from "../providers/SideBarProvider";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import useAuth from "../routing/hooks/useAuth";

const Layout = () => {
  const { userId, token } = useAuth();

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
          <Outlet />
        </>
      )}
    </>
  );
};

export default Layout;
