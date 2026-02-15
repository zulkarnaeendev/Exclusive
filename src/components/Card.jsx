import React from "react";
<<<<<<< HEAD
import { FaRegHeart, FaEye } from "react-icons/fa"; 
import { Rate } from 'antd';
import { useNavigate } from "react-router"; 

const Card = ({ img, Name, prevprize, prize, discount, review, display, id }) => {

  let navigate = useNavigate();

  const handleProductDetail = () => {
    navigate(`/Productdetail/${id}`);
  };

  const handelAddToCart = () => {
    
  }

=======
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Rate } from 'antd';

const Card = ({ img, Name, prevprize, prize, discount, review, display }) => {
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
  return (
    <div className="container mt-10 w-67.5 group">
      <div className="relative overflow-hidden bg-secondary rounded-md">
        <img
          src={img}
<<<<<<< HEAD
          alt="" 
          className="w-67.5 h-62.5 group-hover:scale-105 will-change-transform bg-[#F5F5F5]"
=======
          alt=""
          className="w-67.5 h-62.5 group-hover:scale-105 will-change-transform"
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
        />
        {discount && (
          <div className="text-xs font-medium text-white px-3 py-1 bg-red-500 w-fit absolute top-4 left-4 rounded-sm">
            {discount}
          </div>
        )}
        <div className="absolute top-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white rounded-full w-8.5 h-8.5 flex justify-center items-center mb-2 hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
            <FaRegHeart className="text-[20px]" />
          </div>
          <div className="bg-white rounded-full w-8.5 h-8.5 flex justify-center items-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
<<<<<<< HEAD
            <FaEye className="text-[20px]" onClick={handleProductDetail} />
=======
            <FaEye className="text-[20px]" />
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
          </div>
        </div>
        {display && (
          <div className="absolute bottom-0 w-full h-10 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
<<<<<<< HEAD
            <button className="text-white py-2 px-22 h-full font-medium cursor-pointer" onClick={handelAddToCart}>
              Add To Cart
            </button>
=======
            <p className="text-white flex justify-center items-center h-full font-medium">
              Add To Cart
            </p>
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
          </div>
        )}
      </div>
      <h3 className="font-bold mt-4 text-gray-800">{Name}</h3>
      <div className="flex items-center gap-3 mt-1">
        <h3 className="text-red-500 font-bold">{prize}</h3>
        <h3 className="line-through text-gray-400 font-bold">{prevprize}</h3>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <div className="flex text-yellow-400 gap-1">
          <Rate allowHalf defaultValue={2.5} />
        </div>
        <h4 className="text-gray-500 font-medium text-sm">({review})</h4>
      </div>
    </div>
  );
};

export default Card;
