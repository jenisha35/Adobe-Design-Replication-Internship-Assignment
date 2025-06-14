import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
     <section className='min-h-screen min-w-screen flex justify-center'>
      <section className="h-[92vh] w-[280px] border border-[#E1E1E1] bg-[#F7F8F9] flex flex-col  justify-end px-4 py-8 my-6">
      <article className="w-full max-w-md mb-2">
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="font-bold text-xl  text-[#1D2226]">
            Welcome to PopX
          </h1>
          <p className="font-light w-[80%] text-sm text-[#3b4044]">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button className="cursor-pointer rounded-lg py-1.5 px-4 text-white bg-[#6C25FF] hover:bg-[#5b1ee0] transition" onClick={()=>{navigate('/register')}}>
            Create Account
          </button>
          <button className="cursor-pointer rounded-lg py-1.5 px-4 text-[#1D2226] bg-[#6C25FF4B] hover:bg-[#6C25FF33] transition" onClick={()=>{navigate("/login")}}>
            Already Registered? Login
          </button>
        </div>
      </article>
    </section>
     </section>
   
  )
}

export default Home
