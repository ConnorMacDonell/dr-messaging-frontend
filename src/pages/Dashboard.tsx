import { Navigate } from "react-router-dom";
import useAuth from "../routing/hooks/useAuth";
import useUser from "../hooks/useUser";

const Dashboard = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }

  const { data, error } = useUser(user.userId);

  if (error) {
    return null;
    console.log(error);
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
