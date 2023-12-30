import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import ViewDetails from './ViewDetails.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import { cardsLoderData } from './card&Jobsdata.js';
import Blog from './Blog.jsx';
import StatisticsChart from './StatisticsChart.jsx';
import Errorpage from './Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<Errorpage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('jobs.json')
      },
      {
       path:'statictics',
       element:<StatisticsChart/>
      },
      {
        path:'viewdetails',
        element:<ViewDetails/>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:cardsLoderData
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
