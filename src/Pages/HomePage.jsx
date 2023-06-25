import React from 'react';
import Navbar from '../Component\'s/Navbar/Navbar';

const HomePage = () => {
    return (
        <div className='grid md:grid-cols-4'>
            <div className='bg-black'>
                <Navbar></Navbar>
            </div>
            <div className='md:col-span-3 bg-slate-400'>
                main content
            </div>
        </div>
    );
};

export default HomePage;