
import Main from "../Layout/Main";
import AddAproduct from "../Pages/addProduct/AddAproduct";

import Home from "../Pages/Home/Home/Home";

import CategoryPhone from "../Pages/Home/OurProduct/categoryPhone";
import Login from "../Pages/Login/Login";
import MyBuyers from "../Pages/MyBuyers/MyBuyers";
import Register from "../Pages/Register/Register";
import UploadedPoruct from "../Pages/uploadedProduct/UploadedPoruct";



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
                element: <AddAproduct></AddAproduct>
            },
            {
                path: '/my-uploaded-product',
                element: <UploadedPoruct></UploadedPoruct>
            },
            {
                path: '/my-buyer',
                element: <MyBuyers></MyBuyers>
            }

        ]
    },




])