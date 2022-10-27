import React, { useEffect } from 'react';
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaCrown } from 'react-icons/fa';
import { useState } from 'react';
import CoursesSidebar from '../../component/CoursesSidebar/CoursesSidebar';



const DetailsCourse = () => {
    const [allCourses, setAllCourses] = useState([])
    const courses = useLoaderData()
    const { id, details, needed, picture, title } = courses
    useEffect(() => {
        fetch('https://assignment-10-server-kohl-one.vercel.app/courses')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    const ref = React.createRef();
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-3 my-5 gap-8 mx-3 '>
                <div className='col-span-2'>
                    <div>
                        <div className=''>
                            <Link>
                                <div className='my-10 flex items-center justify-center'>
                                    <h2 className='md:mr-5 text-2xl '>
                                        <Pdf targetRef={ref} filename="Course-Details.pdf">
                                            {({ toPdf }) => <FaDownload onClick={toPdf} title="download-pdf" />}
                                        </Pdf>
                                    </h2>
                                    <h2 className='text-4xl font-semibold text-white'> {title}</h2>
                                </div>
                            </Link>
                            <div ref={ref} className="md:w-9/12 mx-auto">
                                <div>
                                    <Link>
                                        <img className='w-full' src={picture} alt="" />
                                    </Link>
                                    <div>
                                        <h2 className='my-2 text-xl text-left text-blue-300 italic'>{details}</h2>
                                        <h2 className='text-2xl text-left mt-5 mb-2 text-blue-300 '>Requirement thing:</h2>
                                        <p className='text-left ml-5'>

                                            {
                                                needed.map((need, idx) => <li className='mb-3' key={idx}><span className='bg-gray-600 text-white py-1 px-3 rounded-xl'>{need}</span></li>)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <Link to={`/checkout/${id}`}><button className="btn btn-warning"> <span className='mr-2'><FaCrown className='text-xl' /></span> Get premium access</button></Link>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 lg:col-auto'>
                    <h2 className='text-center text-3xl text-white font-semibold mb-5'>Related Course</h2>
                    {
                        allCourses.map(course => <CoursesSidebar key={course.id} course={course}></CoursesSidebar>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailsCourse;