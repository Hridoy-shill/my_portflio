import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className='h-screen w-full flex justify-center items-center bg-Img' id='home'>
            <p className='text-xl text-white'>this is home</p>
        </div>
        <AboutMe></AboutMe>
        </>
    );
};

export default Home;