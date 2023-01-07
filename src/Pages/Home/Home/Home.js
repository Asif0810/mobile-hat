import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Nav from '../../../Shared/Nav/Nav';
import Banner from '../Banner/Banner';
import CustomerCare from '../CustomerCare/CustomerCare';
import OurProduct from '../OurProduct/OurProduct';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <OurProduct></OurProduct>
            <CustomerCare></CustomerCare>

        </div>
    );
};

export default Home;