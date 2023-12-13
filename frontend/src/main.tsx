import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home/index.tsx'
import Login from './pages/Login/index.tsx'
import ErrorPage from './pages/ErrorPage/index.tsx'
import Product from './pages/Product/index.tsx'
import Cart from './pages/Cart/index.tsx'

import './index.css'

import { Provider } from 'react-redux'
import store from './redux/store.ts'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/product/:id",
    element: <Product />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='653003675525-b05q2v3i6r29kk295at4edhvdq8unpiv.apps.googleusercontent.com'>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
