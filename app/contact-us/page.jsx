import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const contactUs = () => {
    return (
        <div className='flex justify-around items-center my-24 mx-auto'>
            <div>
                <h1 className='text-7xl'>Contact Us</h1>
                <form action="submin" className='flex flex-col gap-3'>
                    <label htmlFor="name">Name</label>
                    <div>
                        <input className='border border-gray-300 focus:outline-0 p-3 rounded w-full' type="text" name="name" id="name" />
                    </div>
                    <label htmlFor="email">Email Address</label>
                    <div>
                        <input className='border border-gray-300 focus:outline-0 p-3 rounded w-full' type="text" name="email" id="email" />
                    </div>
                    <label htmlFor="message">Message</label>
                    <div>
                        <textarea className='border border-gray-300 focus:outline-0 p-3 rounded w-full' name="message" id="message"/>
                    </div>
                    <div><button type='submit' className={`btn bg-success text-white`}>Send <IoArrowForwardCircleOutline className='text-xl'/></button></div>
                </form>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl'>Let's talk with us</h1>
                <h3>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</h3>
                <div>
                    <h3 className='flex gap-2'><CiLocationOn className='text-success text-2xl font-klear-bold' /> 1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</h3>
                </div>
                <div>
                    <h3 className='flex gap-2'><MdWifiCalling3  className='text-success text-2xl font-klear-bold' /> +1 546 5415 1651</h3>
                </div>
                <div>
                    <h3 className='flex gap-2'><IoMailOutline   className='text-success text-2xl font-klear-bold' /> abcd@gmail.com</h3>
                </div>
            </div>
        </div>
    );
};

export default contactUs;