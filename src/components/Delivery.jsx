import React from 'react'
import headphone from '../assets/Headphone.png'
import safety from '../assets/Safety.png'
import deliver from '../assets/Delivery.png'

const Delivery = () => {
  return (
    <div className='container flex justify-between mb-35'>
        <div className="flex flex-col items-center">
            <img src={deliver} alt="" className='mb-6'/>
            <h2 className='font-semibold text-[20px]'>FREE AND FAST DELIVERY</h2>
            <p className='text-sm'>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center">
            <img src={headphone} alt="" className='mb-6'/>
            <h2 className='font-semibold text-[20px]'>24/7 CUSTOMER SERVICE</h2>
            <p className='text-sm'>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
            <img src={safety} alt="" className='mb-6'/>
            <h2 className='font-semibold text-[20px]'>MONEY BACK GUARANTEE</h2>
            <p className='text-sm'>We return money within 30 days</p>
        </div>
    </div>
  )
}

export default Delivery;