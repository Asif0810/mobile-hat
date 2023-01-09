import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthCotext } from '../../Context/AuthProvider';
import UploadedProductDetails from './uploadedProductDetails';

const UploadedPoruct = () => {
    const { user } = useContext(AuthCotext)
    const { data: uploadedProducts = [] } = useQuery({
        queryKey: ['uploaded-products', user?.email],
        queryFn: () => fetch(`http://localhost:5000/uploaded-products?email=${user.email}`)
            .then(res => res.json())
    })
    return (
        <div>
            {
                uploadedProducts.length === 0 ? <h2 className='text-3xl text-center'>No product</h2>
                    : <h2 className='text-3xl text-center'> products for sell</h2>
            }

            <div className=' grid gap-12 my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    uploadedProducts.map(product => <UploadedProductDetails key={product._id} product={product}></UploadedProductDetails>)
                }
            </div>
        </div>
    );
};

export default UploadedPoruct;