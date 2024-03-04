import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../Layout/WebLayout";
import LandingPage from "../Pages/LandingPage";





export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout/>,
        children:[
            {
                index: true,
                element: <LandingPage/>
            }
        ]
    }
])