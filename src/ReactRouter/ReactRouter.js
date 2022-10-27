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
import NotAvailableRoute from "../pages/NotAvailableRoute/NotAvailableRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotAvailableRoute></NotAvailableRoute>,
        loader: () => fetch('https://assignment-10-server-kohl-one.vercel.app/courses'),
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://assignment-10-server-kohl-one.vercel.app/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('https://assignment-10-server-kohl-one.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-kohl-one.vercel.app/courses/${params.id}`),
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
                loader: ({ params }) => fetch(`https://assignment-10-server-kohl-one.vercel.app/checkout/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '*',
                element: <NotAvailableRoute></NotAvailableRoute>
            }
        ]
    }
])