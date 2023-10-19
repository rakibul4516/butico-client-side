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
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Update from "../Update/Update";


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
                loader: ({ params }) => fetch(`https://butico-server-bn6y23no7-rakibul-islams-projects.vercel.app/brands/${params.id}`)
            },
            {
                path: '/product/details/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <Update></Update>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://butico-server-bn6y23no7-rakibul-islams-projects.vercel.app/products/${params.id}`)


            },
            {
                path: '/mycart',
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>,
                loader: () => fetch('https://butico-server-bn6y23no7-rakibul-islams-projects.vercel.app/carts'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            }, 
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
])

export default Routes;