import React from 'react'
import Banner from "../components/Banner";
import Category from "../components/Category";
import Deal from "../components/Deal";
import Delivery from "../components/Delivery";
import FlashSales from "../components/FlashSales";
import Footer from "../components/Footer";
import LimitedExperience from "../components/LimitedExperience";
import Month from "../components/Month";
import MoreProduct from "../components/MoreProduct";
import Navbar from "../components/Navbar";
import NewArrival from "../components/NewArrival";

const Home = () => {
    return (
        <>
            <Banner />
            <FlashSales />
            <Category />
            <Month />
            <LimitedExperience />
            <MoreProduct />
            <NewArrival />
            <Delivery />
        </>
    )
}

export default Home