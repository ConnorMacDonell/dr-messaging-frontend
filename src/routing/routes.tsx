import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Dashboard from "../pages/Dashboard";
import UserSettingsPage from "../pages/UserSettingsPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "user_settings", element: <UserSettingsPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "user_settings", element: <UserSettingsPage /> },
    ],
  },
]);

export default router;
