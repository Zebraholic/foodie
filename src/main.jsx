import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutUs from './pages/AboutUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: < App />,
  },
  {
    path: '/about-us',
    element: < AboutUs />,
  },
  {
    path: '*',
    element: <div>Sorry, that page is Not Found</div>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
