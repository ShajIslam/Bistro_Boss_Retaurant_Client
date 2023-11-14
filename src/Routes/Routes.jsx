import {
    createBrowserRouter
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

  export  const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/ourShop/:category',
            element: <OurShop></OurShop>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
    ]
    }
  ])