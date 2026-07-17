import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/page/Home/Home";
import Studio from "../components/page/Studio";
import Services from "../components/page/Services";
import Contact from "../components/page/Contact";
import Faqs from "../components/page/Faqs";
import ErrorPage from "../components/page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
       {
        index:true, 
        Component:Home
       },
       {
        path:'studio',
        Component:Studio
       },
       {
        path:'services',
        Component:Services
       },
       {
        path:'contact',
        Component:Contact
       },
       {
        path:'faqs',
        Component:Faqs
       }
    ]
  },
  {
    path:"*",
    Component:ErrorPage
  }
]);