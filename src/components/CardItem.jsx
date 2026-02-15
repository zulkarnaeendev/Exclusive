import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const CardItem = ({ thumbnail, title, price, subtotal }) => {

    return (
        <div className='flex justify-between items-center py-6 px-10 shadow-sm h-25.5'>
            <div className="flex gap-5 items-center">
                <img src={thumbnail} alt="" className='w-13.5 h-13.5' />
                <h2>{title}</h2>
            </div>
            <div className="">
                <h2>{'$' + price}</h2>
            </div>
            <div className="flex gap-3 border-gray-500 border-2 rounded-sm px-1.5 py-1.5">
                01
                <div className="">
                    <IoIosArrowUp />
                    <IoIosArrowDown />
                </div>
            </div>
            <h2>{'$' + subtotal}</h2>
        </div>
    )
}

export default CardItem