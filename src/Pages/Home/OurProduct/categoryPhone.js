import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ModalOpen from '../../../ModalOpen/ModalOpen';
import Showphones from './showphones';

const CategoryPhone = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [openModal, setOpenModal] = useState({})
    const phones = useLoaderData();
    return (
        <div className='ml-12 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                phones.map(phone => <Showphones setOpenModal={setOpenModal} key={phone._id} phone={phone}></Showphones>)
            }
            <div>
                {
                    <ModalOpen selectedDate={selectedDate} openModal={openModal}></ModalOpen>
                }
            </div>
        </div>
    );
};

export default CategoryPhone;