import React from 'react';

const AndroidDetails = ({ and, setOpenModal }) => {
    const { date, mobile_name, image, location,
        name, original_price, resale_price,
        seller_name, _id } = and
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img style={{ width: '300px', height: '300px' }} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {mobile_name}!
                        <div className="badge badge-secondary">price :$ {resale_price}</div>
                    </h2>
                    <p>seller name : {seller_name}</p>
                    <p className='text-red-500'>original price :$ {original_price}</p>
                    <p><strong>location :</strong> {location}</p>

                    <label onClick={() => setOpenModal(and)} htmlFor="booking-modal" className="btn  btn-wide bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">bOOK NOW</label>
                </div>
            </div>

        </div >
    );
};

export default AndroidDetails;