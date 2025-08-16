import React from 'react';
import TryCalculator from '../shared/Buttons/TryCalculator';
import Continue from '../shared/Buttons/Continue';

const GetStarted = () => {
    return (
        <div className='py-10 my-10 bg-[#1E1E1E] flex flex-col justify-center items-center gap-8 text-white'>
            <h1 className='text-2xl font-klear-bold'>Ready to Get Started?</h1>
            <p className='font-klear-light'>The purpose of a FAQ is generally to provide information on frequent questions or concerns.</p>
            <div className='flex items-center gap-10'>
                <TryCalculator/>
                <Continue/>
            </div>
        </div>
    );
};

export default GetStarted;