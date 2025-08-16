import Link from 'next/link';
import React from 'react';

const TryCalculator = ({design = ""}) => {
    return (
        <Link href="/calculator" className={`btn btn-outline btn-[#2C2C2C] ${design}`}>Try Calculator</Link >
    );
};

export default TryCalculator;