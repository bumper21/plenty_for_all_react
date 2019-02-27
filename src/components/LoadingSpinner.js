import React from 'react';
import ReactLoading from 'react-loading';
import './LoadingSpinner.scss';
 
const LoadingSpinner = () => (
    <div className="spinnerParentDiv">
        <ReactLoading type={"spinningBubbles"} color="#000" />
    </div>
)

export default LoadingSpinner;