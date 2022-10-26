import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaCrown } from 'react-icons/fa';

const DetailsCourse = () => {
    const { id, details, needed, picture, title } = useLoaderData()
    console.log(details)
    return (
        <div>
            <div className='w-2/4 mx-auto'>
                <h1 className='my-10 flex items-center justify-center'><span className='mr-5 text-2xl'><FaDownload /></span><span className='text-6xl font-semibold text-white'>{title}</span></h1>
                <img src={picture} alt="" />
                <p className='my-2 text-xl text-left text-white italic'>{details}</p>
                <div>
                    <h2 className='text-2xl text-left mt-5 mb-2 text-white '>Requirement thing:</h2>
                    <p className='text-left ml-5'>
                        {
                            needed.map(need => <li className='mb-3'><span className='bg-gray-600 text-white py-1 px-3 rounded-xl'>{need}</span></li>)
                        }
                    </p>
                </div>
            </div>
            <div className='mt-10'>
                <Link to={`/checkout/${id}`}><button className="btn btn-warning"> <span className='mr-2'><FaCrown className='text-xl' /></span> Get premium access</button></Link>
            </div>
        </div>
    );
};

export default DetailsCourse;