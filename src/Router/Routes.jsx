import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Layouts/Home/Home";
import AddProduct from "../Layouts/AddProduct/AddProduct";
import MyCart from "../Layouts/MyCart/MyCart";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import ProductPage from "../Components/ProductPage/ProductPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/addproduct',
                element: <PrivateRoute>
                            <AddProduct>

                            </AddProduct>
                        </PrivateRoute>,
            },
            {
                path: '/product/:id',
                element: <ProductPage></ProductPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`)
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            }, {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
])

export default Routes;