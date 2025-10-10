import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../Pages/log-In/log-In";
import SignUp from "../Pages/sign-In/sign-In";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [

            {
                path: "/",
                Component: Login
            },
            {
                path: "/sign-up",
                Component: SignUp
            }
        ]
    },
]);