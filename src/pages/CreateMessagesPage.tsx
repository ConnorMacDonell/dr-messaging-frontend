import useUser from "../hooks/useUser";
import useAuth from "../routing/hooks/useAuth";
import { authTokenGuard } from "../util/AuthTokenGuard";
import { safeJsonParse } from "../util/SafeJsonParse";
import CreateMessageForm from "../components/CreateMessageForm";

const CreateMessagesPage = () => {
  const { token, userId } = useAuth();

  const tokenGuardResult = safeJsonParse(authTokenGuard)(token);
  if (tokenGuardResult.hasError) {
    console.log(`CreateMessages, tokenError: ${tokenGuardResult.error}`);
    return null;
  }
  const parsedToken = tokenGuardResult.parsed;
  const { error } = useUser(userId, parsedToken);

  if (error) {
    console.log(`CreateMessages generic error: ${error}`);
    return null;
  }

  return (
    <>
      <CreateMessageForm userId={userId} token={parsedToken} />
    </>
  );
};

export default CreateMessagesPage;
