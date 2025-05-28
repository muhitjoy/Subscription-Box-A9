import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/Home/Home";
import CategoryBox from "../Pages/CategoryBox/CategoryBox";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MoreDetails from "../Pages/MoreDetails/MoreDetails";
import AuthLayout from "../layouts/AuthLayout";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading/Loading";
import PrivacyPolicy from "../Pages/Privacy&Policy/PrivacyPolicy";
import TermsandConditions from "../Pages/Terms&Conditions/TermsandConditions";
import ErrorPage from "../Pages/Errorpage/ErrorPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayouts></HomeLayouts>,
            loader: () => fetch("/data.json"),
            hydrateFallbackElement: <Loading></Loading>
            
        },
        
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                },
            ]
            
        },
        {
            path: "/more-details/:id",
            element: <PrivateRoute>
                <MoreDetails></MoreDetails>
            </PrivateRoute>,
            loader: () => fetch("/data.json"),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path: "/",
            element: <Home></Home>
        },           
        {
            path: "/profile",
            element: <PrivateRoute>
                <Profile></Profile>
                </PrivateRoute>
        },           
                
        {
            path: "/blogs",
            element: <Blogs></Blogs>,
            loader: () => fetch("/blogs.json"),
            hydrateFallbackElement: <Loading></Loading>
        }, 
        {
            path:"/privacy&policy",
            Component: PrivacyPolicy
        },
        {
            path:"/terms&conditions",
            Component: TermsandConditions
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>
        }
    ]);

    export default router ; 
