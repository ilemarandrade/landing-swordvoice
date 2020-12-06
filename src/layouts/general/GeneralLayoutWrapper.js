import React from 'react';
import GeneralLayout from './GeneralLayout';

const GeneralLayoutWrapper = ({ children }) => {
  const onGoHome = () => {
    console.log('going home');
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: 0,
    });
  };
  return <GeneralLayout onGoHome={onGoHome}>{children}</GeneralLayout>;
};

export default GeneralLayoutWrapper;
