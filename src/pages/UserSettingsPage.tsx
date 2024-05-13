import { Navigate } from "react-router-dom";
import useAuth from "../routing/hooks/useAuth";
import useUser from "../hooks/useUser";
import UserProfileDisplay from "../components/UserProfileDisplay";
import EditUserSettingsForm from "../components/EditUserSettingsForm";
import { useToast } from "@chakra-ui/react";

const UserSettingsPage = () => {
  const toast = useToast();
  const { authorizedUser } = useAuth();
  if (!authorizedUser) {
    return <Navigate to="/login" />;
  }

  const { data, error } = useUser(authorizedUser.userId);

  if (error) {
    console.log(error);
    return null;
  }

  if (!data) {
    toast({
      title: "An unexpected error occurred",
      description: "Please try again later",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return null;
  }

  return (
    <>
      <UserProfileDisplay
        firstName={data?.firstName}
        lastName={data?.lastName}
        permissions={data.permissionFlags}
      />
      <EditUserSettingsForm />
    </>
  );
};

export default UserSettingsPage;
