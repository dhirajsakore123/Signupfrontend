import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Store=createContext()
const Register = () => {

  const navigate=useNavigate()
    const[name,setName]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
   const  obj={
      "name":name,
      "phone":phone,
      "email":email,
      "password":password
  }

 
   
// const[toggle,setToggle]=useState(false)
    const handelSubmit=(e)=>{
      e.preventDefault()
    

      setName('')
      setPhone('')
       setEmail('')
       setPassword('')
     
       axios.post(`https://signuploginbackend-57f3.onrender.com/user/api/register`,obj)
        .then(res=>alert(res.data.msg))
        .catch(err=>console.log(err))
      
      // localStorage.setItem('token',value && value.token)
      // console(value && value)
      // alert(value && value.msg)
    }
  //  const handelcall=()=>{
    
  //  }
    
   
    

   
  return (

    
     <form onSubmit={handelSubmit}>
        <div className='container'>
        <div className='box1'>
         <h1>Registration</h1>
        </div>
      
         <div className='box'>
         <label htmlFor='name'>Name</label> 
          <input type='input' name='name' id='name' onChange={(e)=>setName(e.target.value)} value={name} autoComplete='off' className='input'/>
        </div>
      
        <div className='box'>
          <label htmlFor='phone'>Phone No.</label>
          <input type='tel' name='phone' id='phone' onChange={(e)=>setPhone(e.target.value)}  value={phone} className='input'/>
       </div >
      
       <div className='box'>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='input'/>
       </div>
       
       <div className='box'>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} required className='input'/>
       </div>
         
        <div className='box'>
          <button type='submit' className='button'>Register</button>
         </div>
      
        <div >
            Alreadty have any account?<span onClick={()=>navigate('/login')} className='toggle'>Login Here</span>
        </div>
      
        </div>
      </form>
    
  )
}

export default Register
