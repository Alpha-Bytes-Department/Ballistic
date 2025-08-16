import React from 'react';

const Calculate = ({design = ""}) => {
    return (
        <button className={`btn bg-[#2C2C2C] text-white ${design}`}>Calculate</button>
    );
};

export default Calculate;