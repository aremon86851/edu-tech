import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Courses</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Dark or Light</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl"><FaLaptopCode className='text-4xl mr-1 text-orange-500' /> <span className='text-orange-500 '>Edu</span><span className='py-1 ml-2 rounded-lg  px-3 bg-orange-500 text-white'>Tech</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Courses</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Dark or Light</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;