import React from 'react';
import './Loader.scss';

const Loader = ({ size }) => {
    return (
        <div className="loader" style={{ width: size, height: size }} />
    );
};
export default Loader;
