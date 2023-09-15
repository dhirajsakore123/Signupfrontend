import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const Navbar = () => { 
    const navigate=useNavigate()
    const [click,setClick]=useState(false)
    
    
   
  
    const handelClick=()=>{
        setClick(!click)
       click?navigate('/login'):navigate('/')
      
    }
    
    // const handelogout=()=>{
    //   if(status==="Loggedin"){
    //     navigate('/dashboard')
    //     setClick1(true)
    //   }
    //   else{
    //     setClick1(false)
    //     localStorage.removeItem('status')
       
    //   }
       
    // }
    
  return (
    <div className='navbar'>
      <button className='loginsinup-btn' onClick={handelClick}>Login/Signup</button>
    </div>
  )
}

export default Navbar
