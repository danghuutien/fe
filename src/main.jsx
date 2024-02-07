import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, } from "react-router-dom"
import 'tailwindcss/tailwind.css';
import ErrorPage from './ErrorPage';
import Login from './layout/components/Login';
import './index.css'
import axios from 'axios';
import LoginSuccess from './layout/posts/LoginSuccess';

// gửi kèm requesst
// const loginToken = localStorage.getItem("login_token");
// axios.defaults.headers.common = {'Authorization': `Bearer ${loginToken}`}
axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT;

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginSuccess />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage />,
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
