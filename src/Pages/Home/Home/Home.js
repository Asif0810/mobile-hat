import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Nav from '../../../Shared/Nav/Nav';
import Banner from '../Banner/Banner';
import CustomerCare from '../CustomerCare/CustomerCare';
import OurProduct from '../OurProduct/OurProduct';


const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <OurProduct></OurProduct>
            <CustomerCare></CustomerCare>
            <Footer></Footer>
        </div>
    );
};

export default Home;