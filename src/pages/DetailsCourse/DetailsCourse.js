import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const DetailsCourse = () => {
    const { id, details, needed, picture, title } = useLoaderData()
    console.log(details)
    return (
        <div>
            <div className='w-2/4 mx-auto'>
                <h1 className='my-10 flex items-center justify-center'><span className='mr-5 text-2xl'><FaDownload /></span><span className='text-6xl font-semibold text-white'>{title}</span></h1>
                <img src={picture} alt="" />

            </div>
            {/* 
            <div className='flex justify-center'>

            </div>
            <div><h1 className='flex items-center'><span className='mr-5 text-2xl'><FaDownload /></span><span className='text-6xl font-semibold text-white'>{title}</span></h1>
                <img src={picture} alt="" />
            </div> 
            */}
        </div>
    );
};

export default DetailsCourse;