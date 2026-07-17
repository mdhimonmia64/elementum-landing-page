import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/shared/Navbar/Navbar'
import Footer from '../components/shared/Footer/Footer'

export default function RootLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
