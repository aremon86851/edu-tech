import React from 'react';
import { Link } from 'react-router-dom';

const CardCourse = ({ course }) => {
    const { id, title, picture, details } = course
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-2xl">
                <figure><img src={picture} className='w-full h-52' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className='text-left'>
                        {
                            details.length > 100 ? <span>{details.slice(0, 100) + '...'}<Link className='text-blue-600 hover:text-blue-700' to={`/courses/${id}`}>Read More</Link></span> : { details }
                        }
                    </p>
                    <div className="card-actions justify-end mt-3">
                        <Link to={`/courses/${id}`}><button className="btn btn-primary">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCourse;