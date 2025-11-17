import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../Pages/auth/log-In";
import SignUp from "../Pages/auth/RegisterPage";
import ForgotPassword from "../Pages/auth/forgotPasswordPage";
import OTPverify from "../Pages/auth/OTPverifyPage";
import ChangePassword from "../Pages/auth/ChangePAsswordPage";

export const routes = {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot_password',
    otpVerify: '/otp_verify',
    changePassword: '/change_password',
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
            }
        ]
    },
]);
