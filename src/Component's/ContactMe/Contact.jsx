import { clear } from 'localforage';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaPhoneSquareAlt, FaRegEnvelope, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='h-screen w-full bg-[#212529]' id='ContactMe'>
            <div className='flex-col px-32'>
                <h2 className='text-9xl text-gray-500 text-opacity-20 font-bold pt-10 tracking-wide text-center'>CONTACT'S</h2>
                <p className='text-center text-teal-500 text-4xl font-bold -mt-20 border-b-4 pb-3 border-teal-500'>Get in Touch</p>
            </div>

            <div className='w-[100%] text-white flex mt-20 px-10 gap-10'>
                <div className='w-[30%]'>
                    <h2 className='text-xl font-semibold text-teal-500'>ADDRESS</h2>
                    <div className='mt-5'>
                        <p className='text-lg font-medium '>Hossain Ali tower, 5th Floor</p>
                        <p className='text-lg font-medium '>Bahadderhut, Chittagong</p>
                        <p className='text-lg font-medium '>Bangladesh.</p>
                    </div>
                    <div className='mt-5 space-y-3'>
                        <p className='flex items-center font-semibold gap-3'><FaPhoneAlt className='w-5 h-5 text-teal-500'></FaPhoneAlt> +88016-3708-1773</p>
                        <p className='flex items-center font-semibold gap-3'><FaRegEnvelope className='w-5 h-5 text-teal-500'></FaRegEnvelope>hridoyshill773jb@gmail.com</p>
                        <p className='flex items-center font-semibold gap-3'><FaWhatsapp className='w-5 h-5 text-teal-500'></FaWhatsapp> +88016-3708-1773</p>
                    </div>
                    <h2 className='text-xl font-semibold text-teal-500 mt-8'>FOLLOW ME</h2>
                    <div className='flex space-x-5 mt-4'>
                        <FaFacebook className='w-6 h-6 text-gray-400 hover:text-teal-500 hover:w-7 hover:h-7 duration-200'></FaFacebook>
                        <FaGithub className='w-6 h-6 text-gray-400 hover:text-teal-500 hover:w-7 hover:h-7 duration-200'></FaGithub>
                        <FaLinkedin className='w-6 h-6 text-gray-400 hover:text-teal-500 hover:w-7 hover:h-7 duration-200'></FaLinkedin>
                        <FaTwitter className='w-6 h-6 text-gray-400 hover:text-teal-500 hover:w-7 hover:h-7 duration-200'></FaTwitter>
                    </div>
                </div>
                <div className='w-[70%]'>
                    <h2 className='text-xl font-semibold text-teal-500'>SEND US A NOTE</h2>
                    <form id='myFrom' action="https://formspree.io/f/meqbjnvo"
                        method="POST">
                        <div className='flex space-x-5 mt-7'>
                            <input className='w-full p-2 rounded-sm text-white text-lg bg-[#343A40]' type="text" name="name" id="name" placeholder='Name' required/>
                            <input className='w-full p-2 rounded-sm text-white text-lg bg-[#343A40]' type="email" name="name" id="name" placeholder='Email' required/>
                        </div>
                        <textarea className='w-full bg-[#343A40] mt-5 rounded-sm p-2 text-lg' name="message" id="" cols="30" rows="5" placeholder='Message us for more...' required></textarea>

                        <div className='w-full text-center'>
                            <input className='border-2 btn bg-transparent text-teal-500 p-2 rounded-lg mt-5 font-semibold border-teal-500 hover:bg-teal-500 hover:text-black duration-500 hover:font-semibold transition ease-in-out delay-50 hover:-translate-y-0 hover:scale-110 hover:border-teal-500 w-[20%] text-center' type="submit" value="SEND"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;