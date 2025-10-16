import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Home/Login/Login.jsx';
import Register from './components/Home/Register/Register.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
   {
    index: true,
    Component: Home,
   },
   {
    path: '/login',
    Component: Login,
   },
   {
    path: '/register',
    Component: Register,
   }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)