import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Iphone_details from './Iphone_details';

const All_iphone = () => {
    const { data: alliphones = [], isLoading } = useQuery({
        queryKey: ['button-phone'],
        queryFn: () => fetch('http://localhost:5000/iphones')
            .then(res => res.json())

    })
    return (
        <div>
            <h2>all iphone {alliphones.length}</h2>
            <div>
                {
                    alliphones.map(ipho => <Iphone_details key={ipho._id} ipho={ipho}></Iphone_details>)
                }
            </div>
        </div>
    );
};

export default All_iphone;