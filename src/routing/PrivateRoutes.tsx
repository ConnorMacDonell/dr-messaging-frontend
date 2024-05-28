import { Box } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import SidebarProvider from "../providers/SideBarProvider";
import useAuth from "./hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const { userId } = useAuth();
  const currentUserId = userId;
  const location = useLocation();

  if (!currentUserId) {
    return <Navigate to="/login" replace state={{ from: location }} />;
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
