import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?w=900&t=st=1666700634~exp=1666701234~hmac=9216ed8ff0733d74dbca6b5c89a83fbd63c622a2ada377afe8042a27f1847eda")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-6xl"><span className='text-orange-500'>Edu</span><span>Tech</span></h1>
                        <p className="mb-5 text-gray-300 italic">EduTech is a online platform.You can learn any educational thing from here. We have best teacher for teaching you . EduTech is best option for your online learning</p>
                        <Link to='/courses'><button className="btn btn-primary">Courses <FaArrowRight className='ml-2' /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;