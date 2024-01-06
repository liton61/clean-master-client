import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Offered from "../pages/Offered/Offered";
import About from "../pages/About/About";
import Details from "../pages/Services/Details";
import OfferDetails from "../pages/Offered/OfferDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch('/services.json')

            },
            {
                path: "/offered",
                element: <Offered></Offered>
            },
            {
                path: "/offerDetails/:id",
                element: <OfferDetails></OfferDetails>,
                loader: () => fetch('/offered.json')
            },
            {
                path: "/about",
                element: <About></About>
            }
        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
]);

export default router;