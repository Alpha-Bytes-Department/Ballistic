"use client"
import GetStarted from '@/components/GetStarted/GetStarted';
import { usePathname } from 'next/navigation';
import React from 'react';

const ManageShowGetReady = () => {
    const pathName = usePathname();
    return pathName==="/"|| pathName==="/home" || pathName==="/features" ? <GetStarted/> : null
};

export default ManageShowGetReady;