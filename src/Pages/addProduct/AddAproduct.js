
import { format } from 'date-fns';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthCotext } from '../../Context/AuthProvider';

const AddAproduct = () => {
    const { user } = useContext(AuthCotext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const date = format(selectedDate, 'PP')

    const imagekey = '7fd4e5b0627e6ea8a78651e82fd1a4c7'
    const { register, handleSubmit, reset } = useForm();
    const addBtnPhoneHandler = (data) => {
        const image = data.img[0];

        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagekey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imagedata => {
                if (imagedata.success) {
                    const phone = {
                        category: data.category,
                        image: imagedata.data.url,
                        location: data.location,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        date: date,
                        seller_name: data.seller_name,
                        mobile_name: data.mobile_name,
                        seller_email: user?.email

                    }
                    console.log(phone)
                    fetch('https://last-assignment-server-sigma.vercel.app/all-phones', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(phone)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('upload successfull')
                                reset()
                            } else {
                                toast.error(data.message)
                            }
                            console.log(data)
                        })

                }
            })


    }
    return (
        <div className=' my-10'>
            <h2 className='text-3xl text-center'>please Provide valid information</h2>
            <form onSubmit={handleSubmit(addBtnPhoneHandler)} className='grid p-5  lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2'>
                <div>
                    <label className='label'>
                        <span className="label-text">please select your phone category</span>
                    </label>
                    <select {...register('category', { required: 'are you buyer or seller' })} className="input-bordered select w-full max-w-xs">

                        <option value={'button'}>button</option>
                        <option selected value={'android'}>android</option>
                        <option value={'iphone'}>iphone</option>

                    </select>

                </div>

                <div>
                    <label className='label'>
                        <span className="label-text">provide your product photo</span>
                    </label>
                    <input {...register('img')} type="file" placeholder="image" className="input w-full input-bordered  max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className="label-text">your location</span>
                    </label>
                    <input  {...register('location')} type="text" placeholder="location" className="input w-full input-bordered  max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className="label-text">resale price </span>
                    </label>
                    <input {...register('resale_price')} type="text" placeholder="resale_price" className="input w-full input-bordered  max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className="label-text">original price </span>
                    </label>
                    <input {...register('original_price')} type="text" placeholder="original_price" className="input w-full input-bordered  max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className="label-text">seller name </span>
                    </label>
                    <input  {...register('seller_name')} type="text" placeholder="seller_name" className="input w-full input-bordered  max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className="label-text">phone model </span>
                    </label>
                    <input  {...register('mobile_name')} type="text" placeholder="phone model" className="input w-full input-bordered  max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className="label-text">Condition </span>
                    </label>
                    <input  {...register('condition')} type="text" placeholder="phone condition" className="input w-full input-bordered  max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className="label-text">your Phone number </span>
                    </label>
                    <input  {...register('mobile_number')} type="text" placeholder="mobile number" className="input w-full input-bordered  max-w-xs" />
                </div>
                {/* <input  {...register('date')} disabled defaultValue={date} type="date" placeholder="mobile_name" className="input w-full input-bordered  max-w-xs" /> */}

                <div className="form-control mt-4">
                    <button className="btn  bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">add now</button>
                </div>
            </form>
        </div>
    );
};

export default AddAproduct;