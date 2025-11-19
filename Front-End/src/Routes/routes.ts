import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../Pages/auth/LoginPage";
import SignUp from "../Pages/auth/RegisterPage";
import ForgotPassword from "../Pages/auth/ForgotPasswordPage";
import OTPverify from "../Pages/auth/OTPverifyPage";
import Homepage from "../Pages/Home/HomePage";
import ChangePassword from "../Pages/auth/ChangePAsswordPage";

export const routes = {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot_password',
    otpVerify: '/otp_verify',
    changePassword: '/change_password',
    home : '/home',
}


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Login
            },
            {
                path: routes.login,
                Component: Login
            },
            {
                path: routes.register,
                Component: SignUp
            },
            {
                path: routes.forgotPassword,
                Component: ForgotPassword
            },
            {
                path: routes.otpVerify,
                Component: OTPverify
            },
            {
                path: routes.changePassword,
                Component: ChangePassword
            },
            {
                path: routes.home,
                Component: Homepage
            }
        ]
    },
]);
