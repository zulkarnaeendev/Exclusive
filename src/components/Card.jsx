import React, { useState } from "react";
import { FaRegHeart, FaEye, FaHeart, FaTrash } from "react-icons/fa";
import { Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cartreducer, wishlistReducer, removeWishlist } from "../slices/roductslice";
import { toast, Bounce } from "react-toastify";

const Card = ({ img, Name, prevprize, prize, discount, review, display, id, wholeproduct, showHeart = true, showEye = true, showDelete = false, onDelete }) => {

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.allProduct.cart);
  const wishlistdata = useSelector((state) => state.allProduct.wishlist);

  const handleProductDetail = () => {
    navigate(`/Productdetail/${id}`);
  };

  const notify = () => {toast.success('Your Product Has Been Successfully Added To The Cart!', {
    position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
  })};

  const warningNotify = () => {
    toast.warning('This Product Is Already In Your Cart!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handelAddToCart = () => {
    const itemExists = cartdata.some(item => item.id === id);
    
    if (itemExists) {
      warningNotify();
    } else {
      dispatch(cartreducer(wholeproduct));
      notify();
    }
  }

  const [liked, setLiked] = useState(false);

  const Heartnotify = () => {
    toast.success('Your Product Has Been Successfully Added To The Wishlist!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
  })};

  const HeartWarningNotify = () => {
    toast.warning('This Product Is Already In Your Wishlist!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handelheart = () => {
    const itemExists = wishlistdata.some(item => item.id === id);
    
    if (itemExists) {
      HeartWarningNotify();
    } else {
      dispatch(wishlistReducer(wholeproduct));
      setLiked(!liked);
      Heartnotify();
    }
  };

  const handleDelete = () => {
    dispatch(removeWishlist(id));
    if (onDelete) onDelete(id);
  };


  return (
    <div className="container mt-10 w-67.5 group">
      <div className="relative overflow-hidden bg-secondary rounded-md">
        <img
          src={img}
          alt=""
          className="w-67.5 h-62.5 group-hover:scale-105 will-change-transform bg-[#F5F5F5]"
        />
        {discount && (
          <div className="text-xs font-medium text-white px-3 py-1 bg-red-500 w-fit absolute top-4 left-4 rounded-sm">
            {discount}
          </div>
        )}
        <div className="absolute top-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {showHeart && (
            <div
              onClick={handelheart}
              className={`rounded-full w-8.5 h-8.5 flex justify-center items-center mb-2 transition-colors cursor-pointer ${liked ? 'bg-red-500 text-white' : 'bg-white hover:bg-red-500 hover:text-white'}`}>
              {liked ? <FaHeart className="text-[20px]" /> : <FaRegHeart className="text-[20px]" />}
            </div>
          )}
          {showDelete && (
            <div
              onClick={handleDelete}
              className="bg-red-500 rounded-full w-8.5 h-8.5 flex justify-center items-center text-white hover:bg-red-600 transition-colors cursor-pointer mb-2">
              <FaTrash className="text-[16px]" />
            </div>
          )}
          {showEye && (
            <div className="bg-white rounded-full w-8.5 h-8.5 flex justify-center items-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
              <FaEye className="text-[20px]" onClick={handleProductDetail} />
            </div>
          )}
        </div>
        {display && (
          <div onClick={handelAddToCart} className="absolute bottom-0 w-full h-10 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <button className="text-white py-2 px-22 h-full font-medium cursor-pointer">
              Add To Cart
            </button>
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
