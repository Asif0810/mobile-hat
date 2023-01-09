
import Main from "../Layout/Main";
import AddAproduct from "../Pages/addProduct/AddAproduct";
import AdminActivity from "../Pages/AdminActivity/AdminActivity";

import Home from "../Pages/Home/Home/Home";

import CategoryPhone from "../Pages/Home/OurProduct/categoryPhone";
import Login from "../Pages/Login/Login";
import MyBuyers from "../Pages/MyBuyers/MyBuyers";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Register from "../Pages/Register/Register";
import UploadedPoruct from "../Pages/uploadedProduct/UploadedPoruct";
import PrivateRoutes from "./privateRoutes";



const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category-phones/:category',
                loader: ({ params }) => fetch(`http://localhost:5000/all-phones?category=${params.category}`),
                element: <CategoryPhone></CategoryPhone>
            },

            {
                path: '/add-product',
                element: <PrivateRoutes><AddAproduct></AddAproduct></PrivateRoutes>
            },
            {
                path: '/my-uploaded-product',
                element: <PrivateRoutes><UploadedPoruct></UploadedPoruct></PrivateRoutes>
            },
            {
                path: '/my-buyer',
                element: <PrivateRoutes><MyBuyers></MyBuyers></PrivateRoutes>
            },
            {
                path: '/order',
                element: <PrivateRoutes><MyOrder></MyOrder></PrivateRoutes>
            },
            {
                path: '/admin-activity',
                element: <AdminActivity></AdminActivity>
            }

        ]
    },




])