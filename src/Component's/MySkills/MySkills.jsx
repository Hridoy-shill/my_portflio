import React from 'react';
import mongoDB_img from '../../assets/mongodb.png'
import tailwind_img from '../../assets/tailwind-css.png'
import './MySkills.css'
import { FaBootstrap, FaCss3Alt, FaFire, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const MySkills = () => {
    return (
        <div className='w-full h-screen bg-[#212529] text-white' id='mySkills'>
            <div className='flex-col px-32'>
                <h2 className='text-9xl text-gray-500 text-opacity-20 font-bold pt-10 tracking-wide text-center'>My Skill's</h2>
                <p className='text-center text-yellow-500 text-4xl font-bold -mt-20 border-b-4 pb-3 border-yellow-500'>Skill's !</p>
            </div>

            <div className='mt-16 grid grid-cols-5 gap-5 px-5'>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 90, "--size": "7rem", fontWeight: "bold" }} id="html-title">
                        <FaHtml5 className='w-10 h-10 text-center hide'></FaHtml5>
                    </div>
                    <ReactTooltip
                        anchorId="html-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="90%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>HTML5</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 90, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="css-title">
                        <FaCss3Alt className='w-10 h-10 text-center'></FaCss3Alt>
                    </div>
                    <ReactTooltip
                        anchorId="css-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="90%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>CSS3</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 80, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="javaScript-title">
                        <FaJs className='w-10 h-10 text-center'></FaJs>
                    </div>
                    <ReactTooltip
                        anchorId="javaScript-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="80%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>JavaScript</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 90, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="react-title">
                        <FaReact className='w-10 h-10 text-center'></FaReact>
                    </div>
                    <ReactTooltip
                        anchorId="react-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="90%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>React.JS</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 80, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="node-title">
                        <FaNodeJs className='w-10 h-10 text-center'></FaNodeJs>
                    </div>
                    <ReactTooltip
                        anchorId="node-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="80%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>Node.JS</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 80, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="express-title">
                        <p className='bg-yellow-500 text-[#212529] px-2 py-1 rounded text-2xl'>Ex</p>
                    </div>
                    <ReactTooltip
                        anchorId="express-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="80%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>Express.JS</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 80, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="mongoDB-title">
                        <img className='bg-yellow-500 w-10 p-1 rounded' src={mongoDB_img} alt="" />
                    </div>
                    <ReactTooltip
                        anchorId="mongoDB-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="80%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>MongoDB</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 80, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="firebase-title">
                        <FaFire className='w-10 h-10 text-center'></FaFire>
                    </div>
                    <ReactTooltip
                        anchorId="firebase-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="80%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>Firebase</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 90, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="bootstrap-title">
                        <FaBootstrap className='w-10 h-10 text-center'></FaBootstrap>
                    </div>
                    <ReactTooltip
                        anchorId="bootstrap-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="90%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>Bootstrap</p>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 90, "--size": "7rem", fontSize: "23px", fontWeight: "bold" }} id="tailwind-title">
                        <img className='bg-yellow-500 w-10 p-1 rounded' src={tailwind_img} alt="" />
                    </div>
                    <ReactTooltip
                        anchorId="tailwind-title"
                        place="right"
                        className='custom-arrow-radius'
                        variant="warning"
                        style={{ backgroundColor: "#EAB308", color: "#FFFFFF", fontSize: "20px", opacity: 100 }}
                        content="90%"
                        delayShow={200}
                        delayHide={200}
                    />
                    <p className='mt-3 text-xl font-bold'>Tailwind_Css</p>
                </div>
            </div>
        </div>
    );
};

export default MySkills;