import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckOut = () => {
    const { title, needed } = useLoaderData()
    const { user } = useContext(AuthContext)
    return (
        <div className='my-5'>
            {
                user && <h2 className='text-orange-400 text-4xl my-5 mb-10'>"Congratulation.. Now Your are our premium student"</h2>
            }
            <h2 className='text-4xl'>Your course name is : <span className='text-white'>{title}</span></h2>
            <p className='mt-10 '>
                {
                    needed.map((need, idx) => <li className='mb-3' key={idx}><span className='bg-gray-600 text-white py-1 px-3 rounded-xl'>{need}</span></li>)
                }
            </p>
        </div>
    );
};

export default CheckOut;