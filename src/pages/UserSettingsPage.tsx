import useAuth from "../routing/hooks/useAuth";
import useUser from "../hooks/useUser";
import UserProfileDisplay from "../components/UserProfileDisplay";
import EditUserSettingsForm from "../components/EditUserSettingsForm";
import { useToast } from "@chakra-ui/react";
import { authTokenGuard } from "../util/AuthTokenGuard";
import { safeJsonParse } from "../util/SafeJsonParse";

const UserSettingsPage = () => {
  const toast = useToast();
  const { userId, token } = useAuth();
  const currentUserId = userId;

  const tokenGuardResult = safeJsonParse(authTokenGuard)(token);
  if (tokenGuardResult.hasError) {
    console.log(`User Settings, tokenError: ${tokenGuardResult.error}`);
    return null;
  }

  const { data, error } = useUser(currentUserId, tokenGuardResult.parsed);

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
      <EditUserSettingsForm userData={data} token={tokenGuardResult.parsed} />
    </>
  );
};

export default UserSettingsPage;
