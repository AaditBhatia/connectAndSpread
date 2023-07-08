import React from 'react';
import DonatePic from '../DonatePic';

const OurProjects = () => {
  return (
    <div className='bg-purple-50'>
      <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold text-black">Our Projects</h2>
        </div>
      <div className="flex justify-center">
      
      <div className="flex flex-wrap items-start gap-4">
        <div className="max-w-xs rounded overflow-hidden shadow-lg mb-12 mt-4">
          <DonatePic />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project 1</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg mb-12 mt-4">
          <DonatePic />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project 2</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg mb-12 mt-4">
          <DonatePic />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project 3</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurProjects;