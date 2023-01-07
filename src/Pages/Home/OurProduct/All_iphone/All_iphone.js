import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ModalOpen from '../../../../ModalOpen/ModalOpen';
import Iphone_details from './Iphone_details';

const All_iphone = () => {
    const { data: alliphones = [], isLoading } = useQuery({
        queryKey: ['button-phone'],
        queryFn: () => fetch('http://localhost:5000/iphones')
            .then(res => res.json())

    })
    console.log(alliphones)
    const [openModal, setOpenModal] = useState({})
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <h2>all iphone {alliphones.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: gap-4 lg:grid-cols-3'>
                {
                    alliphones.map(ipho => <Iphone_details setOpenModal={setOpenModal} key={ipho._id} ipho={ipho}></Iphone_details>)
                }
            </div>
            <div>
                <ModalOpen selectedDate={selectedDate} openModal={openModal}></ModalOpen>
            </div>
        </div>
    );
};

export default All_iphone;