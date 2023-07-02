import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'
import { FaAngleDoubleDown } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <div className='h-fit bg-fixed w-full flex flex-col justify-center items-center bg-Img p-4 md:p-0' id='home'>
                <h2 className='font-bold text-3xl text-white mb-5 md:pt-48 pt-10'>Welcome</h2>
                <h3 className='text-white md:text-[50px] text-xl md:font-bold'>
                    {'<'} I'm {' '}
                    <span className='text-[#14B8A6] font-bold'>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["a web developer","a MERN stack developer","a full stack developer"]}
                            loop={Infinity}
                            cursor
                            cursorStyle='/'
                            typeSpeed={60}
                            deleteSpeed={60}
                            delaySpeed={3000}
                        />
                    </span>
                        {'>'}
                </h3>
                <p className='font-semibold text-center md:mt-6 mt-3 text-white text-2xl '>based in Chittagong, Bangladesh.</p>
                <Link to="ContactMe" smooth={true} offset={0} duration={400}>
                    <button className='border-2 btn bg-transparent text-teal-500 p-2 rounded-lg mt-10 font-semibold border-teal-500 hover:bg-teal-500 hover:text-black duration-500 hover:font-semibold transition ease-in-out delay-50 hover:-translate-y-0 hover:scale-110 hover:border-teal-500 '>Contact Me</button>
                </Link>
                <p className='text-white mt-12 md:pb-32 pb-10'>
                    <FaAngleDoubleDown className='text-teal-500 w-8 h-7 animate-bounce'></FaAngleDoubleDown>
                </p>
            </div>
            <AboutMe></AboutMe>
        </>
    );
};

export default Home;