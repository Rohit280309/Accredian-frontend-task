import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import AddReferral, { loader as tokenLoader} from "@/pages/addReferral";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App /> 
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/addReferral/:course/:id",
        element: <AddReferral />,
        loader: tokenLoader
    },
])