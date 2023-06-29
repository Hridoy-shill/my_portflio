import React, { useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaLinkedin, FaRegTimesCircle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll'
import myImg from '../../assets/WhatsApp_Image_2023-06-17_at_20.24.34__1_-removebg-preview.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='p-3 md:p-4 md:sticky md:top-0'>
            <div className='flex justify-between '>
                <div className='md:mx-auto'>
                    <img className='rounded-full md:w-44 w-14 border-4 border-yellow-500 duration-500' src={myImg} title='Hridoy shill'/>
                    <p className='text-yellow-500 font-bold md:text-center text-2xl md:text-2xl mt-2'>Hridoy Shill</p>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden'>
                    <span className='text-white'>
                        {isMenuOpen === true ?
                            <></>
                            :
                            <FaBars className='w-6 h-6 text-yellow-500'></FaBars>
                        }
                    </span>
                </div>
            </div>
            <ul className={`lg:static p-2 bg-black absolute flex flex-row-reverse justify-between px-5 duration-500 ${isMenuOpen ? 'top-0 right-0 w-full' : '-top-96 right-0 w-full'}`}>
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
                <nav className='md:text-center mx-auto space-y-5 mt-6'>
                    <li>
                        <Link to="home" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-yellow-500 hover:p-1 hover:text-black hover:font-semibold hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl'>Home</Link>
                    </li>
                    <li>
                        <Link to="aboutMe" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-yellow-500 hover:p-1 hover:text-black hover:rounded hover:font-semibold duration-500 cursor-pointer hover:text-xl'>About-Me</Link>
                    </li>
                    <li>
                        <Link to="myService" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-yellow-500 hover:p-1 hover:text-black hover:rounded hover:font-semibold duration-500 cursor-pointer hover:text-xl'>My Service's</Link>
                    </li>
                    <li>
                        <Link to="mySkills" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-yellow-500 hover:p-1 hover:text-black hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl'>My Skill's</Link>
                    </li>
                    <li>
                        <Link to="ContactMe" smooth={true} offset={0} duration={400} className='text-white text-lg hover:bg-yellow-500 hover:p-1 hover:text-black hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl'>Contact Me</Link>
                    </li>
                </nav>
            </ul>
            <div className='flex justify-center space-x-5 mt-10'>
                <FaFacebook className='w-6 h-6 text-gray-400 hover:text-yellow-500 hover:w-7 hover:h-7 duration-200'></FaFacebook>
                <FaGithub className='w-6 h-6 text-gray-400 hover:text-yellow-500 hover:w-7 hover:h-7 duration-200'></FaGithub>
                <FaLinkedin className='w-6 h-6 text-gray-400 hover:text-yellow-500 hover:w-7 hover:h-7 duration-200'></FaLinkedin>
                <FaTwitter className='w-6 h-6 text-gray-400 hover:text-yellow-500 hover:w-7 hover:h-7 duration-200'></FaTwitter>
            </div>
        </div>
    );
};

export default Navbar;