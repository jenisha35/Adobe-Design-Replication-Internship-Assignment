import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()
  const[showPass, setShowPass] = useState(false)
  const[email, setEmail] = useState("")
    const[pass, setPass] = useState("")
    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[company, setCompany] = useState("")
    const[option, setOption] = useState("")
       const onSubmit = (e)=>{
             try{
e.preventDefault;
 e.preventDefault;
      localStorage.clear();
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
    toast.success("Logged In Successfully!")
    navigate("/profile")
      }
      catch{
        toast.error("Unexpected Error!")
      }
    }
      
  return (
    <section className='min-h-screen min-w-screen flex justify-center'>
      <section className="relative h-[92vh] w-[280px] border border-[#E1E1E1] bg-[#F7F8F9] flex flex-col px-4 py-8 my-6">
       <div className='flex flex-col gap-2'>
         <h1 className="font-bold text-xl  text-[#1D2226]">Create your PopX account</h1>
      <p className="font-light w-[80%] text-sm text-[#3b4044]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <form action={onSubmit} className='my-4'>
        <div className='relative '>
          <label htmlFor="name" className='absolute top-1 left-3 bg-[#F7F8F9] pl-1 pr-2 text-xs text-[#6C25FF]'>Full Name</label>
         <input id="name" value ={name} type="text" required className='focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 text-[#1D2226] w-full border-2 border-[#E1E1E1] my-3 py-1 pl-4 placeholder:text-xs  rounded-lg' placeholder='Enter full name' onChange={(e)=>{setName(e.target.value)}}/>
        </div>
         <div className='relative '>
          <label htmlFor="phone" className='absolute top-1 left-3 bg-[#F7F8F9] pl-1 pr-2 text-xs text-[#6C25FF]' placeholder="Enter phone number">Phone number</label>
         <input id="phone" value ={phone} type="text" placeholder='Enter password' required className='focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 text-[#1D2226] w-full border-2 border-[#E1E1E1] my-3 py-1 pl-4 placeholder:text-xs  rounded-lg' onChange={(e)=>{setPhone(e.target.value)}}/>
        </div>
         <div className='relative '>
          <label htmlFor="email" className='absolute top-1 left-3 bg-[#F7F8F9] pl-1 pr-2 text-xs text-[#6C25FF]'>Email Address</label>
         <input id="email" value ={email} type="email" required className='focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 text-[#1D2226] w-full border-2 border-[#E1E1E1] my-3 py-1 pl-4 placeholder:text-xs  rounded-lg' placeholder='Enter email address' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
         <div className='relative '>
          <label htmlFor="password" className='absolute top-1 left-3 bg-[#F7F8F9] pl-1 pr-2 text-xs text-[#6C25FF]'>Password</label>
         <input id="password" value ={pass} type={showPass?"text":"password"} required className='focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 w-full border-2 border-[#E1E1E1] my-3 py-1 pl-4 placeholder:text-xs  rounded-lg' placeholder='Enter password' onChange={(e)=>{setPass(e.target.value)}}/>
                  <div className='relative bottom-9 left-[90%]' onClick={()=>{setShowPass(!showPass)}}>  {showPass?<FaEyeSlash  className='text-sm'/>:<FaEye className='text-sm'/>}</div> 

        </div>
         <div className='relative '>
          <label htmlFor="company" className='absolute top-1 left-3 bg-[#F7F8F9] pl-1 pr-2 text-xs text-[#6C25FF]'>Company name</label>
         <input id="company" value ={company} type="text" required className='focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 text-[#1D2226] w-full border-2 border-[#E1E1E1] my-3 py-1 pl-4 placeholder:text-xs  rounded-lg' placeholder='Enter company name' onChange={(e)=>{setCompany(e.target.value)}}/>
        </div>
        <label className = "text-sm text-[#1D2226]">Are you an Agency?</label>
        <div className="flex gap-4">
          <label
          className="text-sm">
            <input
            required
            type = "radio"
            name = "choice"
            value = "yes"
            checked = {option === "yes"}
            onChange = {(e)=>{setOption(e.target.value)}}
            className="accent-[#642AF5] mr-2"
            />Yes
          </label>
            <label
            className="text-sm">
            <input
            required
            type = "radio"
            name = "choice"
            value = "no"
            checked = {option === "no"}
            onChange = {(e)=>{setOption(e.target.value)}}
            className="accent-[#642AF5] mr-2"
            />No
          </label>
        </div>
        <button type = "submit" className='text-white text-sm absolute bottom-4 left-4  bg-[#642AF5] hover:bg-[#6411F5] transition py-1 w-[90%] h-8 rounded-lg'>Create Account</button>
      </form>
    </section>
     </section>
  )
}

export default Register
