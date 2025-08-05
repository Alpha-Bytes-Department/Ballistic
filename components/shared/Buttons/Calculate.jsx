import React from 'react';

const Calculate = ({design = ""}) => {
    return (
        <button className={`btn bg-success text-white ${design}`}>Calculate</button>
    );
};

export default Calculate;