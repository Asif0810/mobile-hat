import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import ModalOpen from '../../../../../ModalOpen/ModalOpen';
import AndroidDetails from './AndroidDetails';

const All_android = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { data: androides = [], isLoading } = useQuery({
        queryKey: ['android'],
        queryFn: () => fetch('http://localhost:5000/android')
            .then(res => res.json())
    })
    const [openModal, setOpenModal] = useState({})
    return (
        <div>
            <h2>all android phone {androides.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: gap-4 lg:grid-cols-3'>
                {
                    androides.map(and => <AndroidDetails key={and._id} and={and} setOpenModal={setOpenModal}></AndroidDetails>)
                }
            </div>
            <div>
                {

                    openModal && <ModalOpen selectedDate={selectedDate} openModal={openModal} setOpenModal={setOpenModal}></ModalOpen>

                }
            </div>

        </div>
    );
};

export default All_android;