import React from 'react';
import { FaFacebook, FaLaptopCode, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterFst = () => {
    return (
        <div>
            <Link to="/" className="pl-0 btn btn-ghost normal-case text-2xl mb-3"><FaLaptopCode className='text-4xl mr-1 text-orange-500' /> <span className='text-orange-500 '>Edu</span><span className='py-1 ml-2 rounded-lg  px-3 bg-orange-500 text-white'>Tech</span></Link>
            <p className=" mb-5 text-gray-300 italic">EduTech is a online platform.You can learn any educational thing from here. We have best teacher for teaching you . EduTech is best option for your online learning</p>
            <div className='flex gap-2'>
                <div>
                    <a href="https://www.facebook.com/" target='_blank'><FaFacebook className='text-4xl p-1 border rounded-3xl border-blue-500' /></a>
                </div>
                <div>
                    <a href="https://twitter.com/home" target='_blank'><FaTwitter className='text-4xl p-1 border rounded-3xl border-blue-500' /></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/" target='_blank'><FaYoutube className='text-4xl p-1 border rounded-3xl border-red-700' /></a>
                </div>
            </div>
        </div>
    );
};

export default FooterFst;