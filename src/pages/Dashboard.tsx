import { Navigate } from "react-router-dom";
import useAuth from "../routing/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
