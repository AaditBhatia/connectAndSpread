import React from 'react';
import DonatePic from './DonatePic';
const OurProjects: React.FC = () => {
  return (
    <div className="flex h-2/3 ">
      <div className="w-1/2 flex-grow bg-gray-100 justify-center items-center">
        <DonatePic/>
      </div>
      <div className="w-1/2 bg-purple-50 flex flex-col justify-center items-center">
        <div className="w-1/2 h-1/2">
          <h2 className="text-2xl font-bold text-black">Our projects</h2>
          <p className="text-gray-500">Names and 6 words about each</p>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;