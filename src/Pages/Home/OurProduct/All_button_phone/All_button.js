import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ModalOpen from '../../../../ModalOpen/ModalOpen';
import Button_phone_details from './button_phone_details';

const All_button = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { data: all_buttons_phone = [], refetch } = useQuery({
        queryKey: ['button-phone'],
        queryFn: () => fetch('https://last-assignment-server-sigma.vercel.app/button-phone')
            .then(res => res.json())

    })
    const [openModal, setOpenModal] = useState({})
    return (
        <div>
            <h2>button</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: gap-4 lg:grid-cols-3'>
                {
                    all_buttons_phone.map(bPhone => <Button_phone_details setOpenModal={setOpenModal} key={bPhone._id} bPhone={bPhone}></Button_phone_details>)
                }
            </div>
            <div>
                {
                    <ModalOpen refetch={refetch} selectedDate={selectedDate} openModal={openModal}></ModalOpen>
                }
            </div>
        </div>
    );
};

export default All_button;