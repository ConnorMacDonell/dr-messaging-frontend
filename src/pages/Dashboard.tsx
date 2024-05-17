import useUser from "../hooks/useUser";
import useAuth from "../routing/hooks/useAuth";
import { authTokenGuard } from "../util/AuthTokenGuard";
import { safeJsonParse } from "../util/SafeJsonParse";

const Dashboard = () => {
  const { token, userId } = useAuth();

  const tokenGuardResult = safeJsonParse(authTokenGuard)(token);
  if (tokenGuardResult.hasError) {
    console.log(`Dashboard, tokenError: ${tokenGuardResult.error}`);
    return null;
  }
  const { data, error } = useUser(userId, tokenGuardResult.parsed);

  if (error) {
    console.log(`Dashboard generic error: ${error}`);
    return null;
  }

  return (
    <>
      <div>Dashboard</div>
      <div>Hello, {data?.firstName}!</div>
      <div>Your email is: {data?.email}</div>
      <div>
        Your password is: {data?.password ? data?.password : "a secret"}
      </div>
    </>
  );
};

export default Dashboard;
