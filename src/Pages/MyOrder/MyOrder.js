import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthCotext } from '../../Context/AuthProvider';
import MyOrderDetails from './myOrderDetails';

const MyOrder = () => {
    const { user } = useContext(AuthCotext)
    const { data: orders = [] } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: () => fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
    })

    return (
        <div>
            <h2 className='text-3xl text-center'>My orders</h2>
            <div className='grid gap-12 my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    orders.map(order => <MyOrderDetails key={order._id} order={order}></MyOrderDetails>)
                }
            </div>
        </div>
    );
};

export default MyOrder;