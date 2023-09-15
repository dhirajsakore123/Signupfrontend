import axios from 'axios'
import React from 'react'

const Dashbord = () => {
    
    const handelCheck=()=>{
        const token =localStorage.getItem("token")
        axios.get(`https://signuploginbackend-57f3.onrender.com/user/api/dashbord`,{
         headers:{
            "authorization":`Bearer ${token}`
         } 
        })
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }

  return (
    <div>
      <h1>dashbord</h1>
        <button onClick={handelCheck}>check profile</button>
    </div>
  )
}

export default Dashbord
