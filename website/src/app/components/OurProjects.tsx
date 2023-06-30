import React from 'react';
import OurProjectsPic from './OurProjectsPic';
const OurProjects: React.FC = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-1/2 flex-grow bg-gray-100 justify-center items-center">
        <OurProjectsPic/>
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

export default OurProjects;