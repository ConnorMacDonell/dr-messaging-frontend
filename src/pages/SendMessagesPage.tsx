import useUser from "../hooks/useUser";
import useAuth from "../routing/hooks/useAuth";
import { authTokenGuard } from "../util/AuthTokenGuard";
import { safeJsonParse } from "../util/SafeJsonParse";
import SendMessageForm from "../components/SendMessageForm";

const SendMessagesPage = () => {
  const { token, userId } = useAuth();

  const tokenGuardResult = safeJsonParse(authTokenGuard)(token);
  if (tokenGuardResult.hasError) {
    console.log(
      "==================================================================="
    );
    console.log(`SendMessages, tokenError: ${tokenGuardResult.error}`);
    return null;
  }

  const parsedToken = tokenGuardResult.parsed;
  const { error } = useUser(userId, parsedToken);

  if (error) {
    console.log(error.message);
    console.log("------------------------------------------");
    console.log(`SendMessages generic error: ${error}`);
    return null;
  }

  return (
    <>
      <SendMessageForm userId={userId} token={parsedToken} />
    </>
  );
};

export default SendMessagesPage;
