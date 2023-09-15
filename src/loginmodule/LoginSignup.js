import React, {useState } from 'react'
import Login from './Login'
import Register from './Register'


const LoginSignup = () => {
  // const[loggedin,setloggedin]=useState('')
  //  const getData=(data)=>{
  //    setloggedin(data && data.msg)
  //  }
  
    const[toggle,setToggle]=useState(false)
const handelClick=()=>{
  setToggle(!toggle)
}
  return (
    <>
     {toggle? <Login handelClick={handelClick} />:<Register handelClick={handelClick} /> }
    </>
  )
}

export default LoginSignup
