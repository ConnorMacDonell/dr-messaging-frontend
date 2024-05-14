import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarProvider from "../components/providers/SideBarProvider";
import SidebarContainer from "../components/sidebar/SidebarContainer";

const Layout = () => {
  return (
    <>
      {localStorage.getItem("accessToken") && (
        <SidebarProvider>
          <SidebarContainer sidebar={<Sidebar />}>
            <Box padding={5}>
              <Outlet></Outlet>
            </Box>
          </SidebarContainer>
        </SidebarProvider>
      )}
      {!localStorage.getItem("accessToken") && (
        <>
          <NavBar />{" "}
          <Box padding={5}>
            <Outlet></Outlet>
          </Box>
        </>
      )}
    </>
  );
};

export default Layout;
