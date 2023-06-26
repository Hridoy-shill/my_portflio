import React from 'react';
import Navbar from '../Component\'s/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='md:flex w-[100%]'>
            <div className='bg-black md:w-[20%]'>
                <Navbar></Navbar>
            </div>
            <div className='md:col-span-3 md:w-[80%]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomePage;