import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import RegisterUser from "../Components/Shared/UserManagment/RegisterUser/RegisterUser";
import LoginUser from "../Components/Shared/UserManagment/LoginUser.jsx/LoginUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/register",
        element: <RegisterUser></RegisterUser>,
      },
      {
        path: "/login",
        element: <LoginUser></LoginUser>,
      },
    ],
  },
]);

export default router;
