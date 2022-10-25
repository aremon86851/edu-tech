import React from 'react';
import { useContext } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='mx-2'>
            <div className="navbar bg-base-100 shadow-lg py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/FAQ'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><a>Dark or Light</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl"><FaLaptopCode className='text-4xl mr-1 text-orange-500' /> <span className='text-orange-500 '>Edu</span><span className='py-1 ml-2 rounded-lg  px-3 bg-orange-500 text-white'>Tech</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/FAQ'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><a>Dark or Light</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <>
                            <span>{user.email}</span>
                            <Link className="btn ml-2" onClick={handleLogOut}>Logout</Link>
                        </> : <Link to="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;