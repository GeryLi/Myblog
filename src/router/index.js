import React from "react"
import { Navigate } from "react-router-dom"


// @ts-ignore
const Home = React.lazy(() => import('@/views/home'))
// @ts-ignore
const Articles = React.lazy(() => import('@/views/articles'))
// @ts-ignore
const Pictures = React.lazy(() => import('@/views/pictures'))
// @ts-ignore
const Music = React.lazy(() => import('@/views/music'))
// @ts-ignore
const Login = React.lazy(() => import('@/views/login'))
// @ts-ignore
const Notfound = React.lazy(() => import('@/views/notfound'))
// @ts-ignore
const Space = React.lazy(() => import('@/views/space'))
// @ts-ignore
const Detail = React.lazy(() => import('@/views/detail'))

export const routes = [
    {
        path: '/',
        element: <Navigate to="/home" />
    },

    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/articles',
        element: <Articles />,

    },
    {
        path: '/pictures',
        element: <Pictures />
    },
    {
        path: '/music',
        element: <Music />
    },
    {
        path: '/space',
        element: <Space />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/detail/:id',
        element: <Detail />
    },
    {
        path: '*',
        element: <Notfound />
    },
]