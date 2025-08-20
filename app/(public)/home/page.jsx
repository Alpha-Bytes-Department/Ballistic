import BallisticCalculator from '@/components/Calculator/BallisticCalculator/BallisticCalculator';
import Features from '@/components/Features/Features';
import React from 'react';

const page = () => {
    return (
        <div>
            <BallisticCalculator design="my-10"/>
            <Features />
        </div>
    );
};

export default page;  