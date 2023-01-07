import React from 'react';
import { Link } from 'react-router-dom';
import button from '../../asset/SmartBigButton-3G-3-PNG.png'
import iphone from '../../asset/iPhone-8-black.jpeg'
import android from '../../asset/oneplus one android smart phone 5.jpg'

const AddProduct = () => {
    return (
        <div className='mb-24'>

            <div className='mx-auto '>
                <h2 className=' text-4xl font-bold text-center mt-10'>What type of phone do you want to sell ??</h2>
                <div className='ml-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <Link to={'/add-a-button-phone'}>
                        <div className="card mt-24 p-2 h-80 w-40 glass">
                            <figure><img style={{ width: "150px", }} src={button} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Button phone</h2>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="card mt-24 pt-4 h-80 w-40 glass">
                            <figure><img style={{ width: "150px", }} src={android} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Android</h2>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="card mt-24 pt-5 h-80 w-40 glass">
                            <figure><img style={{ width: "200px" }} src={iphone} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title ">Apple</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;