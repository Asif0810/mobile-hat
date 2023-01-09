import React from 'react';

const MyOrderDetails = ({ order }) => {
    const { image, mobile } = order
    return (
        <div>
            <div className="card w-80 h-44 card-side bg-base-100 shadow-xl">
                <figure><img src={image} style={{ width: '100px' }} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{mobile}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDetails;