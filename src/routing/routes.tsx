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
import EditMessagesPage from "../pages/EditMessagesPage";
import SignupSuccessPage from "../pages/SignupSuccessPage";
import SignupCanceledPage from "../pages/SignupCanceledPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "signup/success", element: <SignupSuccessPage /> },
      { path: "signup/canceled", element: <SignupCanceledPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "create_message", element: <CreateMessagesPage /> },
      { path: "send_message", element: <SendMessagesPage /> },
      { path: "edit_message", element: <EditMessagesPage /> },
      { path: "user_settings", element: <UserSettingsPage /> },
    ],
  },
]);

export default router;
