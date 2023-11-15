import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Auth/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<HelmetProvider > 
 
  <div className='max-w-screen-xl	mx-auto'>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </div>
  
  </HelmetProvider>  
  </React.StrictMode>,
)
