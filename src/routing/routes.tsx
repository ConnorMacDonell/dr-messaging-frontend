import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserSettingsPage from "../pages/UserSettingsPage";
import PrivateRoutes from "./PrivateRoutes";
import CreateMessagesPage from "../pages/CreateMessagesPage";
import SendMessagesPage from "../pages/SendMessagesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "create_message", element: <CreateMessagesPage /> },
      { path: "send_message", element: <SendMessagesPage /> },
      { path: "user_settings", element: <UserSettingsPage /> },
    ],
  },
]);

export default router;
