import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSidebar from '../component/CoursesSidebar/CoursesSidebar';
import CardCouurse from '../Shared/CardCourse/CardCourse'

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='mx-5'>
            <div className='grid grid-cols-3 my-5 gap-8'>
                <div className='col-span-2'>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            courses.map(course => <CardCouurse key={course.id} course={course}></CardCouurse>)
                        }
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-3xl text-white font-semibold mb-5'>Related Course</h2>
                    {
                        courses.map(course => <CoursesSidebar key={course.id} course={course}></CoursesSidebar>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;