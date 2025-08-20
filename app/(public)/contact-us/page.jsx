import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import ContactUsForm from '@/components/ContactUs/ContactUsForm';


const contactUs = () => {
    return (
        <div className='flex flex-wrap justify-around gap-10 items-center my-36 mx-auto'>
            <div>
                <h1 className='text-7xl'>Contact Us</h1>
                <ContactUsForm/>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl'>Let's talk with us</h1>
                <h3>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</h3>
                <div>
                    <h3 className='flex gap-2'><CiLocationOn className='text-[#2C2C2C] text-2xl font-klear-bold' /> 1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</h3>
                </div>
                <div>
                    <h3 className='flex gap-2'><MdWifiCalling3  className='text-[#2C2C2C] text-2xl font-klear-bold' /> +1 546 5415 1651</h3>
                </div>
                <div>
                    <h3 className='flex gap-2'><IoMailOutline   className='text-[#2C2C2C] text-2xl font-klear-bold' /> abcd@gmail.com</h3>
                </div>
            </div>
        </div>
    );
};

export default contactUs;