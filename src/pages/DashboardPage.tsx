import useUser from "../hooks/useUser";
import useAuth from "../routing/hooks/useAuth";
import Dashboard from "../components/Dashboard";
import { authTokenGuard } from "../util/AuthTokenGuard";
import { safeJsonParse } from "../util/SafeJsonParse";

const DashboardPage = () => {
  const { token, userId } = useAuth();

  const tokenGuardResult = safeJsonParse(authTokenGuard)(token);
  if (tokenGuardResult.hasError) {
    console.log(`Dashboard, tokenError: ${tokenGuardResult.error}`);
    return null;
  }
  const { error } = useUser(userId, tokenGuardResult.parsed);

  if (error) {
    console.log(`Dashboard generic error: ${error}`);
    return null;
  }

  return (
    <>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
