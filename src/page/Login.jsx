import React from 'react'
import signimg from '../assets/Side Image.png'

const Login = () => {
    return (
        <div className='container mt-68.25 mb-95.5 flex gap-32.25 relative '>
            <div className="">
                <img src={signimg} alt="Sign In Image" className='w-157.5 h-188 absolute -top-31.25 -left-91.75' />
            </div>
            <div className="container flex flex-col items-end ">
                <div className="flex flex-col gap-12">
                    <div className="">
                        <h1 className='mb-6 font-medium text-[36px]'>Log in to Exclusive</h1>
                        <p>Enter your details below</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className=" flex flex-col gap-10">
                            <input type="text" placeholder='Email or Phone Number' className='border-b-2 border-b-black outline-none' />
                            <input type="password" placeholder='Password' className='border-b-2 border-b-black outline-none' />
                        </div>
                        <div className="flex gap-21.75 rounded-1 items-center">
                            <div className='bg-reddish pt-4 pb-4 pr-12 pl-12 text-center w-fit rounded-sm text-middle cursor-pointer'>
                                <button className='font-medium text-white'>Log In</button>
                            </div>
                            <div className="flex gap-4 justify-center">
                                <p className='text-reddish'>Forget Password?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login