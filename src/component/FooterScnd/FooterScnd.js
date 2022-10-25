import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa'

const FooterScnd = () => {
    return (
        <div>
            <h2 className='text-white text-3xl mb-4 font-semibold'>Pages</h2>
            <div className='italic underline flex justify-center'>
                <div className=''>
                    <p><span className='flex items-center gap-2'><FaArrowCircleRight /><Link to="/">Home</Link></span></p>
                    <p><span className='flex items-center gap-2'><FaArrowCircleRight /><Link to="/courses">Courses</Link></span></p>
                    <p><span className='flex items-center gap-2'><FaArrowCircleRight /><Link to="/FAQ">FAQ</Link></span></p>
                    <p><span className='flex items-center gap-2'><FaArrowCircleRight /><Link to="/blog">Blog</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default FooterScnd;