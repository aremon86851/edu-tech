import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FooterFst from '../../component/FooterFst/FooterFst';
import FooterLst from '../../component/FooterLst/FooterLst';
import FooterScnd from '../../component/FooterScnd/FooterScnd';
import FooterThird from '../../component/FooterThird/FooterThird';

const Footer = () => {
    const courses = useLoaderData()
    return (
        <div className='mt-28 px-20 bg-black py-10 shadow-2xl'>
            <div className='grid grid-cols-4 gap-5'>
                <div className='text-left'>
                    <FooterFst />
                </div>
                <div>
                    <FooterScnd />
                </div>
                <div>
                    <h2 className='text-white text-3xl mb-4 font-semibold'>Courses</h2>
                    {
                        courses.map(course => <FooterThird key={course.id} course={course}></FooterThird>)
                    }
                </div>
                <div>
                    <h2 className='text-white text-3xl mb-4 font-semibold mb-6'>Join Us</h2>
                    <FooterLst />
                </div>
            </div>
        </div>
    );
};

export default Footer;