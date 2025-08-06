import BallisticCalculator from '@/components/Calculator/BallisticCalculator/BallisticCalculator';
import Features from '@/components/Features/Features';
import Banner from '@/components/LandingPage/Banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner/>
            <BallisticCalculator design="my-10"/>
            <Features/>
        </div>
    );
};

export default page;