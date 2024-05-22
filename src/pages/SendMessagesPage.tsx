import useUser from "../hooks/useUser";
import useAuth from "../routing/hooks/useAuth";
import { authTokenGuard } from "../util/AuthTokenGuard";
import { safeJsonParse } from "../util/SafeJsonParse";
import SendMessageForm from "../components/SendMessageForm";

const SendMessagesPage = () => {
  const { token, userId } = useAuth();

  const tokenGuardResult = safeJsonParse(authTokenGuard)(token);
  if (tokenGuardResult.hasError) {
    console.log(`SendMessages, tokenError: ${tokenGuardResult.error}`);
    return null;
  }
  const { error } = useUser(userId, tokenGuardResult.parsed);

  if (error) {
    console.log(`SendMessages generic error: ${error}`);
    return null;
  }

  return (
    <>
      <SendMessageForm />
    </>
  );
};

export default SendMessagesPage;
