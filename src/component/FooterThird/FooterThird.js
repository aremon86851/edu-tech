import React from 'react';
import { Link } from 'react-router-dom';

const FooterThird = ({ course }) => {
    const { title, id } = course
    return (
        <div className=' flex justify-center'>
            <p className='text-left'><Link className='link text-blue-500' to={`/courses/${id}`}>{title}</Link></p>
        </div>
    );
};

export default FooterThird;