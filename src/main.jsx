import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/MainLayOut/MainLayOut";
import ErrorElement from "./Components/ErrorElement";
import Home from "./Components/MainLayOut/Home";
import AllFood from "./Components/Pages/AllFood";
import Gallery from "./Components/Pages/Gallery";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import AuthProvider from "./Components/Provider/AuthProvider";
import AddFood from "./Components/Pages/AddFood";
import SingleFoodPage from "./Components/Pages/SingleFoodPage";
import FoodPurchase from "./Components/Pages/FoodPurchase";
import MyFood from "./Components/Pages/MyFood";
import MyOrders from "./Components/Pages/MyOrders";
import UpdatePage from "./Components/Pages/UpdatePage";
import TopFood from "./Components/MainLayOut/TopFood";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import ThemeProvider from "./Components/Provider/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import SpecialOffer from "./Components/Pages/SpecialOffer/SpecialOffer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "updateFood/:id",
        element: <UpdatePage></UpdatePage>,
      },
      {
        path: "allFood",
        element: <AllFood></AllFood>,
        loader: () => fetch(`${import.meta.env.VITE_base_URL}/foods`),
      },
      {
        path: "topFood",
        element: <TopFood></TopFood>,
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "singleFoodPage/:id",
        element: <SingleFoodPage></SingleFoodPage>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_base_URL}/foods/${params.id}`),
      },
      {
        path: "foodPurchase/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_base_URL}/foods/${params.id}`),
      },
      {
        path: "myFood",
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "myOrders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path:'specialOffer',
        element:<SpecialOffer></SpecialOffer>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
);
