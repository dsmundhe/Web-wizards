import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
function Layout() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout
