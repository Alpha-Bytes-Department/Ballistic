import React from 'react';

const TryCalculator = ({design = ""}) => {
    return (
        <button className={`btn btn-outline btn-[#3d8c40] ${design}`}>Try Calculator</button>
    );
};

export default TryCalculator;