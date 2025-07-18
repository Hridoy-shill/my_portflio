import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaPhoneSquareAlt, FaRegEnvelope, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='h-fit w-full bg-[#212529] md:pb-10' id='ContactMe'>
            <div className='flex-col md:px-32 px-5'>
                <h2 className='md:text-9xl text-5xl text-gray-500 text-opacity-20 font-bold md:pt-10 pt-5 md:tracking-wide text-center'>CONTACT'S</h2>
                <p className='text-center text-teal-500 md:text-4xl text-xl font-bold md:-mt-20 -mt-9 border-b-4 pb-3 border-teal-500'>Get in Touch</p>
            </div>

            <div className='md:w-[100%] text-white md:flex md:mt-20 mt-10 md:px-10 px-5 gap-10'>
                <div  className='md:w-[30%]'>
                    <h2 className='text-xl font-semibold text-teal-500'>ADDRESS</h2>
                    <div className='mt-5'>
                        <p className='text-lg font-medium '>Hossain Ali tower, 5th Floor</p>
                        <p className='text-lg font-medium '>Bahadderhut, Chittagong</p>
                        <p className='text-lg font-medium '>Bangladesh.</p>
                    </div>
                    <div className='mt-5 space-y-3'>
                        <p className='flex items-center font-semibold gap-3'><FaPhoneAlt className='w-5 h-5 text-teal-500'></FaPhoneAlt> +88016-3708-1773</p>
                        <p className='flex items-center font-semibold gap-3'><FaRegEnvelope className='w-5 h-5 text-teal-500'></FaRegEnvelope>ridoyaaa60@gmail.com</p>
                        <a href='https://wa.me/qr/HJICWKH5N7OPF1' className='flex items-center font-semibold gap-3'><FaWhatsapp className='w-5 h-5 text-teal-500'></FaWhatsapp> +88016-3708-1773</a>
                    </div>

                    <h2 className='text-xl font-semibold text-teal-500 mt-8'>FOLLOW ME</h2>
                    <div className='flex space-x-5 md:mt-4 mt-2 mb-8 md:mb-0'>
                        <a href="https://www.facebook.com/HridoyShillrohan/">
                            <FaFacebook className='w-6 h-6 text-gray-400 hover:text-teal-500 hover:w-7 hover:h-7 duration-200'></FaFacebook>
                        </a>
                        <a href="https://github.com/Hridoy-shill">
                            <FaGithub className='w-6 h-6 text-gray-400 hover:text-teal-500 hover:w-7 hover:h-7 duration-200'></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/hridoy-shill-453a0422b/">
                            <FaLinkedin className='w-6 h-6 text-gray-400 hover:text-teal-500 hover:w-7 hover:h-7 duration-200'></FaLinkedin>
                        </a>
                        <a href="/">
                            <FaTwitter className='w-6 h-6 text-gray-400 hover:text-teal-500 hover:w-7 hover:h-7 duration-200'></FaTwitter>
                        </a>
                    </div>
                </div>
                <div className='md:w-[70%]'>
                    <h2 className='text-xl font-semibold text-teal-500'>SEND US A NOTE</h2>

                    <form id='myFrom' action="https://formspree.io/f/meqbjnvo"
                        method="POST">
                        <div className='flex space-x-5 md:mt-7 mt-3'>
                            <input className='w-full p-2 rounded-md text-white text-lg bg-[#343A40]' type="text" name="name" id="name" placeholder='Name' required />

                            <input className='w-full p-2 rounded-md text-white text-lg bg-[#343A40]' type="email" name="name" id="name" placeholder='Email' required />

                        </div>

                        <textarea className='w-full bg-[#343A40] mt-5 rounded-md p-2 text-lg' name="message" id="" cols="30" rows="5" placeholder='Message us for more...' required></textarea>

                        <div className='md:w-full text-center'>
                            <input className='border-2 btn bg-transparent text-teal-500 p-2 rounded-lg md:mt-5 my-5 md:my-0 font-semibold border-teal-500 hover:bg-teal-500 hover:text-black duration-500 hover:font-semibold transition ease-in-out delay-50 hover:-translate-y-0 hover:scale-110 hover:border-teal-500 md:w-[20%] w-24 text-center' type="submit" value="SEND" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;