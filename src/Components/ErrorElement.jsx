import React from 'react';
import Lottie from 'lottie-react';
import ErrorAnimation from '../assets/Lottie/Error.json';

const ErrorElement = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Lottie animationData={ErrorAnimation} loop={true} className="w-1/2 h-auto" />
        </div>
    );
};

export default ErrorElement;
