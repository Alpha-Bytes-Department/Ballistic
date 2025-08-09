import Link from 'next/link';
import React from 'react';

const TryCalculator = ({design = ""}) => {
    return (
        <Link href="/calculator" className={`btn btn-outline btn-[#3d8c40] ${design}`}>Try Calculator</Link >
    );
};

export default TryCalculator;