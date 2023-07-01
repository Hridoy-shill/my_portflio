import React from 'react';

const AboutMe = () => {
    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/file/d/1J_ENoEKfFVXLVN8vjdQ7v4ImW2ayXr_O/view?usp=sharing';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'Hridoy_shill_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='h-screen md:flex-row justify-center bg-[#212529]' id='aboutMe'>
            <div className='flex-col px-32'>
                <h2 className='md:text-9xl text-2xl text-gray-500 text-opacity-20 font-bold md:pt-10 pt-5 md:tracking-wide text-center'>ABOUT-ME</h2>
                <p className='text-center text-teal-500 md:text-4xl text-xl font-bold md:-mt-20 border-b-4 pb-3 border-teal-500'>More About Me</p>
            </div>

            <div className='px-10 mt-20 md:flex gap-5'>
                <div className='text-white md:w-[65%] p-2 mb-5 md:mb-0'>
                    <p className='font-semibold text-2xl tracking-wide'>I'm <span className='font-bold text-2xl text-teal-500'>Hridoy shill</span>, a junior MERN stack developer</p>
                    <p className='mt-5 text-justify text-gray-400 font-semibold'>As a hardworking and dedicated junior MERN stack web developer, I strive to constantly challenge myself and grow in my field. With a passion for coding and a determination to excel, I am committed to delivering high-quality and innovative web solutions. I possess a solid understanding of the MERN stack and its various components.</p>
                    <p className='mt-5 text-justify text-gray-400 font-semibold'>By continuously pushing myself to learn and develop, I am confident in my ability to contribute effectively to any MERN stack development team and make a positive impact in the industry.</p>
                </div>
                <div className='text-white md:w-[35%] border-l-4 border-teal-500 p-2 space-y-4'>
                    <p className='text-xl text-teal-500 font-semibold border-b-2 border-b-gray-500 py-2'>Name: <span className='text-white text-lg'>Hridoy Shill</span></p>
                    <p className='text-xl text-teal-500 font-semibold border-b-2 border-b-gray-500 py-2'>Email: <span className='text-white text-lg'>hridoyshill773jb@gmail.com</span></p>
                    <p className='text-xl text-teal-500 font-semibold border-b-2 border-b-gray-500 py-2'>Age: <span className='text-white text-lg'>22</span></p>
                    <p className='text-xl text-teal-500 font-semibold border-b-2 border-b-gray-500 py-2'>From: <span className='text-white text-lg'>Chittagong, Bangladesh</span></p>
                </div>
            </div>
            <div className='text-center py-10'>
                <button onClick={handleDownload} className='btn bg-transparent hover:bg-teal-500 text-teal-500 hover:text-black font-bold border-teal-500 hover:border-teal-500 duration-500'>Download CV</button>
            </div>
        </div>
    );
};

export default AboutMe;