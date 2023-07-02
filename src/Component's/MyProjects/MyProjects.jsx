import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import project1 from '../../assets/screenshot-the-music-mystery.web.app-2023.06.30-21_55_45.png';
import project2 from '../../assets/screenshot-car-world-77c5e.web.app-2023.06.30-22_00_18.png';
import project3 from '../../assets/screenshot-starlit-gumdrop-d85763.netlify.app-2023.06.30-22_02_01.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

const MyProjects = () => {
    return (
        <div className='h-fit w-full bg-[#343A40] py-10 md:py-5' id='myProject'>
            <div className='flex-col md:px-32 px-5'>
                <h2 className='md:text-9xl text-5xl text-gray-500 text-opacity-20 font-bold md:pt-3 pt-5 md:tracking-wide text-center'>PROJECT'S</h2>
                <p className='text-center text-teal-500 md:text-4xl text-xl font-bold md:-mt-20 -mt-9 border-b-4 pb-3 border-teal-500'>My Project's</p>
            </div>

            <Tabs>
                <TabList className="w-full flex justify-center md:mt-16 mt-10 md:space-x-4 space-x-1">
                    <Tab className="text-xl font-semibold text-gray-200 text-opacity-40 focus:bg-transparent outline-none focus:border-teal-500 focus:text-teal-500 px-2 focus:border-b-2 border-b-2 border-teal-500 hover:cursor-pointer">PROJECT-1</Tab>

                    <Tab className="text-xl font-semibold text-gray-200 text-opacity-40 focus:bg-transparent outline-none focus:border-teal-500 focus:text-teal-500 px-2 focus:border-b-2 border-b-2 border-teal-500 hover:cursor-pointer">PROJECT-2</Tab>

                    <Tab className="text-xl font-semibold text-gray-200 text-opacity-40 focus:bg-transparent outline-none focus:border-teal-500 focus:text-teal-500 px-2 focus:border-b-2 border-b-2 border-teal-500 hover:cursor-pointer">PROJECT-3</Tab>
                </TabList>

                <TabPanel className='w-full h-full mt-8 md:px-10 px-5'>
                    <div className='md:flex w-[100%] border-2 border-gray-500 rounded-lg gap-4 p-4'>
                        <div className='md:w-[30%]'>
                            <div className="relative max-w-full h-72 overflow-hidden rounded-md">
                                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                    <img src={project1} alt="" className="w-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[70%] mt-5 md:mt-0 text-white'>
                            <h2 className='text-4xl font-semibold text-teal-500'>Music Mystery</h2>
                            <ul className='leading-tight my-5 space-y-2 text-lg text-gray-200 text-opacity-60 font-semibold '>
                                <li>1. There have 3 type of user's, like(Admin, Musician, and Student's).</li>
                                <li className=''>2. Admin can control the other user's activity's, like a admin can promote or delete a normal user.Musician can post there courses for sell also they are avail to update the courses.Student can purchase any course and also can pay for the specific course..etc</li>
                                <li>Technology's: (html5, css3, react.js, node.js, express.js, mongodb, tailwindcss, daisyUI, firebase, "stripe" for payment)</li>
                            </ul>
                            <a className='text-teal-500 font-semibold hover:underline flex items-center gap-2' href="https://the-music-mystery.web.app/">Visit Music Mystery <FaExternalLinkAlt className='w-3'></FaExternalLinkAlt></a>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className='w-full h-full mt-8 px-10'>
                    <div className='md:flex w-[100%] border-2 border-gray-500 rounded-lg gap-4 p-4'>
                        <div className='md:w-[30%]'>
                            <div className="relative max-w-full h-72 overflow-hidden rounded-md">
                                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                    <img src={project2} alt="" className="w-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[70%] mt-5 md:mt-0 text-white'>
                            <h2 className='text-4xl font-semibold text-teal-500'>Car World</h2>
                            <ul className='leading-tight my-5 space-y-2 text-lg text-gray-200 text-opacity-60 font-semibold '>
                                <li>1. It's a toy car's based ecommerce website.</li>
                                <li>2. Seller can post a product with details, and customer can buy it ( payment method not implemented )</li>
                                <li><span className='text-yel'>Technology's:</span> (html5, css3, react.js, node.js, express.js, mongodb, tailwindcss, daisyUI, firebase)</li>
                            </ul>
                            <a className='text-teal-500 font-semibold hover:underline flex items-center gap-2' href="https://car-world-77c5e.web.app/">Visit Car World<FaExternalLinkAlt className='w-3'></FaExternalLinkAlt></a>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className='w-full h-full mt-8 px-10'>
                    <div className='md:flex w-[100%] border-2 border-gray-500 rounded-lg gap-4 p-4'>
                        <div className='md:w-[30%]'>
                            <div className="relative max-w-full h-72 overflow-hidden rounded-md">
                                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                    <img src={project3} alt="" className="w-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[70%] mt-5 md:mt-0 text-white'>
                            <h2 className='text-4xl font-semibold text-teal-500'>JOB BAZAR.COM</h2>
                            <ul className='leading-tight my-5 space-y-2 text-lg text-gray-200 text-opacity-60 font-semibold '>
                                <li>1. It's a job portal based static website, like(wellfound, internshala.etc).</li>
                                <li className=''>2. User can create account and apply jobs, also user can filter job's by remote or onside..etc</li>
                                <li className=''>Technology's : (html5, css3, tailwind, daisyUi, javascript, react.js, firebase)</li>
                            </ul>
                            <a className='text-teal-500 font-semibold hover:underline flex items-center gap-2' href="https://starlit-gumdrop-d85763.netlify.app/">Visit JOB BAZAR.COM <FaExternalLinkAlt className='w-3'></FaExternalLinkAlt></a>
                        </div>
                    </div>
                </TabPanel>
                
            </Tabs>

        </div>
    );
};

export default MyProjects;