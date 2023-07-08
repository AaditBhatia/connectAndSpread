import React from 'react';
import DonatePic from '../DonatePic';

const Donate: React.FC = () => {
  return (
    <div className="flex h-2/3 ">
      <div className="w-1/2 flex-grow bg-gray-100 justify-center items-center">
        <DonatePic/>
      </div>
      <div className="w-1/2 bg-pink-50 flex flex-col justify-center items-center">
        <div className="w-1/2 h-1/2">
          <h2 className="text-2xl font-bold text-black">Donate</h2>
          <p className="text-gray-500">Help us grow</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;