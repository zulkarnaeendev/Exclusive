import React from 'react'
import BreadCrump from '../components/BreadCrump'
import CardItem from '../components/CardItem'
import Frame from '../assets/Frame 570.png';

const Cart = () => {
  return (
    <div className='container'>
      <BreadCrump className='mt-20' />
      <div className="mt-20">
        <div className="flex justify-between py-6 px-10 shadow-sm mb-10">
          <h4>product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Subtotal</h4>
        </div>
        <div className="flex flex-col gap-10">
          <CardItem
            thumbnail={Frame}
            title='H1 Gamepad'
            price={499}
            subtotal={499} 
            />
            <CardItem
            thumbnail={Frame}
            title='H1 Gamepad'
            price={499}
            subtotal={499} 
            />
            <CardItem
            thumbnail={Frame}
            title='H1 Gamepad'
            price={499}
            subtotal={499} 
            />
        </div>
      </div>
    </div>
  )
}

export default Cart