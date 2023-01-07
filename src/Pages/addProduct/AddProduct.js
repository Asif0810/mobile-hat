import React from 'react';
import { Link } from 'react-router-dom';
import button from '../../asset/SmartBigButton-3G-3-PNG.png'
import iphone from '../../asset/iPhone-8-black.jpeg'
import android from '../../asset/oneplus one android smart phone 5.jpg'

const AddProduct = () => {
    return (
        <div>

            <div className='mx-auto '>
                <h2 className=' text-4xl font-bold text-center mt-10'>What type of phone are you looking to sell ??</h2>
                <div className='ml-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="card mt-24 h-80 w-40 glass">
                        <figure><img style={{ width: "150px", }} src={button} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Button phone</h2>
                            {/* <p>you can sale and buy from us this gadget</p> */}
                            {/* <div className="card-actions justify-end">
                                <Link to={'/all-button-phone'}><button className="btn  bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">see all button </button></Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card mt-24 h-80 w-40 glass">
                        <figure><img style={{ width: "150px", }} src={android} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Android</h2>
                            {/* <p>you can sale and buy from us this gadget</p> */}
                            {/* <div className="card-actions justify-end">
                                <Link to={'/all-anodroid-phone'}> <button className="btn  bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">see all android </button></Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card mt-24 w-80 glass">
                        <figure><img style={{ width: "300px", height: '300px' }} src={iphone} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Iphone</h2>
                            <p>you can sale and buy from us this gadget</p>
                            <div className="card-actions justify-end">
                                <Link to={'/all-iphone'}><button className="btn  bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">see all iphone</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;