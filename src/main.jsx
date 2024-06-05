import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import App from './App';
import Details from './component/Header/Job_details/Details';
import Static from './component/Header/Static/Static';
import Applied from './component/Header/Applied/Applied';
import Hero from './component/Hero/Hero';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<App></App>
      },
      {
        path:'/',
        element:<Hero></Hero>
      },
      
      {
        path:'job/:job_details',
        element:<Details></Details>,
        loader:()=> fetch('/jobs.json')
      },
      {
        path:'static',
        element:<Static></Static>
      },
      {
        path:'applied',
        element:<Applied></Applied>,
        loader:()=> fetch('/public/jobs.json')
      },
      {
        path: "/*",
        element: <div className='text-center font-medium text-4xl my-8'><h1>404 Page Not Found</h1></div>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
