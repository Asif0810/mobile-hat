
import React from 'react';
import { useForm } from 'react-hook-form';

const AddBtnPhone = () => {
    const imagekey = '7fd4e5b0627e6ea8a78651e82fd1a4c7'
    const { register, handleSubmit } = useForm();
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
                console.log(imagedata)
            })
        console.log(data)

    }
    return (
        <div className='border-2'>
            <h2 className='text-3xl text-center'>please valid information</h2>
            <form onSubmit={handleSubmit(addBtnPhoneHandler)} className='grid p-5  lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2'>
                <input  {...register('category')} type="text" readOnly defaultValue={'button phone'} className="input w-full input-bordered  max-w-xs" />

                <input {...register('img')} type="file" placeholder="image" className="input w-full input-bordered  max-w-xs" />
                <input  {...register('location')} type="text" placeholder="location" className="input w-full input-bordered  max-w-xs" />
                <input {...register('resale_price')} type="text" placeholder="resale_price" className="input w-full input-bordered  max-w-xs" />
                <input {...register('original_price')} type="text" placeholder="original_price" className="input w-full input-bordered  max-w-xs" />
                <input  {...register('seller_name')} type="text" placeholder="seller_name" className="input w-full input-bordered  max-w-xs" />
                <input  {...register('mobile_name')} type="text" placeholder="mobile_name" className="input w-full input-bordered  max-w-xs" />
                <div className="form-control">
                    <button className="btn  bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none">add now</button>
                </div>
            </form>
        </div>
    );
};

export default AddBtnPhone;