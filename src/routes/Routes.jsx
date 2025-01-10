import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import AllFoods from "../pages/AllFoods/AllFoods";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood/AddFood";
import MyFoods from "../pages/MyFoods/MyFoods";
import MyOrders from "../pages/MyOrders/MyOrders";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import Menu from "../pages/Menu/Menu";
import FindUs from "../pages/FindUs/FindUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <MyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/food-purchase/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase />
          </PrivateRoute>
        ),
      },
      {
        path: "/food/:id",
        element: <FoodDetails />,
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "find-us",
        element: <FindUs />,
      },
    ],
  },
]);

export default router;
