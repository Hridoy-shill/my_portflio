import React from 'react';
import { FaBug, FaChalkboardTeacher, FaDatabase, FaDesktop } from 'react-icons/fa';

const MyServices = () => {
    return (
        <div className='h-fit w-full bg-[#343A40] md:px-10 px-3 pb-10 md:pb-28' id='myService'>
            <div  className='flex-col md:px-32 px-5'>
                <h2 className='md:text-9xl text-5xl text-gray-500 text-opacity-20 font-bold md:pt-10 pt-5 md:tracking-wide text-center'>SERVICE'S</h2>
                <p className='text-center text-teal-500 md:text-4xl text-xl font-bold md:-mt-20 -mt-9 border-b-4 pb-3 border-teal-500'>What I Do ?</p>
            </div>

            <div className='grid md:grid-cols-2 md:mt-20 mt-10 gap-5'>
                <div  className='text-white gap-3 flex w-[100%]'>
                    <p className='w-[25%] bg-teal-500 p-5 rounded-lg'>
                        <FaChalkboardTeacher className='w-full h-full text-black'></FaChalkboardTeacher>
                    </p>
                    <div className='w-[75%]'>
                        <p className='font-semibold text-teal-500 text-2xl'>Developing Front-End website</p>
                        <p className='text-base font-semibold mt-2 text-gray-400'>I can develop any kind's of front end project with in less time.</p>
                    </div>
                </div>
                <div  className='text-white gap-3 flex w-[100%]'>
                    <p className='w-[25%] bg-teal-500 p-5 rounded-lg'>
                        <FaDatabase className='w-full h-full text-black'></FaDatabase>
                    </p>
                    <div className='w-[75%]'>
                        <p className='font-semibold text-teal-500 text-2xl'>Developing Back-End website</p>
                        <p className='text-base font-semibold mt-2 text-gray-400'>I can develop any kind's of Back end project with in less time.</p>
                    </div>
                </div>
                <div  className='text-white gap-3 flex w-[100%] mt-5'>
                    <p className='w-[25%] bg-teal-500 p-5 rounded-lg'>
                        <FaDesktop className='w-full h-full text-black'></FaDesktop>
                    </p>
                    <div className='w-[75%]'>
                        <p className='font-semibold text-teal-500 text-2xl'>Developing Full-stack website</p>
                        <p className='text-base font-semibold mt-2 text-gray-400'>I can develop any kind's of full-stack project with in less time.</p>
                    </div>
                </div>
                <div  className='text-white gap-3 flex w-[100%] mt-5'>
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