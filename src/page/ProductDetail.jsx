import React, { useEffect, useState } from 'react'
import BreadCrump from '../components/BreadCrump'
import { Rate } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router';
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { GiCycle } from "react-icons/gi";
import SecHead from '../components/SecHead';
import Card from "../components/Card";
import Frame from "../assets/Frame 570.png";
import Slider from "react-slick";

const ProductDetail = () => {

    const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    }

    const [product, setProduct] = useState([])
    const [img, setimg] = useState([])
    const [reviewing, setreviewing] = useState([])

    async function allProducts() {
        await axios.get(`https://dummyjson.com/products/${id}`)
            .then((productdata) => {
                setProduct(productdata.data)
                setimg(productdata.data.images)
                setreviewing(productdata.data.reviews)
            })
    }

    let { id } = useParams()


    useEffect(() => {
        allProducts();
    }, [])

    return (
        <div className='container'>
            <BreadCrump />
            <div className="flex gap-17.5 mt-20 mb-35">
                <div className="flex gap-7.5 w-[65%]">
                    <div className="flex flex-col gap-4">
                        {
                            img.map((item, id) => {
                                return (
                                    <img key={id} src={item} className='w-42.5 h-34.5 bg-[#F5F5F5]' />
                                )
                            })
                        }
                    </div>
                    <div className="">
                        <img src={product.thumbnail} className='w-125 h-150 bg-[#F5F5F5]' />
                    </div>
                </div>
                <div className="w-[35%]">
                    <h2 className='text-[24px] mb-4 font-bold'>{product.title}</h2>
                    <div className="flex mb-4 gap-4">
                        <Rate allowHalf Value={product?.rating ?? 0} />
                        <h5 className='text-[14px]'>(`${reviewing.length} Review`)</h5>
                        <h5 className='text-[14px] text-green-500'>in stock</h5>
                    </div>
                    <h2 className='mb-6 text-[24px]'>{'$' + Math.round(product.price - (product.discountPercentage || 0) * product.price / 100)}</h2>
                    <p className='border-b border-grey-500 pb-6'>{product.description}</p>
                    <div className="flex gap-6 mt-6 mb-6">
                        <h2 className='text-[20px]'>Colours:</h2>
                        <div className="flex gap-2 items-center">
                            <button className="w-5 h-5 bg-[#A0BCE0] rounded-full focus:border-black focus:border-2 focus:outline-none"></button>
                            <button className="w-5 h-5 bg-reddish rounded-full focus:border-black focus:border-2 focus:outline-none"></button>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <h2 className='text-[20px]'>Size:</h2>
                        <div className="flex gap-4 justify-center items-center">
                            <div className="w-8 h-8 border-gray-500 border-2 rounded-sm flex justify-center items-center hover:bg-reddish hover:border-none">XS</div>
                            <div className="w-8 h-8 border-gray-500 border-2 rounded-sm flex justify-center items-center hover:bg-reddish hover:border-none">X</div>
                            <div className="w-8 h-8 border-gray-500 border-2 rounded-sm flex justify-center items-center hover:bg-reddish hover:border-none">M</div>
                            <div className="w-8 h-8 border-gray-500 border-2 rounded-sm flex justify-center items-center hover:bg-reddish hover:border-none">L</div>
                            <div className="w-8 h-8 border-gray-500 border-2 rounded-sm flex justify-center items-center hover:bg-reddish hover:border-none">XL</div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center mb-10">
                        <div className="w-39.75 flex rounded-sm border">
                            <button className='w-10.5 h-11 border text-[20px] focus:bg-reddish focus:border-none'>-</button>
                            <p className='w-20 h-11 border text-[20px] flex justify-center items-center'>0</p>
                            <button className='w-10.5 h-11 border text-[20px] focus:bg-reddish focus:border-none'>+</button>
                        </div>
                        <div className='bg-reddish pt-2.5 pb-2.5 pr-12 pl-12 w-fit rounded-sm text-middle cursor-pointer'>
                            <button className='font-medium text-white'>Buy Now</button>
                        </div>
                        <div className="w-10 h-10 border flex justify-center items-center rounded-sm">
                            <FaRegHeart className='w-5 h-4.75' />
                        </div>
                    </div>
                    <div className="border-2 rounded-sm pt-6 pb-6 ">
                        <div className="flex gap-4 mb-4 pl-4">
                            <FaTruckFast className='w-10 h-10' />
                            <div className="">
                                <h2 className='font-medium text-sm'>Free Delivery</h2>
                                <p className='font-medium text-[12px]'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex gap-4 mt-4 pl-4">
                            <GiCycle className='w-10 h-10' />
                            <div className="">
                                <h2 className='font-medium text-sm'>Return Delivery</h2>
                                <p className='font-medium text-[12px]'>Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-35">
                <SecHead title={'Related Item'} />
                <Slider {...settings} className="container flex">
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                    <Card
                        img={Frame}
                        discount="-40%"
                        Name="HAVIT HV-G92 Gamepad"
                        prize="$120"
                        prevprize="$160"
                        rating="88"
                        display={true}
                    />
                </Slider>
            </div>
        </div>
    )
}

export default ProductDetail