import React from 'react'
import BreadCrump from '../components/BreadCrump'
import CardItem from '../components/CardItem'
import Button from '../components/Button';
import { NavLink } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updatequantity, clearCart } from '../slices/roductslice';

const Cart = () => {
  const cartdata = useSelector((state) => state.allProduct.cart);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const map = {};
    cartdata.forEach(item => {
      map[item.id] = item.quantity || 1;
    });
    setQuantities(map);
  }, [cartdata]);

  const totalAmount = cartdata.reduce((acc, item) => {
    const discountedPrice = item.price - (item.price * (item.discountPercentage || 0) / 100);
    const finalUnitPrice = Math.round(discountedPrice);
    const itemTotal = finalUnitPrice * (item.quantity || 1);
    return acc + itemTotal;
  }, 0);

  return (
    <div className='container mb-35'>
      <BreadCrump />
      <div className="grid grid-cols-4 py-6 px-10 shadow-sm mt-20">
        <h4 className="text-left">product</h4>
        <h4 className="text-center">Price</h4>
        <h4 className="text-center">Quantity</h4>
        <h4 className="text-right">Subtotal</h4>
      </div>
      <div className="flex flex-col gap-10 mb-6">
        {cartdata.map((item, idx) => {
          const itemPrice = Math.round(item.price - (item.discountPercentage || 0) * item.price / 100);
          const currentQuantity = quantities[item.id] || 1;
          return (
            <CardItem
              id={item.id}
              key={`${item.id}-${idx}`}
              thumbnail={item.thumbnail}
              title={item.title}
              price={itemPrice}
              quantity={currentQuantity}
              subtotal={itemPrice * currentQuantity}
              onQuantityChange={(id, q) => setQuantities(prev => ({ ...prev, [id]: q }))}
            />
          );
        })}
      </div>

      <div className="flex justify-between mb-20">
        <NavLink to='/shop' className=' pt-4 pb-4 pr-12 pl-12 w-fit rounded-sm text-middle border-gray-500 border-1'>
          <button className='font-medium cursor-pointer'>Return To Shop</button>
        </NavLink>
        <div className=' pt-4 pb-4 pr-12 pl-12 w-fit rounded-sm text-middle border-gray-500 border-1 cursor-pointer'>
          <button
            className='font-medium cursor-pointer'
            onClick={() => dispatch(clearCart())}
          >
            Update Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 h-14">
          <input type="text" placeholder='Coupon Code' className='w-75 border-gray-500 border-1 pl-6 rounded-sm' />
          <Button btn='Apply Coupon' />
        </div>
        <div className="px-6 py-8 border-1.5 border w-117.5 h-81 rounded-sm">
          <h2 className='font-medium text-[20px] mb-6'>Cart Total</h2>
          <div className="flex justify-between pb-4 border-b border-gray-500">
            <h3>Subtotal:</h3>
            <h3>{'$' + totalAmount}</h3>
          </div>
          <div className="flex justify-between pb-4 pt-4 border-b border-gray-500">
            <h3>Shipping:</h3>
            <h3>$0</h3>
          </div>
          <div className="flex justify-between pb-4 pt-4">
            <h3>Total:</h3>
            <h3>{'$' + totalAmount}</h3>
          </div>
          <div className="flex justify-center mt-4">
            <Button btn='Proceed To Checkout' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
