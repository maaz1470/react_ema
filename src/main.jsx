import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Main from './component/Main/Main.jsx'
import Layout from './component/Layout/Layout.jsx'
import Shop from './component/Shop/Shop.jsx'
import Orders from './component/Orders/Orders.jsx'
import Inventory from './component/Inventory/Inventory.jsx'
import Login from './Auth/Login.jsx'
import SignUp from './component/SignUp/SignUp.jsx'
import AuthProvider from './component/Provider/AuthProvider.jsx'
import PrivateRoute from './component/PrivateRoute/PrivateRoute.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '*',
        element: <h1>Page not found</h1>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
