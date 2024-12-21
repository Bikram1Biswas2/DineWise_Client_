import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Components/MainLayOut/MainLayOut';
import ErrorElement from './Components/ErrorElement';
import Home from './Components/MainLayOut/Home';
import AllFood from './Components/Pages/AllFood';
import Gallery from './Components/Pages/Gallery';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'',
        element:<Home></Home>
      },
      {
        path:'allFood',
        element:<AllFood></AllFood>
      },
     {
      path:'gallery',
      element:<Gallery></Gallery>
     }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
