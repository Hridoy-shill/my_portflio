import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Home from './Component\'s/Home/Home';
import AboutMe from './Component\'s/AboutMe/AboutMe';
import Contact from './Component\'s/ContactMe/Contact';
import MyServices from './Component\'s/MyService\'s/MyServices';
import MySkills from './Component\'s/MySkills/MySkills';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/aboutMe',
        element:<AboutMe></AboutMe>
      },
      {
        path:'/myService',
        element:<MyServices></MyServices>
      },
      {
        path:'/mySkills',
        element:<MySkills></MySkills>
      },
      {
        path:'/contactMe',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
