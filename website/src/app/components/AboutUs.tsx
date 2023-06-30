import React from 'react';
import AboutUsPic from './AboutUsPic';
const AboutUs: React.FC = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-1/2 bg-gray-100 justify-center items-center">
        <AboutUsPic/>
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <div className="w-1/2">m
          <h2 className="text-2xl font-bold">Title</h2>
          <p className="text-gray-500">Some description or text here</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;