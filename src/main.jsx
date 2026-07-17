import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";
import { router } from './router/router.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from 'react-hot-toast';

AOS.init({
  duration:2000,
  once:false,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
)
