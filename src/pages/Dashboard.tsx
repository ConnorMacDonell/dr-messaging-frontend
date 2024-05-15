import useUser from "../hooks/useUser";
import useAuth from "../routing/hooks/useAuth";

const Dashboard = () => {
  const { currentUserId, token } = useAuth();
  const { data, error } = useUser(currentUserId, token);

  console.log(`DASHBOARD, userId: ${currentUserId}`);
  if (error) {
    console.log(error);
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
