import React from 'react'
import { Outlet } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <ToastContainer />
        </>
    )
}

export default RootLayout