import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Button_phone_details from './button_phone_details';

const All_button = () => {
    const { data: all_buttons_phone = [], isLoading } = useQuery({
        queryKey: ['button-phone'],
        queryFn: () => fetch('https://last-assignment-server-sigma.vercel.app/button-phone')
            .then(res => res.json())

    })
    if (isLoading) {
        <h2 className='text-6xl'>Loading...</h2>
    }
    return (
        <div>
            <h2>button</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: gap-4 lg:grid-cols-3'>
                {
                    all_buttons_phone.map(bPhone => <Button_phone_details key={bPhone._id} bPhone={bPhone}></Button_phone_details>)
                }
            </div>
        </div>
    );
};

export default All_button;