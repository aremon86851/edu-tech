import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import DetailsCourse from "../pages/DetailsCourse/DetailsCourse";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CheckOut from "../pages/CheckOut/CheckOut";

export const router = createBrowserRouter([
    {
        path: '/',
        loader: () => fetch('http://localhost:5000/courses'),
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <DetailsCourse></DetailsCourse>
            },
            {
                path: '/FAQ',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    }
])