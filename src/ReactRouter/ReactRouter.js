import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import FAQ from "../pages/FAQ";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import DetailsCourse from "../pages/DetailsCourse/DetailsCourse";
import Register from "../pages/Register";

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
            }
        ]
    }
])