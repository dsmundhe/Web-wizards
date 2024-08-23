import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Loginpage from '../components/Loginpage'
import SignupPage from '../components/Signuppage'
function Layout() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout
