import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrolltoTop'

const Layout = () => {
  return (
    <>
      <ScrollToTop/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
