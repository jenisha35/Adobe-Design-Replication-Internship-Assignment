import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";


const MyRoutes = createBrowserRouter([
  
      {
        path:"/",
        element:<Home></Home>
    },
      {
        path:"/login",
        element:<Login></Login>
    },
      {
        path:"/register",
        element:<Register></Register>
    },
      {
        path:"/profile",
        element:<Profile></Profile>
    },

])

export default MyRoutes