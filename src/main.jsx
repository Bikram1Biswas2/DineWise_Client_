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
         path:'addFood',
         element:<AddFood></AddFood>
      },
      {
        path: "allFood",
        element: <AllFood></AllFood>,
        loader:()=>fetch(`${import.meta.env.VITE_base_URL}/foods`)
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path:'singleFoodPage/:id',
        element:<SingleFoodPage></SingleFoodPage>,
        loader:({params})=>fetch(`${import.meta.env.VITE_base_URL}/foods/${params.id}`)
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
