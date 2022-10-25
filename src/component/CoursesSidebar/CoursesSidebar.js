import React from 'react';
import { Link } from 'react-router-dom';

const CoursesSidebar = ({ course }) => {
    const { id, title, picture, details } = course
    return (
        <div className='text-left'>
            <li>You can visit {`>`} <Link className='link text-blue-500' to={`/courses/${id}`}>{title}</Link></li>
        </div>
    );
};

export default CoursesSidebar;