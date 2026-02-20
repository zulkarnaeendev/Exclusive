import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { removecart, updatequantity } from '../slices/roductslice';
import { useEffect } from 'react';

const CardItem = ({ thumbnail, title, price, id, quantity }) => {

    const dispatch = useDispatch();
    const [count, setCount] = useState(quantity || 1);

    useEffect(() => {
        setCount(quantity || 1);
    }, [quantity]);

    const increment = () => {
        const newVal = count + 1;
        setCount(newVal);
        dispatch(updatequantity({ id, quantity: newVal }));
    };

    const decrement = () => {
        const newVal = count > 1 ? count - 1 : 1;
        setCount(newVal);
        dispatch(updatequantity({ id, quantity: newVal }));
    };

    const handeldelete = () => {
        dispatch(removecart(id));
    };

    return (
        <div className='grid grid-cols-4 items-center py-6 px-10 shadow-sm bg-white rounded-md'>
            <div className="flex items-center gap-5">
                <div className="relative">
                    <IoCloseCircle onClick={handeldelete} className="absolute -top-2 -left-2 text-red-500 bg-white rounded-full text-xl cursor-pointer" />
                    <img src={thumbnail} alt="" className='w-12 h-10 object-contain' />
                </div>
                <h2 className="text-base">{`${title.slice(0, 20)}...`}</h2>
            </div>
            <div className="text-center">
                <h2 className="text-base">${price}</h2>
            </div>
            <div className="flex justify-center">
                <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-18">
                    <span>{count < 10 ? `0${count}` : count}</span>
                    <div className="flex flex-col text-[10px] text-gray-400">
                        <IoIosArrowUp className="cursor-pointer hover:text-black" onClick={increment} />
                        <IoIosArrowDown className="cursor-pointer hover:text-black" onClick={decrement} />
                    </div>
                </div>
            </div>
            <div className="ml-auto w-32 text-right">
                <h2 className="text-base font-medium">${price * count}</h2>
            </div>
        </div>
    )
}

export default CardItem



