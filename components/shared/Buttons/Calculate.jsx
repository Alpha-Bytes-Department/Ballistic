import React from 'react';

const Calculate = ({design = ""}) => {
    return (
        <button className={`btn bg-[#3d8c40] text-white ${design}`}>Calculate</button>
    );
};

export default Calculate;