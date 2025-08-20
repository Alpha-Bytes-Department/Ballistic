"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from './Banner';

const ManageShowBanner = () => {
    const pathName = usePathname();
    return pathName==="/"|| pathName==="/home" ? <Banner/> : null
};

export default ManageShowBanner;