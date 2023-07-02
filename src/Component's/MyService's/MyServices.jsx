import React from 'react';
import { FaBug, FaChalkboardTeacher, FaDatabase, FaDesktop } from 'react-icons/fa';

const MyServices = () => {
    return (
        <div className='h-screen w-full bg-[#343A40] px-10' id='myService'>
            <div data-aos="fade-up" className='flex-col px-32'>
                <h2 className='text-9xl text-gray-500 text-opacity-20 font-bold pt-10 tracking-wide text-center'>SERVICE'S</h2>
                <p className='text-center text-teal-500 text-4xl font-bold -mt-20 border-b-4 pb-3 border-teal-500'>What I Do ?</p>
            </div>

            <div className='grid md:grid-cols-2 mt-20 gap-5'>
                <div data-aos="fade-right" className='text-white gap-3 flex w-[100%]'>
                    <p className='w-[25%] bg-teal-500 p-5 rounded-lg'>
                        <FaChalkboardTeacher className='w-full h-full text-black'></FaChalkboardTeacher>
                    </p>
                    <div className='w-[75%]'>
                        <p className='font-semibold text-teal-500 text-2xl'>Developing Front-End website</p>
                        <p className='text-base font-semibold mt-2 text-gray-400'>I can develop any kind's of front end project with in less time.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='text-white gap-3 flex w-[100%]'>
                    <p className='w-[25%] bg-teal-500 p-5 rounded-lg'>
                        <FaDatabase className='w-full h-full text-black'></FaDatabase>
                    </p>
                    <div className='w-[75%]'>
                        <p className='font-semibold text-teal-500 text-2xl'>Developing Back-End website</p>
                        <p className='text-base font-semibold mt-2 text-gray-400'>I can develop any kind's of Back end project with in less time.</p>
                    </div>
                </div>
                <div data-aos="fade-right" className='text-white gap-3 flex w-[100%] mt-5'>
                    <p className='w-[25%] bg-teal-500 p-5 rounded-lg'>
                        <FaDesktop className='w-full h-full text-black'></FaDesktop>
                    </p>
                    <div className='w-[75%]'>
                        <p className='font-semibold text-teal-500 text-2xl'>Developing Full-stack website</p>
                        <p className='text-base font-semibold mt-2 text-gray-400'>I can develop any kind's of full-stack project with in less time.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='text-white gap-3 flex w-[100%] mt-5'>
                    <p className='w-[25%] bg-teal-500 p-5 rounded-lg'>
                        <FaBug className='w-full h-full text-black'></FaBug>
                    </p>
                    <div className='w-[75%]'>
                        <p className='font-semibold text-teal-500 text-2xl'>Bug's fixing</p>
                        <p className='text-base font-semibold mt-2 text-gray-400'>I fix the bug's of website's in less time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;