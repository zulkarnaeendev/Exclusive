import React from 'react'
import { Outlet } from "react-router";
import Deal from './Deal';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout = () => {
    return (
        <>
            <Deal />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout