
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OurcategoriesDetails = ({ cat }) => {

    const { category, description, image, _id } = cat
    return (
        <div>
            <div className="card mt-24 w-80 glass">
                <figure><img style={{ width: "300px", height: '300px' }} src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/category-phones/${category}`}><button className="btn  bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">see all button </button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OurcategoriesDetails;