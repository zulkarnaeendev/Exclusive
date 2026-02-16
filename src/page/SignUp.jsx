import React from 'react'
import signimg from '../assets/Side Image.png'
import Google from '../assets/Icon-Google.png'
import { NavLink } from 'react-router'

const SignUp = () => {
  return (
    <div className='container mt-[185.5px] mb-[265.5px] flex gap-32.25 relative'>
      <div className="">
        <img src={signimg} alt="Sign In Image" className='w-201.25 h-195.25 absolute -top-31.25 -left-91.75' />
      </div>
      <div className="container flex flex-col items-end">
        <div className="flex flex-col gap-12">
          <div className="">
            <h1 className='mb-6 font-medium text-[36px]'>Create an account</h1>
            <p>Enter your details below</p>
          </div>
          <div className="flex flex-col gap-10">
            <div className=" flex flex-col gap-10">
              <input type="text" placeholder='Name' className='border-b-2 border-b-black outline-none' />
              <input type="text" placeholder='Email or Phone Number' className='border-b-2 border-b-black outline-none' />
              <input type="password" placeholder='Password' className='border-b-2 border-b-black outline-none' />
            </div>
            <div className="flex flex-col gap-4 rounded-1">
              <div className='bg-reddish pt-4 pb-4 text-center w-full rounded-sm text-middle cursor-pointer'>
                <button className='font-medium text-white'>Create Account</button>
              </div>
              <div className="flex gap-4 border-black border-2 pt-4 pb-4 justify-center rounded-1 -mb-2">
                <img src={Google} alt="" />
                <div className="">Sign up with Google</div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <p>Already have account?</p>
              <NavLink to='/login' className='font-medium'>Log in</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;