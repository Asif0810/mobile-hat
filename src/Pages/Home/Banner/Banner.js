import React from 'react';
import banner from '../../../asset/pexels-pixabay-301718.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="relative carousel w-full">
                <div className="carousel-item relative w-full">
                    <img src={banner} className="w-full" alt='' />
                </div>
            </div>
            <div className=' absolute  ml-[380px] bottom-60'>
                <h1 className='text-2xl hidden sm:hidden lg:block font-bold text-white'>The best price guaranteed <br />  for your old phone</h1>
            </div>
        </div>
    );
};

export default Banner;