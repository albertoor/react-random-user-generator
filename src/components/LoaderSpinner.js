import React from 'react';
import './LoaderSpinner.css';
import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
  return (
    <div className="spinner">
      <Loader type="Bars" color="#eee" height={100} width={100} />
    </div>
  );
};

export default LoaderSpinner;
