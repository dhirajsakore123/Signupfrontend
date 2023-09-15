import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  
 const  obj={
    "email":email,
    "password":password
}


  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log(obj)
     setEmail('')
     setPassword('')
   
      axios.post(`https://signuploginbackend-57f3.onrender.com/user/api/login`,obj)
      .then(res=>{
        alert(res.data.msg)
      localStorage.setItem('token',res.data.token)
    

        if(res.data.token){
          navigate('/dashboard')
          alert(res.data.msg)
        }
       

       
      })
      .catch(err=>console.log(err))
     

      
     
  }
 
 
  return (
  <form onSubmit={handelSubmit}>
    <div className='container'>
    <div className='box1'>
     <h1>Login</h1>
    </div>

    <div className='box'>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}  className='input'/>
   </div>

   <div className='box'>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}  className='input'/>
   </div>

   <div className='box'>
      <button type='submit' className='button' >Login</button>
    </div>

     
     <div>
       Don't have any account?<span onClick={()=>navigate('/register')} className='toggle'>Register Here</span>
     </div>

    </div>
  </form>
  )
}

export default Login
