import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaShoePrints } from "react-icons/fa";
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate()
  const[email, setEmail] = useState("")
  const[pass, setPass] = useState("")
  const[showPass, setShowPass] = useState(false)
     const onSubmit = (e)=>{
      try{
e.preventDefault;
    localStorage.clear();
    localStorage.setItem("email", email);
    localStorage.setItem("name", email.split('@')[0]);
    toast.success("Logged In Successfully!")
    navigate("/profile")
      }
      catch{
        toast.error("Unexpected Error!")
      }
    
    }
  return (
 
<section className='min-h-screen min-w-screen flex justify-center'>
      <section className="h-[92vh] w-[280px] border border-[#E1E1E1] bg-[#F7F8F9] flex flex-col px-4 py-8 my-6">
       <div className='flex flex-col gap-2'>
         <h1 className="font-bold text-xl  text-[#1D2226]">Signin to your PopX account</h1>
      <p className="font-light w-[80%] text-sm text-[#3b4044]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <form action={onSubmit} className='my-4'>
        <div className='relative '>
          <label htmlFor="email" className='absolute top-1 left-3 bg-[#F7F8F9] pl-1 pr-2 text-xs text-[#6C25FF]'>Email Address</label>
         <input id="email" value ={email} required type="email" className='focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 w-full border-2 border-[#E1E1E1] my-3 py-1 pl-4 placeholder:text-xs  rounded-lg' placeholder='Enter email address' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
         <div className='relative '>
          <label htmlFor="password" className='absolute top-1 left-3 bg-[#F7F8F9] pl-1 pr-2 text-xs text-[#6C25FF]' placeholder="Enter password">Password</label>
         <input id="password" value ={pass} type={showPass?"text":"password" }placeholder='Enter password' required className=' focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 w-full border-2 border-[#E1E1E1] my-3 py-1 pl-4 placeholder:text-xs  rounded-lg' onChange={(e)=>{setPass(e.target.value)}}/>
       
          <div className='relative bottom-9 left-[90%]' onClick={()=>{setShowPass(!showPass)}}>  {showPass?<FaEyeSlash  className='text-sm'/>:<FaEye className='text-sm'/>}</div> 
        </div>
        <button type = "submit" className='bg-[#CBCBCB] hover:bg-[#d3d2d2] transition py-1 w-full rounded-lg'>Login</button>
      </form>
    </section>
     </section>

  )
}

export default Login
