import React from 'react'
import Slider from 'react-slick'
import Speaker from "../assets/speaker.png";
import Frame from "../assets/Frame 570.png"
import Card from '../components/Card'
import { NavLink } from 'react-router';

const Wishlist = () => {

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className='container mt-20 mb-35'>
            <div className="flex justify-between items-center w-full mb-15">
                <div className="flex gap-2">
                    <h1 className='text-[20px]'>Wishlist</h1>
                    <h1 className='text-[20px]'>(item)</h1>
                </div>
                <div className=' pt-4 pb-4 pr-12 pl-12 w-fit rounded-sm text-middle border-gray-500 border-1 cursor-pointer'>
                    <button className='font-medium cursor-pointer'>Move All To Bag</button>
                </div>
            </div>
            <Slider {...settings} className="container flex">
                <Card
                    img={Speaker}
                    Name="HAVIT HV-G92 Gamepad"
                    prize="$120"
                    prevprize="$160"
                    rating="88"
                    display={true}
                />
                <Card
                    img={Speaker}
                    Name="HAVIT HV-G92 Gamepad"
                    prize="$120"
                    prevprize="$160"
                    rating="88"
                    display={true}
                />
                <Card
                    img={Speaker}
                    Name="HAVIT HV-G92 Gamepad"
                    prize="$120"
                    prevprize="$160"
                    rating="88"
                    display={true}
                />
                <Card
                    img={Speaker}
                    Name="HAVIT HV-G92 Gamepad"
                    prize="$120"
                    prevprize="$160"
                    rating="88"
                    display={true}
                />
                <Card
                    img={Speaker}
                    Name="HAVIT HV-G92 Gamepad"
                    prize="$120"
                    prevprize="$160"
                    rating="88"
                    display={true}
                />
                <Card
                    img={Speaker}
                    Name="HAVIT HV-G92 Gamepad"
                    prize="$120"
                    prevprize="$160"
                    rating="88"
                    display={true}
                />
                <Card
                    img={Speaker}
                    Name="HAVIT HV-G92 Gamepad"
                    prize="$120"
                    prevprize="$160"
                    rating="88"
                    display={true}
                />
                <Card
                    img={Speaker}
                    Name="HAVIT HV-G92 Gamepad"
                    prize="$120"
                    prevprize="$160"
                    rating="88"
                    display={true}
                />
            </Slider>
            <div className="mt-20">
                <div className="container flex gap-21.75 items-center justify-between">
                    <div className="flex gap-6 items-center">
                        <div className="w-5 h-10 bg-reddish"></div>
                        <h6 className="text-[20px] flex gap-4 font-semibold">
                            Just For You
                        </h6>
                    </div>
                    <NavLink to='/shop' className=' pt-4 pb-4 pr-12 pl-12 w-fit rounded-sm text-middle border-gray-500 border-1 cursor-pointer'>
                        <button className='font-medium cursor-pointer'>See All</button>
                    </NavLink>
                </div>
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

export default Wishlist