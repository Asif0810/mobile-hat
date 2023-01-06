import React from 'react';

const Iphone_details = ({ ipho }) => {
    const { date, image, location,
        name, original_price, resale_price,
        seller_name, _id } = ipho
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img style={{ width: '300px', height: '300px' }} src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}!
                    <div className="badge badge-secondary">price :$ {resale_price}</div>
                </h2>
                <p>seller : {seller_name}</p>
                <p className='text-red-500'>original price : {original_price}</p>
                <p><strong>location :</strong> {location}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Iphone_details;