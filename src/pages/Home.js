import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../component/Banner/Banner';
import CardCourse from '../Shared/CardCourse/CardCourse';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <Banner></Banner>

            <div>
                <h2 className='text-5xl font-semibold text-white my-10 mt-16'>Our Courses</h2>
                <div className=' grid grid-cols-3 gap-5 m-5 mx-52'>
                    {
                        courses.map(course => <CardCourse key={course.id} course={course}></CardCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;