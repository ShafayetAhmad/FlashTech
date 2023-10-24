import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import RegisterUser from "../Components/Shared/UserManagment/RegisterUser/RegisterUser";
import LoginUser from "../Components/Shared/UserManagment/LoginUser.jsx/LoginUser";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoutes";
import BrandPage from "../Components/BrandPage/BrandPage";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import MyCart from "../Components/Shared/UserManagment/MyCart/MyCart";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
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
      {
        path: "/brand-Product/:brand",
        element: (
            <BrandPage></BrandPage>
        ),
      },
      {
        path: "/brand-Product/:brand/:_id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
