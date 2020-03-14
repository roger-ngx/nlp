import React from 'react';
import Lottie from 'react-lottie';

import './LoadingIndicator.scss';
import animationData from '../assets/loading.json';

const LoadingIndicator = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#f1f0f0',
                width: '60px',
                height: '30px',
                alignItems: 'center',
                borderRadius: '15px'
            }}
        >
            <Lottie
                options={defaultOptions}
            />
        </div>
    )
}

export default LoadingIndicator;