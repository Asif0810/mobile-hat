
import Main from "../Layout/Main";
import AddProduct from "../Pages/addProduct/AddProduct";
import Home from "../Pages/Home/Home/Home";
import All_android from "../Pages/Home/OurProduct/All_button_phone/all_android/All_android";
import All_button from "../Pages/Home/OurProduct/All_button_phone/All_button";
import All_iphone from "../Pages/Home/OurProduct/All_iphone/All_iphone";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



const { createBrowserRouter } = require("react-router-dom");
// const { default: Home } = require("../Pages/Home/Home/Home");

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
                path: '/all-button-phone',
                element: <All_button></All_button>
            },
            {
                path: '/all-anodroid-phone',
                element: <All_android></All_android>
            },
            {
                path: '/all-iphone',
                element: <All_iphone></All_iphone>
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
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            }

        ]
    }
])