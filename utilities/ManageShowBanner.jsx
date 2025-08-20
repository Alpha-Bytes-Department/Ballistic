"use client"
import Banner from '@/components/LandingPage/Banner';
import { usePathname } from 'next/navigation';
import React from 'react';

const ManageShowBanner = () => {
    const pathName = usePathname();
    return pathName==="/"|| pathName==="/home" ? <Banner/> : null
};

export default ManageShowBanner;