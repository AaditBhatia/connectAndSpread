import React from 'react';
import DonatePic from './DonatePic';

const OurProjects = () => {
  return (
    <div className="flex justify-center bg-purple-50">
      <div className="flex flex-wrap items-start gap-4">
        <div className="max-w-xs rounded overflow-hidden shadow-lg mb-12 mt-4">
          <DonatePic />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 1</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg mb-12 mt-4">
          <DonatePic />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 2</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg mb-12 mt-4">
          <DonatePic />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 3</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;