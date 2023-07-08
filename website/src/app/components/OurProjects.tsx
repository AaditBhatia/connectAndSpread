import React from 'react';
import DonatePic from './DonatePic';

const OurProjects = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg mx-1 sm:mx-4 md:mx-6 lg:mx-8">
        <DonatePic />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Project 1</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 sm:mx-8 md:mx-12 lg:mx-16">
        <DonatePic />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Project 2</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 sm:mx-4 md:mx-6 lg:mx-8">
        <DonatePic />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Project 3</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;