import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaRegTimesCircle } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [darkMode, setDarkMode] = useState(false);

    return (
        <div className='p-3 md:p-4'>
            <div className='flex justify-between items-center'>
                <div className='text-white'>
                    User img
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden'>
                    <span className='text-white'>
                        {isMenuOpen === true ?
                            <></>
                            :
                            <FaBars></FaBars>
                        }
                    </span>
                </div>
            </div>
            <ul className={`lg:static p-2 bg-black space-y-2 absolute flex flex-row-reverse justify-between px-5 duration-500 ${isMenuOpen ? 'top-0 right-0 w-full' : '-top-32 right-0 w-full'}`}>
                <div className='relative left-3'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white md:hidden'>
                        <span className='text-white'>
                            {isMenuOpen === true ?
                                <FaRegTimesCircle className='w-8 h-8'></FaRegTimesCircle>
                                :
                                <></>
                            }
                        </span>
                    </button>
                </div>
                <div>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'bg-yellow-500 px-2 py-1 rounded text-lg duration-300 font-bold' : 'font-bold hover:text-green-500 text-white duration-500')}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/books'} className={({ isActive }) => (isActive ? 'text-sky-600 text-xl duration-300 font-bold' : 'font-bold hover:text-yellow-500 text-gray-300 duration-500')}>Books</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-sky-500 text-xl duration-300 font-bold' : 'font-bold hover:text-yellow-500 text-gray-300 duration-500')}>About</NavLink>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;