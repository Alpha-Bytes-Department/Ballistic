import React from 'react';

const TryCalculator = ({design = ""}) => {
    return (
        <button className={`btn btn-outline btn-success ${design}`}>Try Calculator</button>
    );
};

export default TryCalculator;