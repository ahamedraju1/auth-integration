import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Layouts/Root.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
 

 

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {path:'/register', Component: Register},
      {path: '/login', Component: Login}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
