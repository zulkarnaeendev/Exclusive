import React from 'react'
import send from '../assets/icon-send.png'
import Qrlink from '../assets/Qr Code.png'
import googlePlay from '../assets/GooglePlay.png'
import appStore from '../assets/AppStore.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className="container flex gap-21.75 text-white pt-20 pb-31">
            <div className="flex flex-col gap-6">
                <h2 className='font-bold text-2xl'>Exclusive</h2>
                <p className='font-medium text-[20px]'>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="flex items-center border-white border-2 rounded-md -mt-2 h-12">
                    <input type="email" className='h-12 text-center placeholder:text-center outline-none' placeholder='Enter your email'/>
                    <img src={send} alt="" className='w-6 h-6 mr-3.75 ' />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='font-medium text-[20px] mb-2'>Support</h2>
                <p>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='font-medium text-[20px] mb-2'>Account</h2>
                <a href="">My Account</a>
                <a href="">Login / Register</a>
                <a href="">Cart</a>
                <a href="">Wishlist</a>
                <a href="">Shop</a>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='font-medium text-[20px] mb-2'>Quick Links</h2>
                <a href="">Privacy Policy</a>
                <a href="">Terms Of Use</a>
                <a href="">FAQ</a>
                <a href="">Contact</a>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className='font-medium text-[20px]'>Download App</h2>
                <div className="flex flex-col gap-2">
                    <p className='text-[12px] text-gray-400'>Save $3 with App New User Only</p>
                    <div className="flex gap-2">
                        <img src={Qrlink} alt="" />
                        <div className="flex flex-col gap-1">
                            <img src={googlePlay} alt="" />
                            <img src={appStore} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-6">
                    <FaFacebookF className='w-6 h-6' />
                    <FaTwitter className='w-6 h-6' />
                    <FaInstagram className='w-6 h-6' />
                    <TiSocialLinkedin className='w-6 h-6' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;