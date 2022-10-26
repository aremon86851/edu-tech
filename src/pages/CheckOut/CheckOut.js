import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { title } = useLoaderData()
    return (
        <div className='my-5'>
            <h2 className='text-4xl'>Your course name is : <span className='text-white'>{title}</span></h2>
        </div>
    );
};

export default CheckOut;