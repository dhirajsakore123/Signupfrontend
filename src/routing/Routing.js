import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../loginmodule/Home'
import Dashbord from '../loginmodule/Dashbord'
import Login from '../loginmodule/Login'
import Register from '../loginmodule/Register'
const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashbord/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing
