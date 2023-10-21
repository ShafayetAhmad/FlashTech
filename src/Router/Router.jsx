import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import RegisterUser from "../Components/Shared/UserManagment/RegisterUser/RegisterUser";
import LoginUser from "../Components/Shared/UserManagment/LoginUser.jsx/LoginUser";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <RegisterUser></RegisterUser>,
      },
      {
        path: "/login",
        element: <LoginUser></LoginUser>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
