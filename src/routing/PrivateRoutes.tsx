import { Box } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import SidebarProvider from "../providers/SideBarProvider";
import useAuth from "./hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { currentUserId } = useAuth();

  if (!currentUserId) {
    return <Navigate to="/login" />;
  }
  return (
    <SidebarProvider>
      <SidebarContainer sidebar={<Sidebar />}>
        <Box padding={5}>
          <Outlet></Outlet>
        </Box>
      </SidebarContainer>
    </SidebarProvider>
  );
};

export default PrivateRoutes;
