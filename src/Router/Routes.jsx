import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Layouts/Home/Home";
import AddProduct from "../Layouts/AddProduct/AddProduct";
import MyCart from "../Layouts/MyCart/MyCart";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/addproduct',
                element: <AddProduct></AddProduct>,
            },
            {
                path:'/mycart',
                element: <MyCart></MyCart>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },{
                path:'/register',
                element: <Register></Register>,
            },
        ]
    }
])

export default Routes;