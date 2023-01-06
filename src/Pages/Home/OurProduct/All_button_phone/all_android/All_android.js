import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AndroidDetails from './AndroidDetails';

const All_android = () => {
    const { data: androides = [], isLoading } = useQuery({
        queryKey: ['android'],
        queryFn: () => fetch('http://localhost:5000/android')
            .then(res => res.json())
    })
    
    return (
        <div>
            <h2>all android phone {androides.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: gap-4 lg:grid-cols-3'>
                {
                    androides.map(and => <AndroidDetails key={and._id} and={and}></AndroidDetails>)
                }
            </div>
        </div>
    );
};

export default All_android;