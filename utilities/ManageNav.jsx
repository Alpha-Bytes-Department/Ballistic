"use client"
import Navbar from '@/components/shared/Navbar/Navbar';
import { usePathname } from 'next/navigation';
import React from 'react';

const ManageNav = () => {
    const pathName = usePathname();
    return pathName==="/calculator"|| pathName==="/features" || pathName==="/contact-us" ? <Navbar design={{fill: "black", color: "text-black"}}/> : <Navbar/>
};

export default ManageNav;