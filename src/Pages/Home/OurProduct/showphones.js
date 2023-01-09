import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

import { AuthCotext } from '../../../Context/AuthProvider';


const Showphones = ({ phone, setOpenModal }) => {
    const alerTHandler = () => {
        toast('please login')
    }
    const { user } = useContext(AuthCotext)
    const {
        image,
        location,
        resale_price,
        original_price,
        date,
        seller_name,
        mobile_name } = phone
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img style={{ width: '300px', height: '300px' }} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className='text-xl'>{mobile_name}!</div>
                        <div className="badge badge-secondary">price:${resale_price}</div>
                    </h2>
                    <p>seller : {seller_name}</p>
                    <p className='text-red-500'>original price :$ {original_price}</p>
                    <p><strong>location :</strong> {location}</p>
                    {
                        user?.email ? < label onClick={() => setOpenModal(phone)} htmlFor="booking-modal" className="btn  btn-wide bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">bOOK NOW</label>
                            : < label onClick={() => alerTHandler()} className="btn  btn-wide bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">bOOK NOW</label>
                    }
                </div>
            </div>
        </div >
    );
};

export default Showphones;